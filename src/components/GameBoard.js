import React from 'react';
import PropTypes from 'prop-types';
import GameBoardRow from './GameBoardRow';
import GameBoardSquare from './GameBoardSquare';
import PlayAgainButton from './PlayAgainButton';
import ScoreBoard from './ScoreBoard';

const GameBoard = ({
    grid,
    scoreBoard,
    claimSquare,
    resetAll,
    playerIndex,
    playerDetails,
    winner,
    draw
}) => {
    const rows = [];
    const playAgain = (winner || draw) ? <PlayAgainButton resetAll={() => { resetAll() }} /> : '';
    const winnerMessage = ((winner && !draw) ? (' Wins!') : '\'s Turn');
    const playerMessage = playerDetails.character + winnerMessage;
    const drawMessage = 'Draw!';

    // construct the grid from state
    grid.forEach((row, rowIndex) => {
        const squares = [];

        // build game board columns from state
        row.forEach((column, colIndex) => {
            const coordinates = { rowIndex, colIndex };

            squares.push(<GameBoardSquare
                key={colIndex}
                currentPlayer={playerDetails}
                claimSquare={() => { claimSquare(coordinates, playerIndex, playerDetails, grid.length) }}
                owner={column.owner}
                winner={winner}
            />);
        });

        rows.push(<GameBoardRow key={rowIndex} squares={squares} />);
    });

    return (
        <div className="GameBoard">
            <div className="InfoBar">
                {(draw && !winner) ? drawMessage : playerMessage}
                {playAgain}
            </div>
            {rows}
            <ScoreBoard scoreBoard={scoreBoard} />
        </div>
    );
};

GameBoard.propTypes = {
    grid: PropTypes.array.isRequired,
    claimSquare: PropTypes.func.isRequired,
    resetAll: PropTypes.func.isRequired,
    playerIndex: PropTypes.number.isRequired,
    playerDetails: PropTypes.object.isRequired,
    winner: PropTypes.bool.isRequired
};

export default GameBoard;
