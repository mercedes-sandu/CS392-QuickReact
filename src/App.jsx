import './App.css';
import Banner from './components/Banner';
import TermSelector from './components/TermSelector';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDbData } from './utilities/firebase';

const queryClient = new QueryClient();

const MainApp = () => {
  const [data, error] = useDbData('/');

  if (!data) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong: {error}</h1>;

  return (
    <div className="App">
      <Banner title={data.title} />
      <TermSelector courses={data.courses} />
    </div>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MainApp />
      </LocalizationProvider>
    </QueryClientProvider>
  );
};

export default App;
