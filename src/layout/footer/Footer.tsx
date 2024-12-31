import React from 'react';
import styled from 'styled-components';
import { FooterInf } from './footerInf/FooterInf';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { FlexWrapper } from '../../components/FlexWrapper';


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify='space-around'>
            <FooterInf text='Call me: 123-456-789'/>
            <FooterInf text='Email: xxx@xyz.com'/>
            <SocialMedia/>
            </FlexWrapper>          
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color:#0F1624;
    min-height:20vh;
`
