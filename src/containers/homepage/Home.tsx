import * as React from 'react';
import * as MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { Divider, Container, Visibility } from 'semantic-ui-react';

import { CREATORS } from './home.duck';
import Navbar from './Navbar';
import Banner from './components/banner';
import BodyOne from './components/body1';
import Blocks from './components/bodyBlocks';
import AppIcons from './components/appStore';
import Developers from './components/developers';
import BarApp from './components/bartenderApp';
import Footer from './components/footer';
import AnBtn from './components/ButtonAnimation';
import BtBtn from './components/ButtonBottom';

interface Props {
  name?: string;
  dispatch?: any;
  test?: string;
}

interface State {
  temp: string;
  visible: boolean;
  wiggler: number;
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    {
      this.state = {
        temp: 'tmp',
        visible: false,
        wiggler: 0,
      };
    }

    this.showFltBtn = this.showFltBtn.bind(this);
    this.wiggler = this.wiggler.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(CREATORS.testRedux());
    this.wiggler();
  }

  showFltBtn(toShow: boolean): void {
    this.setState(Object.assign({}, this.state, { showPortalButton: toShow }));
  }

  wiggler(): void {
    let modder = 0;
    setInterval(() => {
      modder = (this.state.wiggler + 1) % 2;
      this.setState(Object.assign({}, this.state, { wiggler: modder }));
    }, 2000);
  }

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: true });

  render() {
    return (
      <div className="class-top-ctr">
        {this.state.visible ? null : null}
        <Visibility
          className="hider back"
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          {/* Top banner with barambe logo */}
          <Navbar fltBtn={this.showFltBtn} />
        </Visibility>
        <Banner />
        <Divider section hidden />
        {/* This is the first homepage info block */}
        <BodyOne />

        <MediaQuery query="(max-width: 800px)">
          {(matches: boolean) => {
            if (!matches) {
              return (
                <AnBtn showButton={this.state.visible} wiggle={this.state.wiggler} />
              );
            } else {
              return (
                <BtBtn showButton={this.state.visible} />
              );
            }
          }}
        </MediaQuery>

        <Container>
          <Divider section hidden />
          <Divider section hidden />
          <Divider />
        </Container>

        <Divider section hidden />
        <Divider section hidden />

        {/* Information about the mobile app */}
        <Blocks />
        <AppIcons />

        {/* Section about the developers */}
        <Developers />

        <BarApp />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: any): any => ({
  test: state,
});

export default connect(mapStateToProps)(Home);
