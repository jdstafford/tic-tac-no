import { connect } from 'react-redux';
import { toggleTurn } from '../actions';

import GameBoard from './GameBoard';

const mapStateToProps = state => ({
    players: state.players,
    grid: state.gameBoard.grid
});

const mapDispatchToProps = dispatch => ({
    toggleTurn: () => dispatch(toggleTurn())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard);
