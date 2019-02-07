import React from 'react';
import PropTypes from 'prop-types';

const GameBoardSquare = ({ claimSquare, currentPlayer, owner }) => (
    <div className="GameBoardSquare"
        onClick={claimSquare}
    >{(owner ? owner.character : currentPlayer.character)}</div>
);

GameBoardSquare.propTypes = {
    claimSquare: PropTypes.func.isRequired,
    currentPlayer: PropTypes.object.isRequired,
    owner: PropTypes.object
};

export default GameBoardSquare;
