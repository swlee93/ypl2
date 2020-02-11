import React, { useState } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

const tile = {
	img: 'http://www.channelin.co.kr/news/photo/201911/2474_2209_5459.jpg',
	title: 'Image',
	author: 'author',
	cols: 2,
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			overflow: 'hidden',
			backgroundColor: theme.palette.background.paper,
		},
		gridList: {},
	})
)
export default () => {
	const classes = useStyles()
	const [cols, setCols] = useState(6)
	const [tileData] = useState(() => {
		let data = []
		let acc = 0
		let length = 10
		for (var i = 0; i < length; i++) {
			let int = Math.ceil(Math.random() * (cols - 1))
			let col = int
			acc += int
			if (acc >= cols) {
				col = cols - (acc - col)
				acc = 0
			}
			if (i === length - 1) {
				col = cols - acc + col
			}
			const copy = { ...tile, cols: col }
			data.push(copy)
		}
		return data
	})

	return (
		<div className={classes.root}>
			<GridList className={classes.gridList} cols={cols}>
				{tileData.map((tile, idx) => (
					<GridListTile key={idx} cols={tile.cols || 1}>
						<img src={tile.img} alt={tile.title} />
					</GridListTile>
				))}
			</GridList>
		</div>
	)
}
