import { signInWithGoogle } from "../utilities/firebase";
import { Box, Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import {
  StyledLoginBox,
  StyledLoginContainer,
} from "../styles/StyledComponents";

function Login() {
  return (
    <StyledLoginContainer>
      <StyledLoginBox>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Welcome to the NU CS Courses Webapp!
          </Typography>
          <Typography variant="body1">
            Please sign in below to continue.
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={signInWithGoogle}
          startIcon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
      </StyledLoginBox>
    </StyledLoginContainer>
  );
}

export default Login;
