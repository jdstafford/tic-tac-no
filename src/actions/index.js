export const claimSquare = (coordinates, currentPlayer) => ({
    type: 'CLAIM_SQUARE',
    payload: {
        coordinates,
        currentPlayer
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
