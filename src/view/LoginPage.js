import React from 'react';
import PropTypes from 'prop-types';
import AuthTemplate from 'template/AuthTemplate';
import { connect } from 'react-redux';
import { signIn as signInAction } from 'store/actions/authActions';

const LoginPage = ({ signIn }) => {
  const handleSubmit = (e, cred) => {
    e.preventDefault();

    console.log('Login works');
    signIn(cred);
  };

  return (
    <>
      <AuthTemplate handleSubmitFn={handleSubmit} />
    </>
  );
};

LoginPage.propTypes = {
  signIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (cred) => dispatch(signInAction(cred)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
