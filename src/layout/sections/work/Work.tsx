import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';

export const Work = () => {
    return (
        <StyledWork>
          <SectionTitle>Projects</SectionTitle>
        </StyledWork>
    );
};

const StyledWork = styled.section`
    min-height:100vh;
    background-color:#0F1624;
`

