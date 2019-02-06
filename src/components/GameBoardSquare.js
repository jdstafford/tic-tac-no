import React from 'react';
import PropTypes from 'prop-types';

const GameBoardSquare = ({ onClick, coordinates }) => (
    <div className="GameBoardSquare"
        onClick={onClick(coordinates)}
    ></div>
);

GameBoardSquare.propTypes = {
    onClick: PropTypes.func.isRequired,
    coordinates: PropTypes.object.isRequired,
    owner: PropTypes.object
};

export default GameBoardSquare;
