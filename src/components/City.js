import React from 'react';
import PropTypes from 'prop-types';

export const City = props => {
    const { name } = props;
    return <li>{name}</li>;
};

City.propTypes = {
    name: PropTypes.string
};
