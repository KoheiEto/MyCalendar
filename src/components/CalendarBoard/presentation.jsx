import React from "react";
import CalendarElement from "../CalendarElement";
//import { createCalendar } from "../../services/calendar";
import { GridList, Typography } from "@material-ui/core";
//import { addScheduleOpenDialog } from "../../redux/addSchedule/actions";
import styles from "./styles.css";

//表示にのみ責任をもつコンポーネント

//const calendar = createCalendar();

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({ 
  calendar, 
  month, 
  openAddScheduleDialog,
  openCurrentScheduleDialog,
}) => {
    //console.log(calendar);
  return (
    <div className="container">
      <GridList className="grid" cols={7} spacing={0} cellHeight="auto">
        {days.map(d => (
          <li key={d} >
            <Typography
            className="days"
            color="textSecondary"
            align="center"
            variant="caption"
            component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {
        calendar.map(({ date, schedules }) => (
          <li
            key={date.toISOString()}
            onClick={() => openAddScheduleDialog(date)}
          >
            <CalendarElement 
              day={date} 
              month={month} 
              schedules={schedules} 
              onClickSchedule={openCurrentScheduleDialog}
            />
          </li>
        ))
        }
      </GridList>
    </div>
  );
};

export default CalendarBoard;