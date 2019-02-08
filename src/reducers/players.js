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
    currentPlayer: 0,
    winner: false
};

const checkHorizontal = (ownedSquares, gridSize, state) => {
    let rowIndex = 0;

    do {
        const rowColumns = ownedSquares.filter(square => square.rowIndex === rowIndex);

        state.winner = (rowColumns.length === gridSize);
        rowIndex++;
    } while (!state.winner && rowIndex < gridSize);
};

const checkDiagonal = (ownedSquares, gridSize, state) => {
    const forwardHits = [];
    const reverseHits = [];
    let rowIndex = 0;
    let colIndex = (gridSize - 1);

    do {
        // search from top left to bottom right
        const forward = ownedSquares.find(square => square.rowIndex === rowIndex && square.colIndex === colIndex);
        // search from bottom left to top right
        const reverse = ownedSquares.find(square => square.rowIndex === colIndex && square.colIndex === rowIndex);
        if (forward) forwardHits.push(forward);
        if (reverse) reverseHits.push(reverse);
        state.winner = ((forwardHits.length === gridSize) || (reverseHits.length === gridSize));
        rowIndex++;
        colIndex--;
    } while (!state.winner && rowIndex < gridSize);
};

const checkVertical = (ownedSquares, gridSize, state) => {
    let colIndex = 0;

    do {
        const columnRows = ownedSquares.filter(square => square.colIndex === colIndex);

        state.winner = (columnRows.length === gridSize);
        colIndex++;
    } while (!state.winner && colIndex < gridSize);
};

const players = (state = defaultState, action) => {
    const actions = {
        CLAIM_SQUARE: (action) => {
            const currentPlayer = action.payload.currentPlayer;
            const gridSize = action.payload.gridSize;
            const ownedSquares = state.collection[currentPlayer].ownedSquares;

            state.collection[currentPlayer].ownedSquares.push(
                action.payload.coordinates
            );

            checkHorizontal(ownedSquares, gridSize, state);
            checkDiagonal(ownedSquares, gridSize, state);
            checkVertical(ownedSquares, gridSize, state);

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
