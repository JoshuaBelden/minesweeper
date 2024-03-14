import React, { useEffect, useState } from 'react';

import TILE_STATE from './Tile';
import Board from './Board';

import './app.scss';

function App() {
	const [gameState, setGameState] = useState();

	useEffect(() => {
		setGameState(createGame(5, 5));
	}, [])

	const getChanceOfMine = () => {
		return false; //todo: 80% chance of mine
	}

	const createTile = () => {
		return {
			state: TILE_STATE.hidden,
			isMine: getChanceOfMine()
		}
	}

	const createGame = (cols, rows) => {
		return (new Array(rows)).map(r => (new Array(cols)).map(c => createTile()));
	}

	return (
		<div className="app">
			<div className="header"/>
			<Board gameState={gameState} />
		</div>
	);
}

export default App;
