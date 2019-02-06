const defaultState = {
    currentPlayer: 0,
    winner: null,
    gridSize: 3
};

const gameBoard = (state = defaultState, action) => {
    const actions = {
        NEW_GAME: () => {

        },
        END_GAME: () => {

        },
        TOGGLE_TURN: () => {

        }
    };

    return actions[action.type] ? actions[action.type]() : state;
};

export default gameBoard;
