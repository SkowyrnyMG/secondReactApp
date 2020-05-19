import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import routes from 'routes';
import { connect } from 'react-redux';
import MainNav from 'components/organisms/Header/MainNav';
import LogoImage from 'assets/logo.svg';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.header`
  display: block;
  height: 8rem;
  display: grid;
  grid-template-columns: 0.4fr 0.4fr 1fr 0.4fr 0.4fr;
  align-items: center;
  align-content: center;
  justify-items: center;
  background-color: ${({ theme }) => theme.color.primaryColorDark};
  box-shadow: 0 1rem 1rem -0.6rem ${({ theme }) => theme.color.primaryColorDark};
`;

const StyledImage = styled.div`
  height: 10rem;
  width: 20rem;
  background: url(${LogoImage}) no-repeat;
  background-size: contain;
  background-position: center;
  grid-column: 2/3;
`;

const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};

   {
    ${({ theme, red }) =>
      red &&
      css`
        color: red;
        font-weight: ${theme.fontWeight.bold};
        border-color: ${theme.color.error};

        :hover {
          color: ${theme.color.primaryColorText};
          background-color: ${theme.color.error};
        }
      `}
  }
`;

const Header = ({ currentUser }) => (
  <StyledWrapper>
    <StyledImage as={Link} to={routes.home} />
    <MainNav />
    {currentUser !== null ? (
      <StyledButton red='true' as={Link} to={routes.login}>
        Logout
      </StyledButton>
    ) : (
      <StyledButton as={Link} to={routes.login}>
        start bloging!
      </StyledButton>
    )}
  </StyledWrapper>
);

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Header);
