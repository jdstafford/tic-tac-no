import React from 'react';
import PropTypes from 'prop-types';
import GameBoardRow from './GameBoardRow';
import GameBoardSquare from './GameBoardSquare';

const GameBoard = ({ grid, players }) => {
    const rows = [];

    // build game board rows
    for (let rowIndex = 0; rowIndex < grid.rows.length; rowIndex++) {
        let squares = [];
        let coordinates = {};

        // build game board columns
        for (let colIndex = 0; colIndex < grid.size; colIndex++) {
            coordinates.rowIndex = colIndex;
            squares.push(<GameBoardSquare
                key={colIndex}
                onClick={onSquareClick}
                coordinates={coordinates}
                owner={null}
            />);
        }

        rows.push(<GameBoardRow key={rowIndex} squares={squares} />);
    }

    return (
        <div className="GameBoard">
            {rows}
        </div>
    );
};

function onSquareClick(coordinates) {

}

GameBoard.propTypes = {
    grid: PropTypes.object.isRequired,
    players: PropTypes.array.isRequired
};

export default GameBoard;
