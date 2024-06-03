import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    padding: 1em;
    background-color: grey;
    `;


const Title = styled.h1`
    padding: 1.5em;
    color: white;
    text-align: center;
    `;

const Button=styled.button`
    color:${props=>props.dark?"white":"dark"};
    background:${props=>props.dark?"black":"white"};
    border:1px solid black;
    `;

const RoundedButton = styled(Button)`
    border-radius: 16px;
`;


function MainPage1(props){
    return(
        <Wrapper>
            <Title>
                안녕, 리액트!
            </Title>
            <Button>Normal</Button> 
            <Button dark>Dark</Button> 
            <RoundedButton>RoundButton</RoundedButton>
            <RoundedButton dark>RoundButton</RoundedButton>
        </Wrapper>
    );
}

export default MainPage1;