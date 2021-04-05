import React from "react";
import {Link} from "react-router-dom";
//import style from "./Style";
function Box(props){
const [name] = React.useState(props.name);
const [category] = React.useState(props.category);
const [value] = React.useState(props.value);
const [img] = React.useState(props.img);
    return(
        <div className="character">
            <Link to={"/DataPg/"+name}>
                <img src={img} alt={img}/>
                <h3>Name: {name}</h3>
                <h3>Category: {category}</h3>
                <h3>Value: {value}</h3>
            </Link>
        </div>
    )
}
export default Box;