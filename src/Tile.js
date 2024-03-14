const TILE_STATE = {
  hidden: 'hidden',
  visible: 'visible',
  flagged: 'flagged',
};

function Tile(tileData) {
  const handleClick = () => {};

  const renderTile = () => {
    switch (tileData.state) {
      case TILE_STATE.hidden:
        return <div className="tile--hidden" />;
      case TILE_STATE.visible:
        return (
          <div className="tile--visible">
            {tileData.isMine ? 'M' : tileData.adjacentMines}
          </div>
        );
      case TILE_STATE.flagged:
        return <div className="tile--flagged">F</div>;
      default:
        return null;
    }
  };

  return <div className="tile">{renderTile()}</div>;
}

export default Tile;
