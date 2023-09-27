import CourseCard from './CourseCard';
import { Grid } from '@mui/material';
import { StyledGrid } from '../styles/StyledComponents';

function CourseList({ courses }) {
    return (
        <StyledGrid container rowSpacing={3} columnSpacing={3}>
            {Object.values(courses).map(course => (
                <Grid item>
                    <CourseCard key={course.id} course={course} />
                </Grid>
            ))}
        </StyledGrid>
    );
};

export default CourseList;