import * as React from 'react';
import {
  Menu,
  Button,
} from 'semantic-ui-react';

export interface Props {
  name?: string;
  fltBtn: any;
}

interface ClassState {
  activeItem: string;
  calculations: interfaces.Semantic_Visiblity;
}

export default class Navbar extends React.Component<Props, ClassState> {
  constructor(props: Props) {
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
    this.handleUpdate = this.handleUpdate.bind(this);
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
        width: window.innerWidth,
      },
    });
  }

  handleUpdate(e: any, obj: any) {
    this.setState({ calculations: obj.calculations });
  }

  handleItemClick(e: React.MouseEvent<HTMLAnchorElement>, name: string): void {
    return this.setState({ activeItem: name });
  }

  render() {
    return (
      <div className="home-menu-ctr front">
        <Menu inverted secondary>
          <Menu.Menu color="red" position="right">
            {/* <Menu.Item color="red" name="Bar Portal" /> */}
            <Menu.Item name="About" />
            <Menu.Item name="Developers" />
            <Button inverted content="Bar Portal" icon="home" color="red"/>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
