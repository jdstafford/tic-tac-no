const defaultState = [
    {
        name: 'One',
        character: 'N',
        ownedSquares: []
    },
    {
        name: 'Two',
        character: 'O',
        ownedSquares: []
    }
];

const players = (state = defaultState, action) => {
    const actions = {};

    return actions[action.type] ? actions[action.type]() : state;
};

export default players;
