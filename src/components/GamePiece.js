import React from 'react';
import PropTypes from 'prop-types';

const GamePiece = ({ owner, position, size }) => (
    <div
        style={{
            width: size,
            height: size
        }}
    >
        {owner.avatar}
    </div>
);

GamePiece.propTypes = {
    owner: PropTypes.object.isRequired,
    position: PropTypes.object.isRequired,
    size: PropTypes.number.isRequired
};

export default GamePiece;
