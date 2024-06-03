import React from "react";
import FancyBorder from "./FancyBorder";

function Dialog(props){
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>        
    );
}

function WelcomeDialog(props){
    return(
        <div>
        <Dialog title="어서 오세요" message="우리 사이트에 방문하신 것을 환영합니다."/>
        <Dialog title="소플 리액트" message="리액트 공부는 소플과 함께"/>
        </div>
    );
    
}
export default WelcomeDialog;