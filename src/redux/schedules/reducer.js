import { SCHEDULES_ADD_ITEM,
         SCHEDULES_FETCH_ITEM,
         SCHEDULES_SET_LOADING } from "./actions";
import dayjs from "dayjs";



const init = {
  items: [
    /* {
      id: 1,
      title: "テスト",
      date: dayjs(),
      location: "会議室",
      description: "経営戦略について"
    } */
  ],
  //ロード中かどうか判定するフラグ
  isLoading: false
};




const schedulesReducer = (state = init, action) => {
  const { type, payload } = action;
  //const todoData = await API.graphql(graphqlOperation(listTodos));
  //const todos = todoData.data.listTodos.items;
  //state.items = todoData.data.listTodos.items;
  //console.log(todoData.data.listTodos.items);
  //console.log(state.items);
  //console.log(todoData.data.listTodos.items);
  //console.log(payload);
  //console.log(state);
  switch (type) {
    case SCHEDULES_SET_LOADING:
      //console.log("kkkk");
      return {
        ...state,
        isLoading: true
      };
      
    case SCHEDULES_FETCH_ITEM:
      //console.log("kkkk");
      return {
        ...state,
        isLoading: false,
        items: payload
      };

    case SCHEDULES_ADD_ITEM:
      //console.log("kkkk");
      return {
        ...state,
        items: [...state.items, { ...payload, id: state.items.length + 1 }]
      };


    default:
      //console.log(state);
      //console.log(type);
      return state;
  }
};

export default schedulesReducer;