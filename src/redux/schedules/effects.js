import { schedulesSetLoading, schedulesFetchItem } from "./actions";
import { get } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
//import { createTodo } from '../../graphql/mutations';
import { listTodos } from '../../graphql/queries';

import awsconfig from '../../aws-exports';

API.configure(awsconfig);
PubSub.configure(awsconfig);

export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
  dispatch(schedulesSetLoading());
  
  const todoData = await API.graphql(graphqlOperation(listTodos));
  //console.log(todoData.data);
  const result = /* await get(); */todoData.data.listTodos.items;
  
  const formatedSchedule = result.map(r => formatSchedule(r));
  
  dispatch(schedulesFetchItem(formatedSchedule));
};
