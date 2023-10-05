import "./App.css";
import Banner from "./components/Banner";
import Login from "./components/Login";
import TermSelector from "./components/TermSelector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useAuthState, useDbData, useDbUpdate } from "./utilities/firebase";
import { StyledH1 } from "./styles/StyledComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useProfile } from "./utilities/profile";
import { defaultCourses } from "./utilities/courses";

const queryClient = new QueryClient();

const MainApp = () => {
  const [data, error] = useDbData("/");
  const [user] = useAuthState();
  const [profile, profileLoading, profileError] = useProfile();

  if (!user) return <Login />;

  if (profileError) return <StyledH1>Error loading profile: {profileError}</StyledH1>;
  if (profileLoading) return <StyledH1>Loading user profile...</StyledH1>;
  if (!profile) return <StyledH1>No profile data</StyledH1>;  

  if (!data) return <StyledH1>Loading...</StyledH1>;
  if (error) return <StyledH1>Something went wrong: {error}</StyledH1>;

  const userID = profile.user.uid;

  if (userID in data.courses == false) {
    const [update] = useDbUpdate(`/courses/${profile.user.uid}`);
    update({
      [userID]: defaultCourses,
    });
  }

  return (
    <>
      <Banner title={data.title} profile={profile} />
      <TermSelector courses={data.courses[profile.user.uid]} profile={profile} />
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainApp />}></Route>
            </Routes>
          </BrowserRouter>
        </LocalizationProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
