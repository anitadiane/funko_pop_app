import React from "react";
import data from "./Data";
import Box from "./Box";

function DataPg(props){
    const dtele = data.map((bx,idx) =>
    <Box name={bx.name} category={bx.category} value={bx.value} img={bx.img} id={bx.id} key={idx}/>)

return(
    <div>
        {dtele.filter(funko => funko.props.category === props.match.params.id).map(Funko =>(
            <div className="character">
                <div>
                    <img src={Funko.props.img} alt={props.img}/>
                    <h3>{"Name: " + Funko.props.name}</h3>
                    <h3>{"Category: " + Funko.props.category}</h3>
                    <h3>{"Value: " + Funko.props.value}</h3>
                </div>
            </div>
        ))}
        {dtele.filter(funko => funko.props.name === props.match.params.id).map(Funko =>(
            <div className="character">
                <img src={Funko.props.img} alt={props.img}/>
                <h2>{"Name: " + Funko.props.name}</h2>
                <h2>{"Category: " + Funko.props.category}</h2>
                <h3>{"Value: " + Funko.props.value}</h3>
            </div>
        ))}
    </div>
)
}
export default DataPg;