import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid2 as Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";

const NoteView = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 1 }}
      >
        <Grid>
          <Typography fontSize={39} fontWeight="light">
            28 Agosto, 2025
          </Typography>
        </Grid>
        <Grid>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: "none" }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que paso hoy?"
          label="Titulo"
          sx={{ border: "none", mt: 2 }}
          minRows={5}
        />
      </Grid>

      {/* Galeria de imagenes */}
      <ImageGallery />
    </>
  );
};

export default NoteView;
