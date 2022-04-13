import React from "react";

import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditUser = () => {
    return (
        <Form>
            <FormGroup>
                <Label>Edit User</Label>
                <Input placeholder="Enter a user name" type="text"></Input>
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
