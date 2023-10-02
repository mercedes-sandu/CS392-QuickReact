import {
  StyledDaysBox,
  StyledDayIconButton,
  StyledEditFormModalBox,
  StyledModal,
} from "../styles/StyledComponents";
import { Box, Button, TextField, Typography } from "@mui/material";
import { TimeField } from "@mui/x-date-pickers";
import { GetDays, GetEndTime, GetStartTime } from "../utilities/timeconflict";
import { useEffect, useState } from "react";
import { TimeIncludesDay } from "../utilities/timeconflict";
import { useDbUpdate } from "../utilities/firebase";

function EditForm({ open, onClose, course, courseKey }) {
  const startTime = GetStartTime(course);
  const endTime = GetEndTime(course);
  const [update] = useDbUpdate(`/courses/${courseKey}`);
  const [editedTitle, setEditedTitle] = useState(course.title);
  const [editedDays, setEditedDays] = useState(GetDays(course));
  const [editedStartTime, setEditedStartTime] = useState(startTime);
  const [editedEndTime, setEditedEndTime] = useState(endTime);
  const [titleValid, setTitleValid] = useState(true);
  const [daysValid, setDaysValid] = useState(true);
  const [startTimeValid, setStartTimeValid] = useState(true);
  const [endTimeValid, setEndTimeValid] = useState(true);
  const [days, setDays] = useState({
    "M": TimeIncludesDay(course, "M"),
    "Tu": TimeIncludesDay(course, "Tu"),
    "W": TimeIncludesDay(course, "W"),
    "Th": TimeIncludesDay(course, "Th"),
    "F": TimeIncludesDay(course, "F"),
  });

  const onTitleChange = (event) => {
    const title = event.target.value;
    setTitleValid(title.length >= 2);
    setEditedTitle(title);
  };

  const onStartTimeChange = (time) => {
    setEditedStartTime(new Date(time));
    setStartTimeValid(
      new Date(time) !== "Invalid Date" &&
        !isNaN(new Date(time)) &&
        new Date(time) < new Date(editedEndTime)
    );
    setEndTimeValid(new Date(time) < new Date(editedEndTime));
  };

  const onEndTimeChange = (time) => {
    setEditedEndTime(new Date(time));
    setEndTimeValid(
      new Date(time) !== "Invalid Date" &&
        !isNaN(new Date(time)) &&
        new Date(time) > new Date(editedStartTime)
    );
    setStartTimeValid(new Date(time) > new Date(editedStartTime));
  };

  const onDayClick = (day) => {
    setDays((prevDays) => {
      return { ...prevDays, [day]: !prevDays[day] };
    });
  };

  const onSubmit = () => {
    if (titleValid && daysValid && startTimeValid && endTimeValid) {
      var editedStartTimeFormatted =
        (editedStartTime.getHours() < 10 ? "0" : "") +
        editedStartTime.getHours() +
        ":" +
        (editedStartTime.getMinutes() < 10 ? "0" : "") +
        editedStartTime.getMinutes();
      var editedEndTimeFormatted =
        (editedEndTime.getHours() < 10 ? "0" : "") +
        editedEndTime.getHours() +
        ":" +
        (editedEndTime.getMinutes() < 10 ? "0" : "") +
        editedEndTime.getMinutes();
      update({
        title: editedTitle,
        meets:
          editedDays +
          " " +
          editedStartTimeFormatted +
          "-" +
          editedEndTimeFormatted,
      });
      onClose();
    }
  };

  useEffect(() => {
    setDaysValid(Object.values(days).reduce((acc, day) => acc || day, false));
    setEditedDays(
      Object.keys(days)
        .filter((day) => days[day])
        .join("")
    );
  }, [days]);

  return (
    <StyledModal open={open} onClose={onClose}>
      <StyledEditFormModalBox>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Edit Class
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            mb: 2,
          }}
        >
          <TextField
            id="class-title"
            label="Title"
            variant="filled"
            defaultValue={course.title}
            onChange={(event) => onTitleChange(event)}
            error={!titleValid}
            helperText={
              titleValid ? "" : "Title should be at least two characters long."
            }
            sx={{ mb: 2 }}
          />
          <StyledDaysBox
            sx={{
              borderColor: daysValid ? "primary.main" : "error.main",
              pt: 1,
              pb: 1,
              mb: daysValid ? 2 : 0,
            }}
          >
            <StyledDayIconButton
              onClick={() => onDayClick("M")}
              sx={{
                backgroundColor: days["M"] ? "#42a5f5" : "transparent",
                "&:hover": {
                  backgroundColor: days["M"] ? "#42a5f5" : "#f5f5f5",
                },
              }}
            >
              <Typography variant="h6" component="h3">
                M
              </Typography>
            </StyledDayIconButton>
            <StyledDayIconButton
              onClick={() => onDayClick("Tu")}
              sx={{
                backgroundColor: days["Tu"] ? "#42a5f5" : "transparent",
                "&:hover": {
                  backgroundColor: days["Tu"] ? "#42a5f5" : "#f5f5f5",
                },
              }}
            >
              <Typography variant="h6" component="h3">
                Tu
              </Typography>
            </StyledDayIconButton>
            <StyledDayIconButton
              onClick={() => onDayClick("W")}
              sx={{
                backgroundColor: days["W"] ? "#42a5f5" : "transparent",
                "&:hover": {
                  backgroundColor: days["W"] ? "#42a5f5" : "#f5f5f5",
                },
              }}
            >
              <Typography variant="h6" component="h3">
                W
              </Typography>
            </StyledDayIconButton>
            <StyledDayIconButton
              onClick={() => onDayClick("Th")}
              sx={{
                backgroundColor: days["Th"] ? "#42a5f5" : "transparent",
                "&:hover": {
                  backgroundColor: days["Th"] ? "#42a5f5" : "#f5f5f5",
                },
              }}
            >
              <Typography variant="h6" component="h3">
                Th
              </Typography>
            </StyledDayIconButton>
            <StyledDayIconButton
              onClick={() => onDayClick("F")}
              sx={{
                backgroundColor: days["F"] ? "#42a5f5" : "transparent",
                "&:hover": {
                  backgroundColor: days["F"] ? "#42a5f5" : "#f5f5f5",
                },
              }}
            >
              <Typography variant="h6" component="h3">
                F
              </Typography>
            </StyledDayIconButton>
          </StyledDaysBox>
          {!daysValid && (
            <Typography
              variant="body1"
              component="p"
              sx={{ mt: 1, mb: 2, color: "error.main", fontSize: "12px" }}
            >
              Please select at least one day.
            </Typography>
          )}
          <TimeField
            id="class-start-time"
            label="Start Time"
            variant="filled"
            format="HH:mm"
            value={editedStartTime}
            onChange={(time) => onStartTimeChange(time)}
            defaultValue={startTime.toDate()}
            error={!startTimeValid}
            helperText={
              startTimeValid ? "" : "Please select a valid start time."
            }
          />
          <TimeField
            id="class-end-time"
            label="End Time"
            variant="filled"
            format="HH:mm"
            value={editedEndTime}
            onChange={(time) => onEndTimeChange(time)}
            defaultValue={endTime.toDate()}
            error={!endTimeValid}
            helperText={endTimeValid ? "" : "Please select a valid end time."}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onSubmit} variant="contained">
            Submit
          </Button>
        </Box>
      </StyledEditFormModalBox>
    </StyledModal>
  );
}

export default EditForm;
