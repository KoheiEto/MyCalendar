//reactとreduxを接続
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";
import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";
import { addScheduleOpenDialog,
         addScheduleSetValue,
} from "../../redux/addSchedule/actions";
import { setSchedules } from "../../services/schedule";
import {
  currentScheduleSetItem,
  currentScheduleOpenDialog
} from "../../redux/currentSchedule/actions";


import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import { listTodos } from '../../graphql/queries';

import awsconfig from '../../aws-exports';

API.configure(awsconfig);
PubSub.configure(awsconfig);





//storeから取り出してpropsにする
const mapStateToProps = state => ({ 
  calendar: state.calendar,
  schedules: state.schedules 
});

const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: d => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  },
  openCurrentScheduleDialog: (schedule, e) => {
    // 他のイベントが発火するのをキャンセル
    e.stopPropagation();

    dispatch(currentScheduleSetItem(schedule));
    dispatch(currentScheduleOpenDialog());
  },
  fetchSchedule: month => {
    //console.log("222222");
    dispatch(asyncSchedulesFetchItem(month));
  }
});

const mergeProps =  (stateProps, dispatchProps) => {
  const {
    calendar: month,
    schedules: { items: schedules }
  } = stateProps;

//const calendar = setSchedules(createCalendar(month), schedules);
//const todoData = API.graphql(graphqlOperation(listTodos));
  //const todos = todoData.data.listTodos.items;
  //state.items = todoData.data.listTodos.items;
  //console.log(todoData.data.listTodos.items);
  //console.log(state.items);
  //console.log(todoData.data.listTodos.items);
  //console.log(payload);
  //console.log(state);
//schedules = todoData.data.listTodos.items;
//console.log("llllll");
const calendar = setSchedules(createCalendar(month), schedules);
//const calendar = 1;
//console.log("222222");

  return {
    ...stateProps,
    ...dispatchProps,
    fetchSchedule: () => dispatchProps.fetchSchedule(month),
    calendar,
    month
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);