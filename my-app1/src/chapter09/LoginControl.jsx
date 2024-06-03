import React, { useState } from "react";
import Greeting from "./Greeting";

function LoginButton(props){
    return(
        <button onClick={props.onClick}>로그인</button>
        );
    }
    function LogoutButton(props){
        return(
            <button onClick={props.onClick}>로그아웃</button>
        );
    }

    function LoginControl(props){
        const [isLoggedIn, setIsLoggedIn]=useState(false);

        const handleLoginClick=()=>{
            setIsLoggedIn(true);
        }

        const handleLogoutClick=()=>{
            setIsLoggedIn(false);
        }
        let button;
        {button=isLoggedIn
            ?<LogoutButton onClick={handleLogoutClick}/>
            :<LoginButton onClick={handleLoginClick}/>
        // if(isLoggedIn){
        //     button=<LogoutButton onClick={handleLogoutClick} />;
        // }else{
        //     button=<LoginButton onClick={handleLoginClick} />;
        // }
        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}
 function WarningBanner(props){
    if (!props.warning){
        return null; //렌더링되지 않음
    }
    return (
        <div>경고!</div>
    );
 }

 function MainPage(props){
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return (
        <div>
            <WarningBanner warning={showWarning} />
            <button onClick={handleToggleClick}>
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    );
 }


    export default LoginControl;