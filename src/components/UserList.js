import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
    return (
        <ListGroup className="mt-4">
            <ListGroupItem>
                <strong>User one</strong>
                <div className="ml-auto">
                    <Link to="/edit/1" className="  btn btn-warning m-1 ">
                        Edit
                    </Link>
                    <Button color="danger">Delete</Button>
                </div>
            </ListGroupItem>
            <ListGroupItem>
                <strong>User one</strong>
                <div className="ml-auto">
                    <Link to="/edit/1" className="btn btn-warning m-1 ">
                        Edit
                    </Link>
                    <Button color="danger">Delete</Button>
                </div>
            </ListGroupItem>
        </ListGroup>
    );
};
