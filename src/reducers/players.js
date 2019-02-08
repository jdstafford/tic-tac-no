const defaultState = {
    collection: [
        {
            character: 'X',
            ownedSquares: []
        },
        {
            character: 'O',
            ownedSquares: []
        }
    ],
    currentPlayer: 0
};

const players = (state = defaultState, action) => {
    const actions = {
        CLAIM_SQUARE: (action) => {
            const currentPlayer = action.payload.currentPlayer;

            state.collection[currentPlayer].ownedSquares.push(
                action.payload.coordinates
            );
            return Object.assign({}, state);
        },
        TOGGLE_TURN: (action) => {
            state.currentPlayer = action.payload.currentPlayer ? 0 : 1;
            return Object.assign({}, state);
        },
        RESET_ALL: () => {
            return Object.assign({}, defaultState);
        }
    };

    return actions[action.type] ? actions[action.type](action) : state;
};

export default players;
