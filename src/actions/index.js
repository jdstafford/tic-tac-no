export const claimSquare = (coordinates, currentPlayer, gridSize) => ({
    type: 'CLAIM_SQUARE',
    payload: {
        coordinates,
        currentPlayer,
        gridSize
    }
});

export const toggleTurn = (currentPlayer) => ({
    type: 'TOGGLE_TURN',
    payload: {
        currentPlayer
    }
});

export const updateGrid = (coordinates, player) => ({
    type: 'UPDATE_GRID',
    payload: {
        coordinates,
        player
    }
});

export const resetAll = () => ({
    type: 'RESET_ALL'
});
