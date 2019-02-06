export const toggleTurn = () => ({
    type: 'TOGGLE_TURN'
});

export const buildSquares = (size) => ({
    type: 'BUILD_SQUARES',
    payload: {
        size
    }
});

export const claimSquare = (coordinates) => ({
    type: 'CLAIM_SQUARE',
    payload: {
        coordinates
    }
});
