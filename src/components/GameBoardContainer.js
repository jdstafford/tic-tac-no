import { connect } from 'react-redux';
import { toggleTurn, claimSquare } from '../actions';

import GameBoard from './GameBoard';

const mapStateToProps = state => ({
    gridSize: state.gameBoard.gridSize,
    currentPlayerIndex: state.players.currentPlayer,
    currentPlayerDetails: state.players.collection[state.players.currentPlayer],
    winner: state.gameBoard.winner
});

const mapDispatchToProps = (dispatch) => ({
    claimSquare: (coordinates, currentPlayerIndex) => {
        dispatch(claimSquare(coordinates, currentPlayerIndex));
        dispatch(toggleTurn(currentPlayerIndex));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard);
