import React from "react";
import {Link} from "react-router-dom";

function Navbar() {

    return (
        <nav>
            <button><Link to={"/"}>All</Link></button>
            <button><Link to={"/DataPg/games"}>Games</Link></button>
            <button><Link to={"/DataPg/television"}>Television</Link></button>
            <button><Link to={"/DataPg/animation"}>Animation</Link></button>

        </nav>
    )
}

export default Navbar;