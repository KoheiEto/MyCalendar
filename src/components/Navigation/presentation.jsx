import React from "react";
import { DatePicker } from "@material-ui/pickers";
import { IconButton, Toolbar, Typography } from "@material-ui/core";

import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";

/* const StyledDatePicker = withStyles({
  root: { marginLeft: 30 }
})(DatePicker); */

const Navigation = ({ setNextMonth, setPreviousMonth, setMonth, month }) => {

  //const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Toolbar>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <img src="/images/calendar_icon.png" width="40" height="40" />
      <Typography color="textSecondary" variant="h5" component="h1">
        カレンダー
      </Typography>
      <IconButton size="small" onClick={setPreviousMonth}>
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small" onClick={setNextMonth}>
        <ArrowForwardIos />
      </IconButton>
      <DatePicker
        value={month}
        onChange={setMonth}
        variant="inline"
        format="YYYY年 M月"
        animateYearScrolling
        disableToolbar
      />
    </Toolbar>
  );
};

export default Navigation;