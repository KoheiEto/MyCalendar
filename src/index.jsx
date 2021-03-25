import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut, AmplifyAuthenticator } from '@aws-amplify/ui-react'


import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
//import CalendarBoard from "./components/CalendarBoard/presentation";
import CalendarBoard from "./components/CalendarBoard/container"
import dayjs from "dayjs";
import "dayjs/locale/ja";

import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container"

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import Amplify, {Auth} from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);



dayjs.locale("ja");

//storeの作成
const store = createStore(rootReducer);

/* function signOut() {
  Auth.signOut()
} */

const App = () => (
  <AmplifyAuthenticator>
  <Provider store={store}>
    <img src={logo} className="App-logo" alt="logo" />
    <h1>We now have Auth!</h1>
    <AmplifySignOut />
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog /> 
    </MuiPickersUtilsProvider>
  </Provider>
  </AmplifyAuthenticator>
  
);



/* const App = () => (
  <div>
    <CalendarBoard />
  </div>
); */


//export default withAuthenticator(App);
ReactDOM.render(<App />, document.getElementById("root"));
