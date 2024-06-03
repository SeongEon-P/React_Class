import React, { useState } from "react";

function NameForm(props){
    const [name, setName]=useState('');
    const [content, setContent]=useState('')
    const [fruit, setFruit]=useState('');
    const [str, setStr]=useState('');
    
    const handleChange1=(event) =>{
        setName(event.target.value);
    }
    const handleChange2=(event) =>{
        setContent(event.target.value);
    }
    const handleSelect=(event) =>{
        setFruit(event.target.value);
    }
    const handleSubmit=(event)=>{
        alert('이름 :'+ name+', 요청사항:'+content+', 좋아하는 과일 :'+fruit);
        event.preventDefault();
        setStr('이름 :'+ name+', 요청사항:'+content+', 좋아하는 과일 :'+fruit);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>이름 : <input type="text" value={name} onChange={handleChange1}/></div>
                <div>요청사항 :<textarea value={content} onChange={handleChange2}></textarea></div>
                <div>
                    <select value={fruit} onChange={handleSelect}>
                        <option value="apple">사과</option>
                        <option value="banana">바나나</option>
                        <option value="grape">포도</option>
                        <option value="watermelon">수박</option>
                    </select>
                </div>
                <div><button type="submit">제출</button></div>
            </form>
            <div>{str}</div>
        </div>
    );
}
export default NameForm;