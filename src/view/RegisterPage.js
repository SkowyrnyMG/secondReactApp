import React from 'react';
import AuthTemplate from 'template/AuthTemplate';

const RegisterPage = () => {
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log('register work');
  };

  return (
    <>
      <AuthTemplate handleSubmitFn={handleSumbit} isRegister />
    </>
  );
};

export default RegisterPage;
