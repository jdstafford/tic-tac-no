import { combineReducers } from 'redux';
import gameBoard from './gameBoard';
import gameBoardSquares from './gameBoardSquares';
import players from './players';

export default combineReducers({
    gameBoard,
    gameBoardSquares,
    players
});
