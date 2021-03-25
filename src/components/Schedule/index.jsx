import React from "react";

import * as styles from "./style.css";

const Schedule = ({ schedule, onClickSchedule }) => {
  return (
    <div 
      className="schedule"
      onClick={e => onClickSchedule(schedule, e)}
    >
      {schedule.title}
    </div>
  );
};

export default Schedule;