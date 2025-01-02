import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const SocialMedia = () => {
    return (
        <SocialMediaBox>
            <ul>
                <li><a href=""><Icon width='33'  viewBox='0 0 40 53'  iconId='gitHub'/></a></li>
                <li><a href=""><Icon width='33' viewBox='0 0 40 53'  iconId='Linkedin'/></a></li>
                <li><a href=""><Icon width='33' viewBox='0 0 40 53'  iconId='telegram'/></a></li>
            </ul>
        </SocialMediaBox>
    );
};

const SocialMediaBox = styled.div`
max-height:32px;
    ul{
        display: flex;
        gap:25px;
        
    }
    
   
`