const defaultState = [
    {
        color: 'red',
        character: 'N',
        ownedSquares: []
    },
    {
        color: 'blue',
        character: 'O',
        ownedSquares: []
    }
];

const players = (state = defaultState, action) => {
    const actions = {};

    return actions[action.type] ? actions[action.type]() : state;
};

export default players;
