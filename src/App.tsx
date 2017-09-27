import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/homepage/Home';
// import { Login } from './login/Login';

import './App.css';

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
        </Switch>
      </div>
    );
  }
}

export default App;
