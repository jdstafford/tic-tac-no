import React from 'react';
import PropTypes from 'prop-types';

const ScoreBoard = ({ scoreBoard }) => (
    <div className="ScoreBoard">
        <h3>Scoreboard</h3>
        <div>X: {scoreBoard.X}</div>
        <div>O: {scoreBoard.O}</div>
    </div>
);

ScoreBoard.propTypes = {
    scoreBoard: PropTypes.object.isRequired
};

export default ScoreBoard;
