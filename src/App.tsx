import CourseList from "./CourseList";
import { Course } from "./CourseTypes";
import './App.css';

type AppProps = {
  courses: Course[];
};

function App({ courses }: AppProps) {
  return (
    <div className="main">
      <CourseList courses={courses} />
    </div>
  );
}

export default App;
