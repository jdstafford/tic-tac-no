import { connect } from 'react-redux';
import { toggleTurn } from '../actions';

import GameBoard from './GameBoard';

const getPlayers = (players) => {
    return players;
};

const mapStateToProps = state => ({
    players: getPlayers(state.players),
    grid: () => state.grid
});

const mapDispatchToProps = dispatch => ({
    toggleTurn: () => dispatch(toggleTurn())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard);
