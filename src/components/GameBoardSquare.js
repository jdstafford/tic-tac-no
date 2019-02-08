import React from 'react';
import PropTypes from 'prop-types';

const GameBoardSquare = ({ claimSquare, currentPlayer, owner, winner }) => (
    <div className={
        'GameBoardSquare' +
        (winner ? ' NoHover' : '') +
        (owner ? ' GameBoardSquare__owned' : '')
    }
        onClick={(owner || winner) ? null : claimSquare}
    >{(owner ? owner.character : currentPlayer.character)}</div>
);

GameBoardSquare.propTypes = {
    claimSquare: PropTypes.func.isRequired,
    currentPlayer: PropTypes.object.isRequired,
    owner: PropTypes.object
};

export default GameBoardSquare;
