import {
  StyledEditFormModalBox,
  StyledModal,
} from "../styles/StyledComponents";
import { Box, Button, TextField, Typography } from "@mui/material";
import { TimeField } from "@mui/x-date-pickers";
import { GetEndTime, GetStartTime } from "../utilities/timeconflict";

const onSubmit = () => {
  // this is supposed to do nothing for now lol
};

function EditForm({ open, onClose, course }) {
  const startTime = GetStartTime(course);
  const endTime = GetEndTime(course);

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
          />
          <TimeField
            id="class-start-time"
            label="Start Time"
            variant="filled"
            format="HH:mm"
            defaultValue={startTime}
          />
          <TimeField
            id="class-end-time"
            label="End Time"
            variant="filled"
            format="HH:mm"
            defaultValue={endTime}
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
