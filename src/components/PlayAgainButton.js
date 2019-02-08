import React from 'react';
import PropTypes from 'prop-types';

const PlayAgainButton = ({ resetAll }) => (
    <button className="PlayAgainButton" onClick={resetAll}>Play again?</button>
);

PlayAgainButton.propTypes = {
    resetAll: PropTypes.func.isRequired
};

export default PlayAgainButton;
