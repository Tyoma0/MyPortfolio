
import React from 'react';
import styled, { keyframes } from 'styled-components';

type SkillsTypeProps = {
  
  width: number;
};

export const Skills = (props: SkillsTypeProps) => {
  return (
    <MainDiv>
        <StyledIndicator>
      <StyledDiv width={props.width}>
        <StyledDiv2>.</StyledDiv2>
      </StyledDiv>
    </StyledIndicator>
    </MainDiv>
    
  );
};

const animatePositive = (width: number) => keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: ${width}%;
  }
`;

const StyledIndicator = styled.div`
  max-width: 900px;
  height: 18px;
  border-radius: 83px;
  margin-bottom: 20px;
  position: relative;
  background-color: #162950;
`;

const StyledDiv = styled.div<{ width: number }>`
  height: 18px;
  border-radius: 83px;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 4px;
  animation: ${({ width }) => animatePositive(width)} 6s forwards;
  background-color: #13adc7;
`;

const StyledDiv2 = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  padding: 0 15px;
  float: right;
`;