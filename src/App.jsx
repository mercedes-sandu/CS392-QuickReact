import "./App.css";
import Banner from "./components/Banner";
import CoursesPage from "./components/CoursesPage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDbData } from "./utilities/firebase";
import { StyledH1 } from "./styles/StyledComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useProfile } from "./utilities/profile";

const App = () => {
  const [profile, profileLoading, profileError] = useProfile();

  if (profileError)
    return <StyledH1>Error loading profile: {profileError}</StyledH1>;
  if (profileLoading) return <StyledH1>Loading user profile...</StyledH1>;
  if (!profile) return <StyledH1>No profile data</StyledH1>;

  const [data, error] = useDbData("/");

  if (!data) return <StyledH1>Loading...</StyledH1>;
  if (error) return <StyledH1>Error loading data: {error}</StyledH1>;

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <Banner title={data.title} profile={profile} />
          <Routes>
            <Route
              path="/"
              element={<CoursesPage courses={data.courses} profile={profile} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </div>
  );
};

export default App;
