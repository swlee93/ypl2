import React, { createElement, useContext } from 'react'
import { useSelector } from 'react-redux'

import { MenuItemLink } from 'react-admin'
import { withRouter } from 'react-router-dom'
import LabelIcon from '@material-ui/icons/Label'
import { MenuContext, ResourcesMeta } from './routesMeta'

const Menu = ({ onMenuClick, logout }) => {
	const open = useSelector((state) => state.admin.ui.sidebarOpen)

	const resourcesMap = useContext(MenuContext)
	const resources: any[] = Object.values(resourcesMap)

	return (
		<MenuContext.Provider value={ResourcesMeta}>
			{resources.map((resource) => {
				const { name, options, icon } = resource
				return (
					<MenuItemLink
						key={name}
						to={`/${name}`}
						primaryText={(options && options.label) || name}
						leftIcon={(icon && createElement(icon)) || LabelIcon}
						onClick={onMenuClick}
						sidebarIsOpen={open}
					/>
				)
			})}
		</MenuContext.Provider>
	)
}

const MenuWithRouter = withRouter(Menu)

export default MenuWithRouter
