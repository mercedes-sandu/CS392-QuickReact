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
}));