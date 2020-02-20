import React, { useState, useEffect } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

const tile = {
	thumbnail: {
		url: 'http://www.channelin.co.kr/news/photo/201911/2474_2209_5459.jpg',
		width: 0,
		height: 0,
	},
	description: 'Image',

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
export default (props) => {
	console.log('props', props)
	const classes = useStyles()
	const [cols, setCols] = useState(12)

	const [tileData, setTileData] = useState(() => {
		let data = []
		let acc = 0
		let length = 100
		for (var i = 0; i < length; i++) {
			let int = Math.ceil(Math.random() * (cols - 1))
			let col = int
			acc += int
			if (acc >= cols) {
				col = cols - (acc - col)
				acc = 0
			}

			const copy = { ...tile, cols: col }
			data.push(copy)
		}
		return data
	})

	useEffect(() => {
		props.googleImages.search('yooa').then((json) => {
			console.log('json', json)
			const items = json || []
			const tiles = items.map((item) => {
				return {
					...item,
					cols: item.thumbnail.width / item.thumbnail.height,
				}
			})
			console.log('tiles', tiles)
			setTileData(tiles)
		})
	}, [props.googleImages])

	return (
		<div className={classes.root}>
			<div className='gcse-search'></div>
			<GridList className={classes.gridList} cols={cols}>
				{tileData.map((tile, idx) => (
					<GridListTile
						key={idx}
						cols={tile.cols || 1}
						onClick={() => window.open(tile.parentPage, '_blank')}
					>
						<img src={tile.thumbnail.url} alt={tile.description} />
					</GridListTile>
				))}
			</GridList>
		</div>
	)
}
