import React from "react";
//import Navbar from "./Navbar";
import data from "./Data";
import Box from "./Box";
function Wrapper(){
    const dtele = data.map((bx, idx)=>
    <Box name={bx.name} category={bx.category} value={bx.value} img={bx.img} id={bx.id} key={idx}/>
    )
    return(
        <div style={{textDecoration: "none", color: "white"}}>
            {dtele}
        </div>
    )
}
export default Wrapper;