import React, { useEffect, useState, useContext, Fragment } from 'react'

import { HOME_PAGE } from '../../api/queries'

import { useQuery } from 'react-apollo-hooks'

import Markers, { MarkerType } from '../../components/markers'
import KakaoMap from '../../components/KakaoMap'
import { Container } from '../../styles'
import Rolling from '../../components/Rolling'
import Card from '../../components/Card'

const Home = () => {
	const { data, error, loading, ...rest } = useQuery(HOME_PAGE)
	const [location, setLocation] = useState({ lng: 33.450701, lat: 126.570667 })

	console.log('Home Data', data, error, loading)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude
			const lng = position.coords.longitude
			setLocation({ lat, lng })
		})
	}, [])

	const { lng, lat } = location

	return (
		<Container>
			{/* <Rolling>
        <Card />
        <Card />
        <Card />
      </Rolling> */}
			<KakaoMap options={{ lng, lat, zoom: 'BOTTOMRIGHT', mapType: 'TOPLEFT' }}>
				<Fragment>
					<Markers data={[location]} name={MarkerType.user} />
					{data && data.devices && <Markers data={data.devices} name={MarkerType.device} />}
				</Fragment>
			</KakaoMap>
		</Container>
	)
}

export default Home
