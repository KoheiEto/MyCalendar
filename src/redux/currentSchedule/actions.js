// constants
export const CURRENT_SCHEDULE_SET_ITEM = "CURRENT_SCHEDULE_SET_ITEM";
export const CURRENT_SCHEDULE_OPEN_DIALOG = "CURRENT_SCHEDULE_OPEN_DIALOG";
export const CURRENT_SCHEDULE_CLOSE_DIALOG = "CURRENT_SCHEDULE_CLOSE_DIALOG";

// actions
export const currentScheduleSetItem = payload => ({
  type: CURRENT_SCHEDULE_SET_ITEM,
  payload
});

//開閉
export const currentScheduleOpenDialog = () => ({
  type: CURRENT_SCHEDULE_OPEN_DIALOG
});

export const currentScheduleCloseDialog = () => ({
  type: CURRENT_SCHEDULE_CLOSE_DIALOG
});