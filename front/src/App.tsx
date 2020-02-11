import React, { useState } from 'react'
import Routes from './routes'
import useInitializer from './hooks/useInitializer'

const App = () => {
	const [initProps] = useInitializer()

	return <Routes {...initProps} />
}

export default App
