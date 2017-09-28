import * as React from 'react';
import {
  Menu,
  Image,
} from 'semantic-ui-react';
import { assets } from '../../../assets';
import '../Homepage.css';

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
  return routes.map((name, i) => (
    <Menu.Item
      name={name}
      active={props.activeItem === name}
      onClick={props.menuClick}
      key={`menu_${i}`}
    />
  ));
};

export const Banner = () => {
  return (
    <div className="image">
      <Image
        src={assets.images.banner}
        fluid
      />
        <h2 id="head">drinks out for</h2>
        <h1 id="ttl"> BARAMBE </h1>
        <p id="slogan">Some cool saying here cuz app is awesome</p>
    </div>
  );
};
