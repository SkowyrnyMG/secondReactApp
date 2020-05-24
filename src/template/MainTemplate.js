import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyles from 'theme/GlobalStyles';
import theme from 'theme/theme';
import { connect } from 'react-redux';
import Loading from 'components/molecules/Loading/Loading';

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
    const { children, isLogged } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledWrapper>{children}</StyledWrapper>
        {isLogged && <Loading />}
      </ThemeProvider>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  isLogged: state.auth.isLogged,
});

export default connect(mapStateToProps)(MainTemplate);
