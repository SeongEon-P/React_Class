import React, { act, useReducer, useState } from "react";

function reducer(state, action){
    return{
        ...state,
        [action.name]:action.value
    };
}
function FormTest(props){
    const [state, dispatch]=useReducer(reducer, {
        name:'',
        content:'',
        fruit :''
    });
    const {name, content, fruit}=state;
    const onChange =e =>{
        dispatch(e.target);
    };
    
    // const [name, setName]=useState('');
    // const [content, setContent]=useState('')
    // const [fruit, setFruit]=useState('');
    // const [str, setStr]=useState('');
    
    // const handleChange1=(event) =>{
    //     setName(event.target.value);
    // }
    // const handleChange2=(event) =>{
    //     setContent(event.target.value);
    // }
    // const handleChange3=(event) =>{
    //     setFruit(event.target.value);
    // }
    const handleSubmit=(event)=>{
        alert('이름 :'+ name+', 요청사항:'+content+', 좋아하는 과일 :'+fruit);
        event.preventDefault();
        setStr('이름 :'+ name+', 요청사항:'+content+', 좋아하는 과일 :'+fruit);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>이름 : 
                    <input type="text" name='name' value={name} onChange={onChange}/>
                </div>
                <div>요청사항 :
                    <textarea name='content' value={content} onChange={onChange}></textarea>
                </div>
                <div>
                    <select name='fruit' value={fruit} onChange={onChange}>
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
export default FormTest;