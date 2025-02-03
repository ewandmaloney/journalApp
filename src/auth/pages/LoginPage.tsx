import { Google } from "@mui/icons-material";
import {
  Button,
  Grid2 as Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid size={12} sx={{ mt: 2 }}>
            <TextField
              type="email"
              fullWidth
              label="Correo"
              placeholder="correo@gmail.com"
            />
          </Grid>
          <Grid size={12} sx={{ mt: 2 }}>
            <TextField
              type="password"
              fullWidth
              label="Password"
              placeholder="Password"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid size={{ sm: 12, md: 6 }}>
            <Button fullWidth variant="contained" color="primary">
              Login
            </Button>
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <Button fullWidth variant="contained" color="primary">
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} to="/auth/register">
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
