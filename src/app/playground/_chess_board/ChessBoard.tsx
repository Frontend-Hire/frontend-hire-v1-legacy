import React from 'react';
import { getAlternateColor } from './utils';
import { COLORS, FILES, RANKS, SQUARE_SIZE } from './constants';

function createBoard() {
  const board = [];

  RANKS.reverse().forEach((rankLabel, rankLabelIdx) => {
    const file = [];
    FILES.forEach((fileLabel, fileLabelIdx) => {
      file.push({
        file: fileLabel,
        rank: rankLabel,
        color:
          (fileLabelIdx + rankLabelIdx) % 2 === 0
            ? COLORS.lightSquare
            : COLORS.darkSquare,
      });
    });

    board.push(file);
  });

  return board;
}

const BOARD = createBoard();

function Square({ file, rank, color, isHighlighted, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative"
      style={{
        backgroundColor: `${isHighlighted ? COLORS.highlight : color}`,
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
      }}
    >
      {isHighlighted && (
        <p className="text-sm" style={{ color: COLORS.highlightText }}>
          {file}
          {rank}
        </p>
      )}
      {!isHighlighted && file === 'a' && (
        <span
          style={{ color: getAlternateColor(color) }}
          className="pointer-events-none absolute left-0 top-0 select-none p-0.5 text-xs"
        >
          {rank}
        </span>
      )}
      {!isHighlighted && rank === '1' && (
        <span
          style={{ color: getAlternateColor(color) }}
          className="pointer-events-none absolute bottom-0 right-0 select-none p-0.5 text-xs"
        >
          {file}
        </span>
      )}
    </div>
  );
}

export default function ChessBoard() {
  const [highlightedSquare, setHighlightedSquare] = React.useState({
    file: '',
    rank: '',
  });

  return (
    <div>
      {BOARD.map((rank) => (
        <div className="flex" key={rank[0].rank}>
          {rank.map((square) => (
            <Square
              key={square.file + square.rank}
              file={square.file}
              rank={square.rank}
              color={square.color}
              isHighlighted={
                square.file + square.rank ===
                highlightedSquare.file + highlightedSquare.rank
              }
              onClick={() => setHighlightedSquare(square)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
