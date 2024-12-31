import React from 'react';
import styled from 'styled-components';
import { FooterInf } from './footerInf/FooterInf';



export const Footer = () => {
    return (
        <StyledFooter>
            <FooterInf text='Call me: 123-456-789'/>
            <FooterInf text='Email: xxx@xyz.com'/>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    
`
