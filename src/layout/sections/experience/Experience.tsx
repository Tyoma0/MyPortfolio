import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { ExperienceLine } from './experienceLine/ExperienceLine';

export const Experience = () => {
    return (
        <StyledExperience>
            <SectionTitle>Experience</SectionTitle>
            <ExperienceLine/>
            
        </StyledExperience>
    );
};

const StyledExperience = styled.section`
    background-color:#161D2A;
    height:100vh
`