import { CardContent, Divider, Typography } from "@mui/material";
import { StyledCard, StyledCardBox } from "../styles/StyledComponents";

function CourseCard({ course }) {
  return (
    <StyledCard>
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
    </StyledCard>
  );
}

export default CourseCard;
