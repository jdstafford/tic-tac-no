import React from 'react';
import PropTypes from 'prop-types';

const GameBoardRow = ({ squares, rowIndex }) => (
    <div className="GameBoardRow">{squares}</div>
);

GameBoardRow.propTypes = {
    squares: PropTypes.array.isRequired,
    rowIndex: PropTypes.number.isRequired
};

export default GameBoardRow;
