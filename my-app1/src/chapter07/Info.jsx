import React, { useEffect, useReducer, useState } from "react";
import useInputs from "./useInputs";

// function reducer(state, action){
//     return{
//         ...state,
//         [action.name]:action.value
//     };
// }


function Info(){
    const [state, onChange]=useInputs({
        name:'',
        nickname:'',
        address:'',
        phone:''
    });
    const {name, nickname, address, phone}=state;
    // const onChange= e =>{
    //     dispatch(e.target);
    // };
    
    // const [name, setName]=useState('');
    // const [nickname, setNickname]=useState('');

    // useEffect( () => {
    //     console.log('렌더링이 완료됨');
    //     console.log({name, nickname});
    //     return () => {
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // },[name]);

    // const onChangeName= e =>{
    //     setName(e.target.value);
    // };

    // const onChangeNickname= e =>{
    //     setNickname(e.target.value);
    // };

    return(
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
                <input name="address" value={address} onChange={onChange} />
                <input name="phone" value={phone} onChange={onChange} />
            </div>
            <div><b>이름 : </b>{name}</div>
            <div><b>닉네임 : </b>{nickname}</div>
            <div><b>주소 : </b>{address}</div>
            <div><b>전화번호 : </b>{phone}</div>

        </div>
        
    )


}
export default Info;