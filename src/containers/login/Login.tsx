/**
 * LOGIN CONTAINER
 * ----------------------------
 *
 */

/*
  TODO See if there is a way to save sub-domain to ip address
    * query if the ip has been saved, if so go to login/{barname}
  TODO Implement JSON tokens and scopes

  ? Add the visual form
*/
import './login.css';
import * as React from 'react';
import { connect } from 'react-redux';

import { CREATORS } from './login.duck';
import { LoginForm }  from './components/index';

interface Props {
  name?: string;
  dispatch?: any;
  test?: string;
}

interface State {
  temp: string;
}

class Login extends React.Component<Props, State> {

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
      <div className="login-root">
        <LoginForm />
      </div>
    );
  }
}

const mapStateToProps = (state: any): any => ({
  test: state,
});

export default connect(mapStateToProps)(Login);
