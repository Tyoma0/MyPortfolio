import React from 'react';
import styled from 'styled-components';
import foto from './../../../assets/images/MainFoto.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <FirstDiv>
            <FlexWrapper align='center' justify='space-around'>
            <div>
                <MainTitle>Lorem ipsum dolor amet</MainTitle>
                <MainP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</MainP>
                <Mainbutton>Let’s Begin</Mainbutton>
            </div>
                <Foto src={foto} alt="" />
            </FlexWrapper>
        </FirstDiv>          
            
        
    );
};

const FirstDiv = styled.section`
    height:100vh;
    background-color:#0F1624;
`

const Foto = styled.img`
    width:380px;
    height:450px;
    object-fit:cover;
` 

const MainTitle = styled.h1`
    
`
const MainP = styled.p`
    
`
const Mainbutton = styled.button`
    
`