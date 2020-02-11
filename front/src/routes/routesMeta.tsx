import { Route } from 'react-router-dom'
import React, { createContext } from 'react'

import { Resource } from 'react-admin'

import { IdolFeed, Home, Users, Posts } from '../containers'
import { PostEdit, PostCreate } from '../containers/posts'

import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import DashboardIcon from '@material-ui/icons/Dashboard'
import StarRoundedIcon from '@material-ui/icons/StarRounded'

export const ResourcesMeta: any = {
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

export const MenuContext = createContext(ResourcesMeta)

export const Resources = () => {
	let adminMenus = []
	let customMenus = []

	Object.keys(ResourcesMeta).map((name) => {
		const menuItem = ResourcesMeta[name]
		const isAdminResource = typeof menuItem.list !== 'undefined' ? true : false

		if (isAdminResource) {
			adminMenus.push(<Resource {...menuItem} />)
		} else if (menuItem.comp) {
			customMenus.push(<Route exact={true} path={`/${menuItem.name}`} component={menuItem.comp} />)
		}
	})

	return { adminMenus, customMenus }
}

export default { MenuContext, Resources }
