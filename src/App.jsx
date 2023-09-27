import './App.css';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import { useJsonQuery } from './utilities/fetch';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

const MainApp = () => {
  const coursesUrl = 'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php';
  const [data, isLoading, error] = useJsonQuery(coursesUrl);

  if (error) return <h1>Something went wrong: {error}</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <Banner title={data.title} />
      <CourseList courses={data.courses} />
    </div>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainApp />
    </QueryClientProvider>
  );
};

export default App;
