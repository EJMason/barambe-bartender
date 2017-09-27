import { } from 'semantic-ui-react/src/collections/Menu/MenuItem';
import * as React from 'react';
import {
  Menu,
  // Container,
  Image,
  Visibility
} from 'semantic-ui-react';

import { MenuItems } from '../components';
import tempLogo from '../../assets/tempLogo.svg';

export interface ClassProps {
  name?: string;
}

interface ClassState {
  activeItem: string;
  calculations: interfaces.Semantic_Visiblity;
}

export default class Navbar extends React.Component<ClassProps, ClassState> {
  constructor(props: ClassProps) {
    super(props);
    this.state = {
      activeItem: 'home',
      calculations: {
        direction: 'none',
        height: 0,
        width: 0,
        topPassed: false,
        bottomPassed: false,
        pixelsPassed: 0,
        percentagePassed: 0,
        topVisible: false,
        bottomVisible: false,
        fits: false,
        passing: false,
        onScreen: false,
        offScreen: false,
      },
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
  }

  updateWindowDimensions(): void {
    this.setState({
      ...this.state,
      calculations: {
        ...this.state.calculations,
        height: window.innerHeight,
        width: window.innerWidth
      }
    });
  }

  handleUpdate = (e: any, obj: any) => this.setState({ calculations: obj.calculations });

  handleItemClick(e: React.MouseEvent<HTMLAnchorElement>, name: string): void {
    return this.setState({ activeItem: name });
  }

  render() {
    const { activeItem, calculations } = this.state;
    const menupass =  {activeItem, menuClick: this.handleItemClick };
    return (
      <div>
        <Visibility onUpdate={this.handleUpdate}>
          {calculations.width}
        </Visibility>
        <Menu stackable fixed={'top'}>
          <Menu.Item children={<Image src={tempLogo} size="mini" />}/>

          {MenuItems(menupass)}

          {/* <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={(e) => this.handleItemClick(e, 'home')}
          />
          <Menu.Item
            name="messages"
            active={activeItem === 'messages'}
            onClick={(e) => this.handleItemClick(e, 'messages')}
          />
          <Menu.Item
            name="friends"
            active={activeItem === 'friends'}
            onClick={(e) => this.handleItemClick(e, 'friends')}
          /> */}
          <Menu.Menu position="right">
            <Menu.Item
              name="Bar Portal"
              active={activeItem === 'portal'}
              onClick={(e) => this.handleItemClick(e, 'portal')}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
