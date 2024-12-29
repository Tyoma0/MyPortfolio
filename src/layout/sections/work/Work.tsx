import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Works } from './works/Works';

export const Work = () => {
    return (
        <StyledWork>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper>
            <Works />
            <Works />
            <Works />
            <Works />
        </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.section`
    min-height:100vh;
    background-color:#0F1624;
`

