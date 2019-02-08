const defaultState = {
    gridSize: 3,
    initialized: false,
    ownedSquares: 0,
    draw: false
};

const gameBoard = (state = defaultState, action) => {
    const actions = {
        RESET_ALL: () => {
            state.grid = generateGrid(state.gridSize);
            state.ownedSquares = 0;
            state.draw = false;
            return Object.assign({}, state);
        },
        UPDATE_GRID: (action) => {
            const { coordinates, player } = action.payload;
            const { rowIndex, colIndex } = coordinates;

            state.grid[rowIndex][colIndex].owner = player;

            state.ownedSquares++;
            state.draw = (state.ownedSquares === (state.gridSize * state.gridSize));
            return Object.assign({}, state);
        }
    };

    if (actions[action.type]) {
        return actions[action.type](action);
    } else {
        if (!state.initialized) {
            state.grid = generateGrid(state.gridSize);
            state.initialized = true;
        }
        return state;
    }
};

function generateGrid(gridSize) {
    const rows = [];
    // build game board rows
    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
        const squares = [];
        // build game board columns
        for (let colIndex = 0; colIndex < gridSize; colIndex++) {
            squares.push({
                key: `${rowIndex}-${colIndex}`,
                owner: null,
                rowIndex,
                colIndex
            });
        }
        rows.push(squares);
    }
    return rows;
}

export default gameBoard;
