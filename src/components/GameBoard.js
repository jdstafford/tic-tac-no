import React from 'react';
import PropTypes from 'prop-types';
import GameBoardRow from './GameBoardRow';
import GameBoardSquare from './GameBoardSquare';

const GameBoard = ({ grid, claimSquare, playerIndex, playerDetails, winner }) => {
    const rows = [];

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
            {playerDetails.character}{(winner ? ' Wins!' : '\'s Turn')}
            {rows}
        </div>
    );
};

GameBoard.propTypes = {
    grid: PropTypes.array.isRequired,
    claimSquare: PropTypes.func.isRequired,
    playerIndex: PropTypes.number.isRequired,
    playerDetails: PropTypes.object.isRequired,
    winner: PropTypes.bool.isRequired
};

export default GameBoard;
