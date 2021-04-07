import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';
//import { createTodo } from '../../graphql/mutations';
import { listTodos } from '../graphql/queries';

import awsconfig from '../aws-exports';

API.configure(awsconfig);
PubSub.configure(awsconfig);



export const get = async path => {
  const todoData = await API.graphql(graphqlOperation(listTodos));
  return todoData.data.listTodos.items;
};
  //const todos = todoData.data.listTodos.items;
  //state.items = todoData.data.listTodos.items;
  //console.log(todoData.data.listTodos.items);
  //console.log(state.items);
  //console.log(todoData.data.listTodos.items);
  //console.log(payload);
  //console.log(state);