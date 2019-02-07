import { combineReducers } from 'redux';
import gameBoard from './gameBoard';
import players from './players';

export default combineReducers({
    gameBoard,
    players
});
