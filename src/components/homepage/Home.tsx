import * as React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { CREATORS } from './home.duck';
import  { Banner } from './components';

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
        <Navbar />
        <Banner />

        <p>{process.env.NODE_ENV}</p>
        <h1>{`TESTING REDUX: ${JSON.stringify(this.props.test)}`}</h1>

      </div>
    );
  }
}

const mapStateToProps = (state: any): any => ({
  test: state,
});

export default connect(mapStateToProps)(Home);
