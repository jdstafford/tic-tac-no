import { connect } from 'react-redux';
import { toggleTurn, claimSquare } from '../actions';

import GameBoard from './GameBoard';

const mapStateToProps = state => ({
    gridSize: state.gameBoard.gridSize,
    currentPlayerIndex: state.players.currentPlayer,
    currentPlayerDetails: state.players.collection[state.players.currentPlayer],
    winner: state.players.winner
});

const mapDispatchToProps = (dispatch) => ({
    claimSquare: (coordinates, currentPlayerIndex, gridSize) => {
        dispatch(claimSquare(coordinates, currentPlayerIndex, gridSize));
        dispatch(toggleTurn(currentPlayerIndex));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard);
