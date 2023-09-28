import { Box, Card, Grid, styled } from "@mui/material";

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
}));

export const StyledCardBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "175px",
    alignItems: "flex-start",
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