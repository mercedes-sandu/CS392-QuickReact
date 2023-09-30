import { 
    StyledModal,
    StyledCoursesModalBox,
    StyledScheduleButton
} from "../styles/StyledComponents";
import { Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const ScheduleModal = ({ open, onClose, selectedCourseList }) => {
    return (
        <StyledModal open={open} onClose={onClose}>
            <StyledCoursesModalBox>
                <Grid container>
                    <Typography variant="h5" component="h2">
                        Courses Selected
                    </Typography>
                    <IconButton onClick={onClose} sx={{ ml: 'auto', mt: 0 }}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
                {selectedCourseList.length === 0 ? (
                    <Typography sx={{ mt: 2 }}>
                        You have not selected any courses yet.
                    </Typography>
                ) : (
                    <>
                        {selectedCourseList.map((course) => (
                            <Typography sx={{ mt: 2 }}>
                                <b>{course.term} CS {course.number}</b> | {course.title} | {course.meets}
                            </Typography>
                        ))}
                    </>
                )}
            </StyledCoursesModalBox>
        </StyledModal>
    );
};

function Schedule ({ selectedCourseList }) {
    const [showModal, setShowModal] = useState(false);
    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <StyledScheduleButton onClick={handleOpen}>
                Schedule
            </StyledScheduleButton>
            {showModal && 
                <ScheduleModal
                    open={showModal}
                    onClose={handleClose}
                    selectedCourseList={selectedCourseList}
                />
            }
        </>
    );
}

export default Schedule;