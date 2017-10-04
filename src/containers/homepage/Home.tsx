import * as React from 'react';
import { connect } from 'react-redux';
import { Divider, Container } from 'semantic-ui-react';
// import Navbar from './Navbar';
import { CREATORS } from './home.duck';
// import  { Banner, About } from './components';
import Banner from './components/banner';
import BodyOne from './components/body1';
import Blocks from './components/bodyBlocks';
import AppIcons from './components/appStore';
import Developers from './components/developers';
import BarApp from './components/bartenderApp';
import Footer from './components/footer';

interface Props {
  name?: string;
  dispatch?: any;
  test?: string;
}

interface State {
  temp: string;
}

class Home extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props); {
      this.state = {
        temp: 'tmp'
      };
    }
  }

  componentDidMount() {
    this.props.dispatch(CREATORS.testRedux());
  }

  render() {
    return (
      <div>
        {/* Top banner with barambe logo */}
        <Banner />

        <Divider section hidden />

        {/* This is the first homepage info block */}
        <BodyOne />

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
