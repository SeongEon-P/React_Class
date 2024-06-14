import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Main from "./pages/Main";
import AddBoard from "./boards/AddBoard";
import EditBoard from "./boards/EditBoard";
import ViewBoard from "./boards/ViewBoard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/addboard" element={<AddBoard />} />
                    <Route path="/editboard/:bno" element={<EditBoard />} />
                    <Route path="/viewboard/:bno" element={<ViewBoard />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
