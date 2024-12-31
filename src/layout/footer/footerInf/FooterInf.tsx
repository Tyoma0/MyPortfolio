import React from 'react';
import styled from 'styled-components';


type FooterTypeProps = {
    text:string
    }

export const FooterInf = (props:FooterTypeProps) => {
    return (
        <StyledInfo>
            <StyledSpan>{props.text}</StyledSpan>
        </StyledInfo>
    );
};

const StyledInfo = styled.div`
    
`
const StyledSpan = styled.span`
    
`