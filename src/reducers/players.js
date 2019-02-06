const defaultState = [
    {
        color: 'red',
        ownedSquares: []
    },
    {
        color: 'blue',
        ownedSquares: []
    }
];

const players = (state = defaultState, action) => {
    const actions = {};

    return actions[action.type] ? actions[action.type]() : state;
};

export default players;
