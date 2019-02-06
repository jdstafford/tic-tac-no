import { connect } from 'react-redux';
import { toggleTurn, claimSquare } from '../actions';

import GameBoard from './GameBoard';

const mapStateToProps = state => ({
    gridSize: state.gameBoard.gridSize
});

const mapDispatchToProps = dispatch => ({
    toggleTurn: () => dispatch(toggleTurn()),
    claimSquare: (coordinates) => dispatch(claimSquare(coordinates))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard);
