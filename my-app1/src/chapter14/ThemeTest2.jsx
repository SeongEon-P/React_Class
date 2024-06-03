import React from "react";
import ThemeContext from "./ThemeContext";
import ThemeTest10 from "./ThemeTest10";


function ThemeTest2(props){
    return(
        <div>
        <p>ThemeTest2</p>
        <ThemeContext.Consumer>
            {value => value}
        </ThemeContext.Consumer>

        <ThemeTest10 />
        </div>
    )
}

export default ThemeTest2;
