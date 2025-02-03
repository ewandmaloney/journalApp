import { StarOutline } from "@mui/icons-material";
import { Grid2 as Grid, Typography } from "@mui/material";
import React from "react";

const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 5,
      }}
    >
      <Grid>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid>
        <Typography variant="h5" sx={{ color: "white" }}>
          Selecciona o crea una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NothingSelectedView;
