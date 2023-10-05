import { Divider, Grid, IconButton, Typography } from "@mui/material";
import { StyledCard, StyledCardContent } from "../styles/StyledComponents";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import EditForm from "./EditForm";

function CourseCard({
  course,
  courseKey,
  isSelected,
  isTimeConflict,
  onCourseCardClick,
  profile,
}) {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <StyledCard
        onClick={() => onCourseCardClick(course)}
        sx={{
          backgroundColor: isTimeConflict
            ? "#e57373"
            : isSelected
            ? "#90caf9"
            : "#ffffff",
          borderColor: isTimeConflict
            ? "#d32f2f"
            : isSelected
            ? "#42a5f5"
            : "#cccccc",
          cursor: isTimeConflict ? "default" : "pointer",
          "&:hover": {
            backgroundColor: isTimeConflict
              ? "#e57373"
              : isSelected
              ? "#90caf9"
              : "#f5f5f5",
          },
        }}
      >
        <StyledCardContent>
          <div>
            <Grid container>
              <Grid item xs={10}>
                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                  {course.term} CS {course.number}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                {profile.isAdmin && (
                  <IconButton
                    sx={{
                      ml: "auto",
                      mt: 0,
                      width: "40px",
                      height: "40px",
                    }}
                    onMouseDown={(event) => event.stopPropagation()}
                    onClick={(event) => {
                      event.stopPropagation();
                      event.preventDefault();
                      handleOpen();
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
            <Typography variant="h6">{course.title}</Typography>
          </div>
          <div>
            <Divider
              sx={{
                background: "#eeeeee",
                borderBottomWidth: "2px",
              }}
            />
            <Typography variant="body1" sx={{ mt: 2 }}>
              {course.meets}
            </Typography>
          </div>
        </StyledCardContent>
      </StyledCard>
      {showModal && (
        <EditForm
          open={showModal}
          onClose={handleClose}
          course={course}
          courseKey={courseKey}
          uid={profile.user.uid}
        />
      )}
    </>
  );
}

export default CourseCard;
