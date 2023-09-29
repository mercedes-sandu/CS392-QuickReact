import { CardActionArea, CardContent, Divider, Typography } from "@mui/material";
import { StyledCard, StyledCardBox } from "../styles/StyledComponents";

function CourseCard({ course, isSelected, isTimeConflict, onCourseCardClick }) {return (
    <StyledCard
      onClick={() => onCourseCardClick(course)}
      sx={{
        backgroundColor: isTimeConflict ? "#e57373" : isSelected ? "#90caf9" : "#ffffff",
        borderColor: isTimeConflict ? "#d32f2f" : isSelected ? "#42a5f5" : "#cccccc",
      }}
    >
      <CardActionArea disabled={isTimeConflict}>
        <CardContent>
          <Typography 
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: 1 }}
          >
            {course.term} CS {course.number}
          </Typography>
          <StyledCardBox>
            <Typography
            variant="body1"
            color="text.primary"
            sx={{ 
              padding: 1,
              fontSize: "18px",
              lineHeight: "1.75",
            }}
          >
              {course.title}
            </Typography>
          </StyledCardBox>
          <Divider 
            sx={{ 
              background: "#eeeeee",
              borderBottomWidth: "2px",
            }} 
          />
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ 
              padding: 1,
              fontSize: "18px",
            }}
          >
            {course.meets}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

export default CourseCard;
