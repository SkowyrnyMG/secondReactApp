import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from 'routes';
import Input from 'components/molecules/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.primaryColor};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  color: ${({ theme, dark }) => (dark === 'true' ? theme.color.primaryColorDark : theme.color.primaryColorText)};
`;

const StyledForm = styled.form`
  margin: 5rem;
  padding: 5rem 10rem 6rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primaryColorLight};
  border-radius: 10px;
  box-shadow: 0 20px 30px -15px hsla(0, 0%, 0%, 0.5);

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.color.error};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

class AuthTemplate extends Component {
  state = {};

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { handleSubmitFn, isRegister, errorMessage } = this.props;

    return (
      <StyledWrapper>
        <StyledForm action='submit' onSubmit={(e) => handleSubmitFn(e, this.state)}>
          <Heading>{isRegister ? 'Create new account' : 'Log into existing account'}</Heading>
          <Input id='userEmail' placeholder='email..' onChange={(e) => this.handleChange(e)} />
          <Input id='password' placeholder='password..' type='password' onChange={(e) => this.handleChange(e)} />
          <StyledParagraph>{errorMessage}</StyledParagraph>
          <Button atwhitespace='true'>{isRegister ? 'Register' : 'Sign in'}</Button>
          {isRegister ? (
            <StyledLink dark='true' to={routes.login}>
              Go to sign in
            </StyledLink>
          ) : (
            <StyledLink dark='true' to={routes.register}>
              Go to register
            </StyledLink>
          )}
        </StyledForm>
        <StyledLink to={routes.home}>Take me from here!</StyledLink>
      </StyledWrapper>
    );
  }
}

AuthTemplate.propTypes = {
  handleSubmitFn: PropTypes.func.isRequired,
  isRegister: PropTypes.bool,
  errorMessage: PropTypes.string,
};

AuthTemplate.defaultProps = {
  isRegister: false,
  errorMessage: null,
};

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
});

export default connect(mapStateToProps)(AuthTemplate);
