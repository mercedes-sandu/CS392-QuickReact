import CourseCard from './CourseCard';
import { Grid } from '@mui/material';
import { StyledGrid } from '../styles/StyledComponents';
import { useState } from 'react';

function CourseList({ courses }) {
    const [selectedCourseList, setSelectedCourseList] = useState([]);

    const handleCourseCardClick = (courseId) => {
        if (selectedCourseList.includes(courseId)) {
            setSelectedCourseList((prevList) =>
                prevList.filter((id) => id !== courseId)
        );
        } else {
            setSelectedCourseList((prevList) => [...prevList, courseId]);
        }
    };

    return (
        <StyledGrid container rowSpacing={3} columnSpacing={3}>
            {Object.entries(courses).map(([key, value]) => (
                <Grid item key={key}>
                    <CourseCard
                        course={value}
                        isSelected={selectedCourseList.includes(key)}
                        onCourseCardClick={handleCourseCardClick}
                        courseId={key}
                    />
                </Grid>
            ))}
        </StyledGrid>
    );
};

export default CourseList;