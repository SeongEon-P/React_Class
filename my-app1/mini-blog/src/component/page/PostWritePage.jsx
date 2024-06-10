import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper =styled.div`
    padding :16px;
    width:calc(100%-32px);
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container=styled.div`
    width:100%;
    max-width : 720px;
    flex-direction: column;
    align-items: center;
    :not(:last-child){
        margin-bottom : 16px;
    }
`;

function PostWritePage(props){
    const navigate=useNavigate();

    const [title, setTitle]=useState("");
    const [content, setContent]=useState("");

    const handleCreatePost = () => {
        const newPost = {
            id: data.length + 1,
            title,
            content,
            comments: []
        };
        data.push(newPost);
        navigate(`/post/${newPost.id}`);
    };
    
    return(
        <Wrapper>
            <Container>
                <TextInput 
                height={40} 
                value={title}
                placeholder="제목을 입력하세요"
                    onChange={(event) =>
                        setTitle(event.target.value)}/>

                <TextInput
                height={240}
                value={content}
                placeholder="내용을 입력하세요"
                onChange={(event) =>
                        setContent(event.target.value)}/>

                <Button title="글 작성하기"
                
                onClick={handleCreatePost} />
                    {/* onClick={()=> navigate("/")} /> */}
            </Container>
        </Wrapper>
    )
}
export default PostWritePage;