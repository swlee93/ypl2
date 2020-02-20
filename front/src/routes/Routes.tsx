import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Admin } from 'react-admin'

import authProvider from './authProvider'

import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'

import client from './client'


import Menu from './Menu'

export default (props) => {
	
	const { dataProvider, customMenus, adminMenus, googleImages } = props
  
	return (
		<ApolloProvider client={client}>
			<Router>
				<ApolloHooksProvider client={client}>
					<Admin
						customRoutes={customMenus}
						menu={Menu}
						authProvider={authProvider}
						dataProvider={dataProvider}
					>
						{adminMenus}
					</Admin>
				</ApolloHooksProvider>
			</Router>
		</ApolloProvider>
	)
}
