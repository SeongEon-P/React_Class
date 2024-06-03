import React from "react";
import ThemeContext from "./ThemeContext";


function ThemeTest10(props){
    return(
        <div>
        <p>ThemeTest10</p>
        <ThemeContext.Consumer>
            {value => value}
        </ThemeContext.Consumer>
        </div>
    )
}

export default ThemeTest10;
