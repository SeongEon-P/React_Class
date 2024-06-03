import React, { useState } from "react";
import Dialog from "./Dialog";

function SignUpdialog(props){
    const [nickname, setNickname]=useState('');

    const handleChange=(event) =>{
        setNickname(event.target.value);
    }
    const handleSignUp=() =>{
        alert(`어서 오세요 ${nickname}`);
    }

    return(
        <Dialog
            title="화성탐사 프로그램"
            message="닉네임을 알려주세요">
            <input value={nickname} onChange={handleChange} />
            <button onClick={handleSignUp}>가입하기</button>
        </Dialog>
    )
}
export default SignUpdialog;