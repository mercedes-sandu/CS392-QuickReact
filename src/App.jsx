import "./App.css";
import Banner from "./components/Banner";
import Login from "./components/Login";
import TermSelector from "./components/TermSelector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useAuthState, useDbData } from "./utilities/firebase";
import { StyledH1 } from "./styles/StyledComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const MainApp = () => {
  const [data, error] = useDbData("/");
  const [user] = useAuthState();

  if (!user) return <Login />;

  if (!data) return <StyledH1>Loading...</StyledH1>;
  if (error) return <StyledH1>Something went wrong: {error}</StyledH1>;

  return (
    <>
      <Banner title={data.title} user={user} />
      <TermSelector courses={data.courses} user={user} />
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
