import React from "react";
import Comment from "./Comment";

function CommentList(props){
    return (
        <div>
            <Comment name={"이인제"} comment={"안녕하세요, 소플입니다."}/>
            <Comment name={"홍길동"} comment={"안녕하세요, 의적입니다."}/>
            <Comment name={"유재석"} comment={"안녕하세요, 방송인입니다."}/>
            <Comment name={"박경미"} comment={"안녕하세요, 리액트 재미있어요."}/>
        </div>
    );
}
export default CommentList;