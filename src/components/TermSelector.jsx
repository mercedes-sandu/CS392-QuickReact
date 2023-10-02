import { useState } from "react";
import {
  Divider,
  Grid,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import CourseList from "./CourseList";

const terms = {
  all: "All",
  fall: "Fall",
  winter: "Winter",
  spring: "Spring",
};

const Selector = ({ courses, user }) => {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);

  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Grid item>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Select a term.
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="all"
            >
              {Object.entries(terms).map(([key, value]) => (
                <FormControlLabel
                  key={key}
                  value={key}
                  control={<Radio />}
                  label={value}
                  onChange={() => setSelection(key)}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Divider sx={{ width: "100%" }} />
      <CourseList
        courses={
          selection === "all"
            ? courses
            : Object.fromEntries(
                Object.entries(courses).filter(
                  ([key, value]) => value.term === terms[selection]
                )
              )
        }
        user={user}
      />
    </>
  );
};

function TermSelector({ courses, user }) {
  return (
    <>
      <Selector courses={courses} user={user} />
    </>
  );
}

export default TermSelector;
