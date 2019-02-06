import React from 'react';
import PropTypes from 'prop-types';

const GameBoardSquare = ({ claimSquare, coordinates }) => (
    <div className="GameBoardSquare"
        onClick={claimSquare}
    ></div>
);

GameBoardSquare.propTypes = {
    claimSquare: PropTypes.func.isRequired,
    coordinates: PropTypes.object.isRequired,
};

export default GameBoardSquare;
