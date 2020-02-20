import { Route } from 'react-router-dom'
import React, { createContext, cloneElement, useState, useEffect, useMemo } from 'react'

import { Resource } from 'react-admin'

import { IdolFeed, Home, Users, Posts, Studio } from '../containers'
import { PostEdit, PostCreate } from '../containers/posts'

import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import DashboardIcon from '@material-ui/icons/Dashboard'
import StarRoundedIcon from '@material-ui/icons/StarRounded'
import CreateIcon from '@material-ui/icons/Create'

const PageLoader = ({ page, ...rest }) => {
	const [Contents, setContents] = useState<any>('loading')
	async function process() {
		let result: any = 'loading2'

		await import(`../containers/${page}`)
			.then((module) => {
				result = module.default
				console.log(typeof result)
			})
			.catch((error) => {
				result = 'error'
			})
		setContents(result)
	}

	useEffect(() => {}, [])
	process()

	return <div>{typeof Contents === 'function' ? <Contents /> : Contents}</div>
}

export const ResourcesMeta: any = {
	studio: { name: 'studio', comp: Studio, icon: CreateIcon },
	feed: { name: 'feed', comp: IdolFeed, icon: StarRoundedIcon },
	home: { name: 'home', comp: Home, icon: DashboardIcon },
	posts: {
		name: 'posts',
		list: Posts,
		edit: PostEdit,
		create: PostCreate,
		icon: PostIcon,
	},
	users: { name: 'users', list: Users, icon: UserIcon },
}

export const getResources = (props) => {
	let adminMenus = []
	let customMenus = []

	Object.keys(ResourcesMeta).map((name) => {
		const menuItem = ResourcesMeta[name]
		const isAdminResource = typeof menuItem.list !== 'undefined' ? true : false

		if (isAdminResource) {
			adminMenus.push(<Resource {...menuItem} {...props} />)
		} else if (menuItem.comp) {
			const Comp = menuItem.comp
			customMenus.push(
				<Route
					exact={true}
					path={`/${menuItem.name}`}
					props
					render={(routeProps) => <Comp {...routeProps} {...props} />}
					// component={menuItem.comp}
				/>
			)
		}
	})

	return { adminMenus, customMenus }
}
export const MenuContext = createContext(ResourcesMeta)
export default { MenuContext, getResources }
