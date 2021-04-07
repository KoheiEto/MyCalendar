import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";
import {
  addScheduleCloseDialog,
  addScheduleSetValue
} from "../../redux/addSchedule/actions";
import { schedulesAddItem } from "../../redux/schedules/actions";



import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
import { createTodo } from '../../graphql/mutations';

import awsconfig from '../../aws-exports';
import dayjs from "dayjs";

API.configure(awsconfig);
PubSub.configure(awsconfig);




const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  setSchedule: value => {
    dispatch(addScheduleSetValue(value));
  },
  saveSchedule: schedule => {
    dispatch(schedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());

  },
});

const mergeProps =  (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
   saveSchedule: () => {
    const {
      schedule: { form: schedule }
    } = stateProps;
    dispatchProps.saveSchedule(schedule);
    //console.log(schedule);
    //dbにデータ送信
    const todo = { title: schedule.title, description: schedule.description, date: schedule.date, location: schedule.location };
    //console.log(todo);
    API.graphql(graphqlOperation(createTodo, { input: todo }));
  }
});

export default connect(mapStateToProps, 
                       mapDispatchToProps,
                       mergeProps,
                       )(AddScheduleDialog);
