import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useParams } from "react-router";

export const EditUser = () => {
    let { id } = useParams();
    const { editUser, users } = useContext(GlobalContext);
    const [selectedUser, setSelectedUser] = useState({
        id: "",
        name: "",
    });

    const navigate = useNavigate();
    const currentUserId = id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find((user) => user.id === userId);
        console.log(selectedUser);
        setSelectedUser(selectedUser);
    }, []);

    const onChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        editUser(selectedUser);
        navigate("/");
    };

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input
                    type="text"
                    onChange={onChange}
                    value={selectedUser.name}
                    name="name"
                    placeholder="Enter user"
                    required
                ></Input>
            </FormGroup>
            <Button type="submit">Edit Name</Button>
            <Link to="/" className="btn btn-danger ml-2">
                Cancel
            </Link>
        </Form>
    );
};
