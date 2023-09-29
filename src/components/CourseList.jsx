import CourseCard from './CourseCard';
import Schedule from './Schedule';
import { Grid } from '@mui/material';
import { StyledGrid } from '../styles/StyledComponents';
import { useState } from 'react';

function CourseList({ courses }) {
    const [selectedCourseList, setSelectedCourseList] = useState([]);

    const handleCourseCardClick = (course) => {
        if (selectedCourseList.includes(course)) {
            setSelectedCourseList((prevList) =>
                prevList.filter((c) => c !== course)
        );
        } else {
            setSelectedCourseList((prevList) => [...prevList, course]);
        }
    };

    return (
        <>
            <Schedule selectedCourseList={selectedCourseList} />
            <StyledGrid container rowSpacing={3} columnSpacing={3}>
                {Object.entries(courses).map(([key, value]) => (
                    <Grid item key={key}>
                        <CourseCard
                            course={value}
                            isSelected={selectedCourseList.includes(value)}
                            onCourseCardClick={handleCourseCardClick}
                        />
                    </Grid>
                ))}
            </StyledGrid>
        </>
    );
};

export default CourseList;