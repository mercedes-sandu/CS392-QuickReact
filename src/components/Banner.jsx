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
        xs={2}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {profile.user ? (
          <Avatar src={profile.user.photoURL} sx={{ mr: 3 }} />
        ) : (
          <></>
        )}
        <AuthenticationButton />
      </Grid>
    </Grid>
  );
}

export default Banner;
