import { Box, Button, Card, CardContent, Grid, IconButton, Modal, styled } from "@mui/material";

export const StyledGrid = styled(Grid)(({ theme }) => ({
    direction: "row",
    justifyContent: "center",
    alignItems: "flex-start",
}));

export const StyledCard = styled(Card)(({ theme }) => ({
    width: "250px",
    height: "300px",
    border: "2px solid #cccccc",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    transition: "background-color 0.2s ease-in-out",
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: "100%",
}));

export const StyledTermSelectorBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    border: "2px solid #cccccc",
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
}));

export const StyledScheduleButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#0288d1",
    color: "white",
    "&:hover": {
        backgroundColor: "#29b6f6",
    },
    position: "absolute",
    top: 0,
    right: 0,
    margin: "50px",
}));

export const StyledModal = styled(Modal)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const StyledCoursesModalBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "auto",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    border: "2px solid #cccccc",
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
}));

export const StyledEditFormModalBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "30%",
    height: "auto",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    border: "2px solid #cccccc",
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
}));

export const StyledDaysBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    width: "99%",
    mb: 1,
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "8px",
}));

export const StyledDayIconButton = styled(IconButton)(({ theme }) => ({
    width: "40px",
    height: "40px",
}));