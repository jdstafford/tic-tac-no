const gameBoardSquares = (state = [], action) => {
    const actions = {
        RESET: () => {

        }
    };

    return actions[action.type] ? actions[action.type]() : state;
};

export default gameBoardSquares;
