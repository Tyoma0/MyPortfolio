import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { SocialMedia } from '../../components/socialMedia/SocialMedia';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';

const items=['Projects','Technologies','About']


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify='space-around' align='center'>
                    <Logo/>
                    <Menu menuItems={items}/>
                    <SocialMedia/>
                </FlexWrapper>             
            </Container>                      
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color:${theme.colors.headerFont};
    padding:20px 0;
    position:fixed;
    top:0;
    left: 0;
    right: 0;
    z-index:99999;
    
`