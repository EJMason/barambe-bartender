import '../Homepage.css';
import * as React from 'react';
import {
  Menu,
  Image,
  Segment,
  Container,
  Divider,
  Header,
  Button,
} from 'semantic-ui-react';
import { assets } from '../../../assets';

export interface MenuProps {
  activeItem: string;
  winWidth?: number;
  children?: any;
  menuClick?: any;
}

export const About = () => {
  const styl = { fontSize: '2em', color: '#00CFC3' };
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
    <Container text>
      <Header as="h3" style={styl}>{assets.text.about.headerTxt}</Header>
      <p style={{ fontSize: '1.33em' }}>{assets.text.about.disclaimer}</p>
      <Button as="a" size="large">Read more about the technical stuff</Button>
      <Divider
        as="h4"
        className="header"
        horizontal
        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
      >
        <a href="#">Tools Used: Bartender Client</a>
      </Divider>
      <Header as="h3" style={styl}>Barambe Mobile App</Header>
      <p style={{ fontSize: '1.33em' }}>{assets.text.about.body_app}</p>
      <Button as="a" size="large">Github Repo</Button>
    </Container>
  </Segment>
  );
};

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
        <p id="slogan">bartending efficiency at the touch of a button.</p>
    </div>
  );
};
