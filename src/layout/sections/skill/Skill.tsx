import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { Skills } from './skills/Skills';


export const Skill = () => {
    return (
        <StyledSkill>
            <SectionTitle>Technologies</SectionTitle>
            <FlexWrapper direction='column'>
              <Skills width={68} />
              <Skills width={39} />
              <Skills width={20} />
              <Skills width={10} />
            </FlexWrapper>
            <StyledDiv>
            <StyledSpan>Additional technologies and skills</StyledSpan>
            <StyledUl>
                <StyledLi><Icon  iconId={'group'}/></StyledLi>
                <StyledLi><Icon  iconId={'gitHub2'}/></StyledLi>
                <StyledLi><Icon  iconId={'skill'}/></StyledLi>
            </StyledUl>
            </StyledDiv>
            
            
        </StyledSkill>
    );
};

 const StyledSkill = styled.section`
    min-height: 100vh;
    background-color:#0F1624;
 `
 const StyledDiv = styled.div`
    
 `
 const StyledSpan = styled.span`
    
 `
  const StyledUl = styled.ul`
    
  `
   const StyledLi = styled.li`
    
   `
