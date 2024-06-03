import React from "react";
import Comment from "./Comment";

function CommentList(props){
    return(
        <div>
            <Comment name="서상준" comment="오늘의 점심은 뭘까요?"/>
            <Comment name="박성언" comment="글쎄요..."/>
            <Comment name="카리나" comment="라멘!!"/>
        </div>
    );
}
export default CommentList;