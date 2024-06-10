import React from "react";
import styled from "styled-components";


const Input = styled.textarea`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: none;
`;

function TextInput(props) {
    return (
        <Input
            style={{ height: `${props.height}px` }}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    );
}


// const StyleTextArea=styled.textarea`
//     width : calc(100% - 32px);
//     ${(props) =>
//         props.height &&
//         `
//         height : ${props.height}px;
//     `}
//     padding : 16px;
//     font-size : 16px;
//     line-height : 20px;
//     `;

//     function TextInput(props){
//         const {height, value, onChange}=props;
//         return <StyleTextArea height={height} value={value} onChange={onChange} />
//     }
    export default TextInput;