import { useEffect, useMemo, useState } from 'react'
import jsonServerProvider from 'ra-data-json-server'
import { Resources } from '../routes/routesMeta'
export default () => {
	const [initial, setInitial] = useState({})
	useEffect(() => {
		const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')
		const { customMenus, adminMenus } = Resources()

		setInitial({
			test: 1,
			dataProvider,
			customMenus,
			adminMenus,
		})
	}, [])

	return [initial, setInitial]
}
