import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './homepage/Home';
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

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>

//         <Switch>
//         <Route exact={true} path="/" component={Home}/>
//         <Route path="/login" component={Login}/>
//         </Switch>
//       </div>
//     );
//   }
// }

export default App;
