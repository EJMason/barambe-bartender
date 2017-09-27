import * as React from 'react';
import {
  Menu,
  // Container,
} from 'semantic-ui-react';

export interface MenuProps {
  activeItem: string;
  winWidth?: number;
  children?: any;
  menuClick?: any;
}

/**
 * Menu Items - Builds out the static menu items
 * ------------------------
 * @param props
 */
export const MenuItems = (props: MenuProps) => {
  const routes = ['about', 'developers', 'technology', 'contact'];
  return routes.map(name => (
    <Menu.Item
      name={name}
      active={props.activeItem === name}
      onClick={props.menuClick}
    />
  ));
};
