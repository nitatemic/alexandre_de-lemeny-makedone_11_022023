import {Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import LogementDetails from "./LogementDetails.jsx";
import About from "./About.jsx";
import Error from "./Error.jsx";
import React from "react";

export default function ListRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/logement/:id" element={<LogementDetails/>}/>
            <Route exact path="/about" element={<About/>}/>
            {/* Route 404 */}
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
}
