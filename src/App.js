import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { EditUser } from "./components/EditUser";
import { AddUser } from "./components/AddUser";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/add" element={<AddUser />} />
                    <Route path="/edit/:id" element={<EditUser />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;