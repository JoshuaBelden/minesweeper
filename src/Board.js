import Tile from './Tile';

function Board(tiles) {
  return (
    <div className="board">
      {tiles.map((row) => (
        <div className="board__row">
          {row.map((column) => (
            <Tile tileData={column} />
          ))}{' '}
        </div>
      ))}
    </div>
  );
}

export default Board;