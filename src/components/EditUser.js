import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        id: "",
        name: "",
    });
    const { users, editUser } = useContext(GlobalContext);
    const navigate = useNavigate();
    const currentUserId = props.match.params.id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find((user) => user.id === userId);
        setSelectedUser(selectedUser);
    });

    const onSubmit = () => {
        navigate("/");
    };
    const onChange = (e) => {};
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Edit User</Label>
                <Input
                    placeholder="Enter a user name"
                    type="text"
                    onChange={onChange}
                ></Input>
            </FormGroup>
            <Button type="submit" color="success">
                Edit
            </Button>
            <Link to="/" className="btn btn-danger ml-2">
                Cancel
            </Link>
        </Form>
    );
};
