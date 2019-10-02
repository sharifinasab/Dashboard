import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { createBrowserHistory } from "history";
import { createHashHistory } from "history";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';
import SignIn from 'signin';


// core components
import Admin from "layouts/Admin.js";

import Modal from '@material-ui/core/Modal';
import "assets/css/material-dashboard-react.css?v=1.8.0";

// const history = createBrowserHistory();
const history = createHashHistory();
const store = configureStore(history);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: true};
    this.handler = this.handler.bind(this);
  }

  handler(isOpen) {
    this.setState({
      showModal: isOpen
    })
  }
  
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
         <Switch>
           <Route path="/admin" component={Admin} />
           {/* <Redirect from="/" to="/admin/user" /> */}
         </Switch>
       </ConnectedRouter>
        {/* <Modal open={this.state.showModal}> */}
        <SignIn /*handler={ this.handler}*/ />
      {/* </Modal>} */}
        
      </Provider>
    );
  }  
}

export default App;