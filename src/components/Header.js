import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
    <div className="Header">{title}</div>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
