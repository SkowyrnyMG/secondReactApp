import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyles from 'theme/GlobalStyles';
import theme from 'theme/theme';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: grid;
  /* justify-content: center; */
  grid-template-rows: 10rem 1fr 10rem;
`;

const MainTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <StyledWrapper>{children}</StyledWrapper>
  </ThemeProvider>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
