import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut, AmplifyAuthenticator } from '@aws-amplify/ui-react'


import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

//import CalendarBoard from "./components/CalendarBoard/presentation";
import CalendarBoard from "./components/CalendarBoard/container"
import dayjs from "dayjs";
import "dayjs/locale/ja";

import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container"
import AuthStateApp from "./AuthStateApp";

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import Amplify, {Auth} from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);




dayjs.locale("ja");

const {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
} = require('amazon-cognito-identity-js');

//const config = require('./config');

const userPool = new CognitoUserPool({
  UserPoolId: "us-east-1_2kauFi5ms",
  ClientId: "3bdrp1085v9mchis7b71nj5uu3",
});

const cognitoUser = new CognitoUser({
  Username: "kohei",
  Pool: userPool,
});

const authenticationDetails = new AuthenticationDetails({
  Username: "kohei",
  Password: "12121Sui",
});

cognitoUser.authenticateUser(authenticationDetails, {
  onSuccess(result) {
    const token = result.getIdToken().getJwtToken();
    console.log(result);
  },

  onFailure(err) {
    console.error(err);
  },
});


//storeの作成
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  
  <Provider store={store}>
    <AuthStateApp />
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog /> 
    </MuiPickersUtilsProvider>
  </Provider>
   
);

//export default withAuthenticator(App);
ReactDOM.render(<App />, document.getElementById("root"));
