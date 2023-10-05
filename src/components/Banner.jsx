import { Avatar, Button, Grid, Typography } from "@mui/material";
import { signOut } from "../utilities/firebase";

function Banner({ title, profile }) {
  return (
    <Grid container>
      <Grid item xs={10}>
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar src={profile.user.photoURL} />
      </Grid>
      <Grid
        item
        xs={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={signOut}>
          Log Out
        </Button>
      </Grid>
    </Grid>
  );
}

export default Banner;
