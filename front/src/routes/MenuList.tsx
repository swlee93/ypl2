import React, { createContext } from "react";
import { Resource } from "react-admin";

import UserList from "../containers/users";
import PostList from "../containers/posts";
import PostEdit from "../containers/posts/PostEdit";
import PostCreate from "../containers/posts/PostCreate";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Home from "../containers/home/Home";
import { Route } from "react-router-dom";

export const MenuList: any = {
  home: { name: "home", comp: Home, icon: DashboardIcon },
  posts: {
    name: "posts",
    list: PostList,
    edit: PostEdit,
    create: PostCreate,
    icon: PostIcon
  },
  users: { name: "users", list: UserList, icon: UserIcon }
};

export const Resources = () => {
  let adminMenus = [];
  let customMenus = [];

  Object.keys(MenuList).map(name => {
    const menuItem = MenuList[name];
    const isAdminResource = typeof menuItem.list !== "undefined" ? true : false;

    if (isAdminResource) {
      adminMenus.push(<Resource {...menuItem} />);
    } else if (menuItem.comp) {
      customMenus.push(
        <Route
          exact={true}
          path={`/${menuItem.name}`}
          component={menuItem.comp}
        />
      );
    }
  });

  return { adminMenus, customMenus };
};

export const MenuContext = createContext(MenuList);

export default { MenuList, MenuContext, Resources };
