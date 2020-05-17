import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

const UserPageTemplate = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
