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
    max-width:550px;
    max-height:670px;
    margin:10px

    
`
const Image = styled.img`
     height:280px;
     width:100%;
     object-fit:cover
   
`
const Title = styled.h3`
    
`
const Text = styled.p`
    
`
const Link = styled.a`
    
`