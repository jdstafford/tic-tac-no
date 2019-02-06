const players = (state = [], action) => {
    const actions = {};

    return actions[action.type] ? actions[action.type] : state;
};

export default players;
