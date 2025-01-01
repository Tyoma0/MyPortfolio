import React from 'react';
import styled from 'styled-components';


type TextTypeProps={
    text:string
}

export const TextLine = (props:TextTypeProps) => {
    return (
        <StyledText>
            {props.text}
        </StyledText>
    );
};

const StyledText = styled.p`
     font-size: 14px;
    color: #ffff;
    margin-top: 30px; /* Отступ между точкой и текстом */
    text-align: center;
`