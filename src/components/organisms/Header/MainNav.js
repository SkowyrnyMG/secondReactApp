import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  grid-column: 3/4;
  & > *:not(:last-child) {
    margin-right: 6rem;
  }
`;

const StyledLink = styled.li`
  position: relative;
  color: ${({ type, theme }) => (type === 'footer' ? theme.color.primaryColorDark : theme.color.primaryColorText)};
  list-style: none;
  display: inline-block;
  transition: all 0.25s;

  .navLinkActive {
    color: ${({ theme }) => theme.color.accentColor};
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: lowercase;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ type, theme }) => (type === 'footer' ? theme.fontSize.m : theme.fontSize.xl)};
  color: ${({ type, theme }) => (type === 'footer' ? theme.color.primaryColorDark : theme.color.primaryColorText)};

  :hover {
    color: ${({ theme }) => theme.color.accentColor};
  }
`;

const MainNav = ({ type }) => (
  <StyledNav>
    <StyledLink>
      <StyledNavLink type={type} exact to='/' activeClassName='navLinkActive'>
        Home
      </StyledNavLink>
    </StyledLink>
    <StyledLink>
      <StyledNavLink type={type} to='/blog' activeClassName='navLinkActive'>
        Blog
      </StyledNavLink>
    </StyledLink>
  </StyledNav>
);

MainNav.propTypes = {
  type: PropTypes.string,
};

MainNav.defaultProps = {
  type: null,
};

export default MainNav;
