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
    winner: false,
    scoreBoard: {
        X: 0,
        O: 0
    }
};

const checkHorizontal = (ownedSquares, gridSize) => {
    let winner = false;
    let rowIndex = 0;

    do {
        const rowColumns = ownedSquares.filter(square => square.rowIndex === rowIndex);

        winner = (rowColumns.length === gridSize);
        rowIndex++;
    } while (!winner && rowIndex < gridSize);

    return winner;
};

const checkDiagonal = (ownedSquares, gridSize) => {
    const forwardHits = [];
    const reverseHits = [];
    let winner = false;
    let rowIndex = 0;
    let colIndex = (gridSize - 1);

    do {
        // search from top left to bottom right
        const forward = ownedSquares.find(square => square.rowIndex === rowIndex && square.colIndex === rowIndex);
        // search from bottom left to top right
        const reverse = ownedSquares.find(square => square.rowIndex === colIndex && square.colIndex === rowIndex);

        if (forward) forwardHits.push(forward);
        if (reverse) reverseHits.push(reverse);

        winner = ((forwardHits.length === gridSize) || (reverseHits.length === gridSize));

        rowIndex++;
        colIndex--;
    } while (!winner && rowIndex < gridSize);

    return winner;
};

const checkVertical = (ownedSquares, gridSize) => {
    let winner = false;
    let colIndex = 0;

    do {
        const columnRows = ownedSquares.filter(square => square.colIndex === colIndex);

        winner = (columnRows.length === gridSize);
        colIndex++;
    } while (!winner && colIndex < gridSize);

    return winner;
};

const players = (state = defaultState, action) => {
    const actions = {
        CLAIM_SQUARE: (action) => {
            const currentPlayer = action.payload.currentPlayer;
            const gridSize = action.payload.gridSize;
            const ownedSquares = state.collection[currentPlayer].ownedSquares;
            let tally = state.scoreBoard[state.collection[currentPlayer].character];

            state.collection[currentPlayer].ownedSquares.push(
                action.payload.coordinates
            );

            state.winner = (
                checkHorizontal(ownedSquares, gridSize) ||
                checkDiagonal(ownedSquares, gridSize) ||
                checkVertical(ownedSquares, gridSize)
            );

            if (state.winner) {
                state.scoreBoard[state.collection[currentPlayer].character] = tally + 1;
            }

            return Object.assign({}, state);
        },
        TOGGLE_TURN: (action) => {
            if (!state.winner) {
                state.currentPlayer = action.payload.currentPlayer ? 0 : 1;
            }
            return Object.assign({}, state);
        },
        RESET_ALL: () => {
            state.winner = false;
            state.currentPlayer = state.currentPlayer ? 0 : 1;
            state.collection = state.collection.map(player => {
                player.ownedSquares = [];
                return player;
            })
            return Object.assign({}, state);
        }
    };

    return actions[action.type] ? actions[action.type](action) : state;
};

export default players;
