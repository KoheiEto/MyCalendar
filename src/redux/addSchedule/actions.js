// constants
export const ADD_SCHEDULE_SET_VALUE = "ADD_SCHEDULE_SET_VALUE";
export const ADD_SCHEDULE_OPEN_DIALOG = "ADD_SCHEDULE_OPEN_DIALOG";
export const ADD_SCHEDULE_CLOSE_DIALOG = "ADD_SCHEDULE_CLOSE_DIALOG";

// actions

//formの値を更新
export const addScheduleSetValue = payload => ({
  type: ADD_SCHEDULE_SET_VALUE,
  payload
});
//dialog閉じる
export const addScheduleOpenDialog = () => ({
  type: ADD_SCHEDULE_OPEN_DIALOG
});
//dialog開く
export const addScheduleCloseDialog = () => ({
  type: ADD_SCHEDULE_CLOSE_DIALOG
});
