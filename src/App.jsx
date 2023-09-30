import './App.css';
import Banner from './components/Banner';
import TermSelector from './components/TermSelector';
import { useJsonQuery } from './utilities/fetch';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const queryClient = new QueryClient();

const MainApp = () => {
  const coursesUrl = 'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php';
  const [data, isLoading, error] = useJsonQuery(coursesUrl);

  if (error) return <h1>Something went wrong: {error}</h1>;
  if (isLoading) return <h1>Loading...</h1>;

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
