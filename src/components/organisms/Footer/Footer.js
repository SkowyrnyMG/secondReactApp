import React from 'react';
import styled from 'styled-components';
import MainNav from 'components/organisms/Header/MainNav';
import SocialmediaIcon from 'components/atoms/SocialmediaIcon/SocialmediaIcon';

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  height: 10rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primaryColorLight};
`;

const StyledMainNav = styled(MainNav)`
  & > * {
    color: ${({ theme }) => theme.color.primaryColorDark};
  }
`;

const FooterNavWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  border-top: 15px solid ${({ theme }) => theme.color.primaryColor};
  box-sizing: content-box;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.primaryColorDark};
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.color.accentColor};
  }
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const Footer = () => (
  <StyledFooter>
    <FooterNavWrapper>
      <StyledMainNav type='footer' />
      <div>
        <SocialmediaIcon type='github' link='https://github.com/SkowyrnyMG' />
        <SocialmediaIcon type='facebook' link='https://www.facebook.com/mateusz.gruzla.3' />
        <SocialmediaIcon type='linkedin' link='https://www.linkedin.com/in/mateusz-gru%C5%BAla-99b0ab18b/' />
        <SocialmediaIcon type='twitter' link='https://twitter.com/GruzlaMateusz' />
      </div>
    </FooterNavWrapper>
    <StyledParagraph>
      Author:{' '}
      <StyledLink
        href='https://www.linkedin.com/in/mateusz-gru%C5%BAla-99b0ab18b/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Mateusz Gruźla
      </StyledLink>
    </StyledParagraph>
  </StyledFooter>
);

export default Footer;
