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

dayjs.locale("ja");

//storeの作成
const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog /> 
    </MuiPickersUtilsProvider>
  </Provider>
);



/* const App = () => (
  <div>
    <CalendarBoard />
  </div>
); */

ReactDOM.render(<App />, document.getElementById("root"));