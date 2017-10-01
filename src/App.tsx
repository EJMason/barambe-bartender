import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/homepage/Home';
import Login from './containers/login/Login';

export interface AppProps {
  name?: string;
}

export interface AppState {
  visible: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      visible: true
    };
  }

  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default App;
