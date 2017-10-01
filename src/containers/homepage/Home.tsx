import * as React from 'react';
import { connect } from 'react-redux';
// import Navbar from './Navbar';
import { CREATORS } from './home.duck';
// import  { Banner, About } from './components';
import Banner from './components/banner';

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
        <Banner />
      </div>
    );
  }
}

const mapStateToProps = (state: any): any => ({
  test: state,
});

export default connect(mapStateToProps)(Home);
