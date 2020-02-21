import React, { useState } from 'react'
import Routes from './routes'
import useInitializer from './hooks/useInitializer'
import 'antd/dist/antd.css'

const App = () => {
	const [initProps] = useInitializer()

	return <Routes {...initProps} />
}

export default App
