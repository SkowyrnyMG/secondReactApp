import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from 'routes';
import { connect } from 'react-redux';
import MainNav from 'components/organisms/Header/MainNav';
import LogoImage from 'assets/logo.svg';
import { ReactComponent as UserIcon } from 'assets/user.svg';
import Button from 'components/atoms/Button/Button';
import { signOut as signOutAction } from 'store/actions/authActions';

const StyledWrapper = styled.header`
  position: relative;
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
`;

const StyledUserInfoBox = styled.p`
  color: ${({ theme }) => theme.color.primaryTextColor};
  position: absolute;
  right: 20%;
  bottom: -5rem;
  display: flex;
  align-items: center;
  height: 2rem;
  font-size: 1.3rem;
`;

const StyledUserIcon = styled(UserIcon)`
  width: 1.3rem;
  height: 1.3rem;
  fill: ${({ theme }) => theme.color.primaryColor};
  margin-right: 1rem;
`;

const Header = ({ currentUser, signOut }) => (
  <StyledWrapper>
    <StyledImage as={Link} to={routes.home} />
    <MainNav />
    {currentUser.email !== null && currentUser.email !== undefined ? (
      <>
        <StyledButton red='true' onClick={signOut}>
          Logout
        </StyledButton>
        <StyledUserInfoBox>
          <StyledUserIcon />
          {` ${currentUser.email}`}
        </StyledUserInfoBox>
      </>
    ) : (
      <StyledButton as={Link} to={routes.login}>
        start bloging!
      </StyledButton>
    )}
  </StyledWrapper>
);

Header.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.string),
  signOut: PropTypes.func.isRequired,
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
