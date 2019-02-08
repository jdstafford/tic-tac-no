import { connect } from 'react-redux';
import { toggleTurn, claimSquare, updateGrid } from '../actions';

import GameBoard from './GameBoard';

const mapStateToProps = state => ({
    gridSize: state.gameBoard.gridSize,
    grid: state.gameBoard.grid,
    playerIndex: state.players.currentPlayer,
    playerDetails: state.players.collection[state.players.currentPlayer],
    winner: state.players.winner
});

const mapDispatchToProps = (dispatch) => ({
    claimSquare: (coordinates, playerIndex, playerDetails, gridSize) => {
        dispatch(claimSquare(coordinates, playerIndex, gridSize));
        dispatch(updateGrid(coordinates, playerDetails));
        dispatch(toggleTurn(playerIndex));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard);
