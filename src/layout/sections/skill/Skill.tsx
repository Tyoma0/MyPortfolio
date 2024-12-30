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
              <Skills text='Html' width={78} />
              <Skills text='Css, Sass' width={68} />
              <Skills text='React' width={53} />
              <Skills text='Styled components' width={68} />
            </FlexWrapper>
            <StyledDiv>
            <StyledSpan>Additional technol text=''gies and skills</StyledSpan>
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
