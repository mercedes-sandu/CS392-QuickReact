import {
  Grid,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const terms = {
  all: "All",
  fall: "Fall",
  winter: "Winter",
  spring: "Spring",
};

function TermSelector({ setTerm }) {
  return (
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
                onChange={() => setTerm(value)}
                data-cy={value}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default TermSelector;
