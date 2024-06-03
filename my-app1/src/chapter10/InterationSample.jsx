import React, { useState } from "react";

function InterationSample(props){
    const [names, setNames]=useState([
        {id : 1, text: '눈사람'},
        {id : 2, text: '얼음'},
        {id : 3, text: '눈'},
        {id : 4, text: '바람'},
    ]);
    const [inputText, setInputText]=useState('');
    const [nextId, setNextId]=useState(5);
    const onChange = e =>setInputText(e.target.value)
    const onClick= () => {
        const nextName=name.concat({
            id:nextId,
            text : inputText
        });
        setNextId(nextId+1);
        setName(nextName);
        setInputText('');
    }
    const onRemove= id =>{
        const nextName=name.filter(name => name.id !== id);
        setName(nextName)
    };

    const nameList=name.map(name =>
        <li id={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>)
    return (
    <>
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>추가</button>
        <ul>{nameList}</ul>
    </>
    )
}
export default InterationSample;