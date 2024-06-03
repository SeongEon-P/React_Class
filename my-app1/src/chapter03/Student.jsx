import React from "react";

function Student(props){
    return(
        <div>
            <h1>{`학번은 ${props.sno}이고, 이름은 ${props.name}이며, ${props.major}전공 입니다.`}</h1>
                      
        </div>
    );
}
export default Student;