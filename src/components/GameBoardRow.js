import React from 'react';
import PropTypes from 'prop-types';

const GameBoardRow = ({ squares }) => (
    <div className="GameBoardRow">{squares}</div>
);

GameBoardRow.propTypes = {
    squares: PropTypes.array.isRequired
};

export default GameBoardRow;
