import { useEffect, useMemo, useState } from 'react'
import jsonServerProvider from 'ra-data-json-server'
import { getResources } from '../routes/routesMeta'
import GoogleImages from 'google-images'

export default () => {
	const [initial, setInitial] = useState({
		dataProvider: {},
		customMenus: [],
		adminMenus: [],
		googleImages: { search: (search) => console.log(search) },
	})
	useEffect(() => {
		const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')
		const googleImages = new GoogleImages(
			'008951704437240895506:sgcv11ej7cl',
			'AIzaSyAlL3IRTHr_zoNYkp2L0ykhCQvhMMm95r0'
		) || { search: () => undefined }
		const { customMenus, adminMenus } = getResources({ googleImages })

		setInitial({
			dataProvider,
			customMenus,
			adminMenus,
			googleImages,
		})
	}, [])

	return [initial, setInitial]
}
