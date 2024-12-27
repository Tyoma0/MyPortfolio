import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const SocialMedia = () => {
    return (
        <SocialMediaBox>
            <ul>
                <li><a href=""><Icon height='32' width='32' iconId='gitHub'/></a></li>
                <li><a href=""><Icon height='32' width='32' iconId='Linkedin'/></a></li>
                <li><a href=""><Icon height='32' width='32' iconId='telegram'/></a></li>
            </ul>
        </SocialMediaBox>
    );
};

const SocialMediaBox = styled.div`
    ul{
        display: flex;
        gap:25px;
    }
    
`