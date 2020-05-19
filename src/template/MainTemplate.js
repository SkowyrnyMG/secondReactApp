import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyles from 'theme/GlobalStyles';
import theme from 'theme/theme';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: grid;
  /* justify-content: center; */
  grid-template-rows: 10rem 1fr 10rem;
`;

class MainTemplate extends Component {
  state = {};

  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledWrapper>{children}</StyledWrapper>
      </ThemeProvider>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(MainTemplate);
