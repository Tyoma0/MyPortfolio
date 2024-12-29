import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Works } from './works/Works';
import foto from './../../../assets/images/workFoto.webp'

export const Work = () => {
    return (
        <StyledWork>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper wrap='wrap' justify='space-between'>
            <Works src={foto} title={'PROJECT 1'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Works src={foto} title={'PROJECT 2'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Works src={foto} title={'PROJECT 3'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Works src={foto} title={'PROJECT 4'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
        </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.section`
    min-height:100vh;
    background-color:#161D2A;
    
`

