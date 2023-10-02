import CourseCard from "./CourseCard";
import Schedule from "./Schedule";
import { Grid } from "@mui/material";
import { StyledGrid } from "../styles/StyledComponents";
import { useEffect, useState } from "react";
import { IsTimeConflict } from "../utilities/timeconflict";

function CourseList({ courses }) {
  const [selectedCourseList, setSelectedCourseList] = useState([]);
  const [courseTimeConflicts, setCourseTimeConflicts] = useState([]);

  const handleCourseCardClick = (course) => {
    if (courseTimeConflicts[course.number]) return;

    if (selectedCourseList.includes(course)) {
      setSelectedCourseList((prevList) => prevList.filter((c) => c !== course));
    } else {
      setSelectedCourseList((prevList) => [...prevList, course]);
    }
  };

  useEffect(() => {
    const courseTimeConflictsTemp = {};
    Object.values(courses).forEach((course) => {
      var courseKey = course.term + " " + course.number;
      courseTimeConflictsTemp[courseKey] = IsTimeConflict(
        course,
        Array.from(selectedCourseList).filter((c) => c !== course)
      );
    });
    setCourseTimeConflicts(courseTimeConflictsTemp);
  }, [selectedCourseList]);

  return (
    <>
      <Schedule selectedCourseList={selectedCourseList} />
      <StyledGrid container rowSpacing={3} columnSpacing={3}>
        {Object.entries(courses).map(([key, value]) => (
          <Grid item key={key}>
            <CourseCard
              course={value}
              courseKey={key}
              isSelected={selectedCourseList.includes(value)}
              isTimeConflict={
                courseTimeConflicts[value.term + " " + value.number]
              }
              onCourseCardClick={handleCourseCardClick}
            />
          </Grid>
        ))}
      </StyledGrid>
    </>
  );
}

export default CourseList;
