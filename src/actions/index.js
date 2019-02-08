export const claimSquare = (coordinates, currentPlayer, gridSize) => ({
    type: 'CLAIM_SQUARE',
    payload: {
        coordinates,
        currentPlayer,
        gridSize
    }
});

export const declareVictory = (winner) => ({
    type: 'DECLARE_VICTORY',
    payload: {
        winner
    }
});

export const toggleTurn = (currentPlayer) => ({
    type: 'TOGGLE_TURN',
    payload: {
        currentPlayer
    }
});
