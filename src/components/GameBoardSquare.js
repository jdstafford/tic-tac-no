import React from 'react';
import PropTypes from 'prop-types';

const GameBoardSquare = ({ onClick, coordinates, owner }) => (
    <div className="GameBoardSquare">
        onClick={onClick(coordinates)}
        style={{
            borderColor: owner ? owner.color : 'black'
        }}
    </div>
);

GameBoardSquare.propTypes = {
    onClick: PropTypes.func.isRequired,
    coordinates: PropTypes.func.isRequired,
    owner: PropTypes.object.isRequired
};

export default GameBoardSquare;
