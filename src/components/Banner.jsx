import { Avatar, Grid, Typography } from "@mui/material";
import AuthenticationButton from "./AuthenticationButton";

function Banner({ title, profile }) {
  // console.log(profile.user);
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
        {profile.user ? <Avatar src={profile.user.photoURL} /> : <></>}
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
        <AuthenticationButton />
      </Grid>
    </Grid>
  );
}

export default Banner;
