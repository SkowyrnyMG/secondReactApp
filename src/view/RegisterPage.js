import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthTemplate from 'template/AuthTemplate';
import routes from 'routes';
import { register as registerAction } from 'store/actions/authActions';

const RegisterPage = ({ register }) => {
  const handleSumbit = (e, cred) => {
    e.preventDefault();
    register(cred);
  };

  return (
    <>
      <AuthTemplate handleSubmitFn={handleSumbit} isRegister redirectRoute={routes.registerConfirm} />
    </>
  );
};

RegisterPage.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  register: (cred) => dispatch(registerAction(cred)),
});

export default connect(null, mapDispatchToProps)(RegisterPage);
