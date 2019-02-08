const defaultState = {
    gridSize: 3
};

const gameBoard = (state = defaultState, action) => {
    const actions = {
        NEW_GAME: () => {
            return Object.assign(defaultState);
        },
        END_GAME: (action) => {
            state.winner = action.winner;
            return Object.assign({}, state);
        }
    };

    return actions[action.type] ? actions[action.type]() : state;
};

export default gameBoard;
