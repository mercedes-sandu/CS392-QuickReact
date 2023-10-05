import { Button } from "@mui/material";
import { signInWithGoogle, signOut, useAuthState } from "../utilities/firebase";

const SignInButton = () => {
  return (
    <Button variant="contained" onClick={signInWithGoogle}>
      Sign In
    </Button>
  );
};

const SignOutButton = () => {
  return (
    <Button variant="contained" onClick={signOut}>
      Sign Out
    </Button>
  );
};

function AuthenticationButton() {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
}

export default AuthenticationButton;
