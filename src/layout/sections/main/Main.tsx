import React from 'react';
import styled from 'styled-components';
import foto from './../../../assets/images/MainFoto.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/Button';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';

export const Main = () => {
    return (
        <FirstDiv>
<Container>
<FlexWrapper align='center' justify='space-between'>
            <DivText>
                <MainTitle>Lorem ipsum dolor amet</MainTitle>
                <MainP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</MainP>
                <Button>Let’s Begin</Button>
            </DivText>
                <Foto src={foto} alt="" />
            </FlexWrapper>
</Container>            
        </FirstDiv>                            
    );
};

const DivText = styled.div`
   
`

const FirstDiv = styled.section`
    height:100vh;
    display: flex;
    max-height:700px
`

const Foto = styled.img`
    width:380px;
    height:450px;
    object-fit:cover;
    border-top-left-radius:50px;
    border-bottom-right-radius:50px;
    border:5px solid ;
    border-image: linear-gradient(to right, #945dd6, #6978d1, #13adc7) 1;
    

` 

const MainTitle = styled.h1`
font-size: 54px;
line-height: 81px;
padding-bottom:5px
`
const MainP = styled.p`
font-size: 18px;
line-height: 27px;
color:${theme.colors.MainTextFont};
max-width:448px;
padding-bottom:60px
`
