import React from "react";
import ThemeContext from "./ThemeContext";


function ThemeTest3(props){
    return(
        <div>
        <p>ThemeTest3</p>
        <ThemeContext.Consumer>
            {value => value}
        </ThemeContext.Consumer>
        </div>
    )
}

export default ThemeTest3;
