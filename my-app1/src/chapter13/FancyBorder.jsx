import React from "react";

function FancyBorder(props){
    return(
        <div className={"FancyBorder-"+props.color}>
            {props.children}
        </div>
    )
}
export default FancyBorder;
