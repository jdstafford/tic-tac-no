import { connect } from 'react-redux';
import { toggleTurn, claimSquare, updateGrid, resetAll } from '../actions';

import GameBoard from './GameBoard';

const mapStateToProps = state => ({
    gridSize: state.gameBoard.gridSize,
    grid: state.gameBoard.grid,
    scoreBoard: state.players.scoreBoard,
    playerIndex: state.players.currentPlayer,
    playerDetails: state.players.collection[state.players.currentPlayer],
    winner: state.players.winner,
    draw: state.gameBoard.draw
});

const mapDispatchToProps = (dispatch) => ({
    claimSquare: (coordinates, playerIndex, playerDetails, gridSize) => {
        dispatch(claimSquare(coordinates, playerIndex, gridSize));
        dispatch(updateGrid(coordinates, playerDetails));
        dispatch(toggleTurn(playerIndex));
    },
    resetAll: () => {
        dispatch(resetAll());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard);
