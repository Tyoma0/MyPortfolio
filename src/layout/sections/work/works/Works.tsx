import React from 'react';
import styled from 'styled-components';



type WorksPropsType = {
    title:string
    text:string
    src:string
}

export const Works = (props:WorksPropsType) => {
    return (
        <StyledWorks>
            <Image src={props.src} alt=''/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={'a'}>Look It Up</Link>
        </StyledWorks>
    );
};


const StyledWorks = styled.div`
    background-color:#0F1624;
    width:50%;
    min-width:550px;
    min-height:670px;
    border-top-left-radius:50px;
    border-bottom-right-radius:50px;
    margin:30px 0;
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-around


    
`
const Image = styled.img`
     height:280px;
     width:100%;
     object-fit:cover;
     padding: 0 25px;
     border-top-left-radius:24px;
     border-bottom-right-radius:8px;
   
`
const Title = styled.h3`
    padding-left:199px;
    font-size: 30px;
`
const Text = styled.p`
    padding:0 25px;
    font-size: 18px;
`
const Link = styled.a`
font-size:20px;
min-height:60px;
min-width:200px ;
margin-left:25px;
display: flex;
justify-content:center;
align-items:center;
border-radius:83px;
background: linear-gradient(to right, #945dd6, #6978d1, #13adc7);
`