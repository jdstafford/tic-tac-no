const defaultState = [];

const gameBoardSquares = (state = defaultState, action) => {
    const actions = {
        BUILD_SQUARES: (action) => {
            const rows = [];
            for (let rowIndex = 0; rowIndex < action.payload.size; rowIndex++) {
                const columns = [];
                for (let colIndex = 0; colIndex < action.payload.size; colIndex++) {
                    columns.push({});
                }
                rows.push(columns);
            }
            return state = rows;
        },
        CLAIM_SQUARE: (action) => {
            const coordinates = action.payload.coordinates;
            const row = Object.keys(coordinates)[0];

            return state[row].push();
        }
    };

    return actions[action.type] ? actions[action.type](action) : state;
};

export default gameBoardSquares;
