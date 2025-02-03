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
import { useForm } from "../../hooks/useForm";
import {
  checkingAuthentication,
  startOnGoogleSignIn,
} from "../../store/slices/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useMemo } from "react";

const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  //Solo se ejecuta cuando cambia el status
  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const { email, password, onInputChanged } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkingAuthentication(email, password));
    console.log({ email, password });
  };

  const onGoogleSignIn = () => {
    console.log("Google Sign In");
    dispatch(startOnGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid size={12} sx={{ mt: 2 }}>
            <TextField
              type="email"
              fullWidth
              label="Correo"
              name="email"
              value={email}
              onChange={onInputChanged}
              placeholder="correo@gmail.com"
            />
          </Grid>
          <Grid size={12} sx={{ mt: 2 }}>
            <TextField
              type="password"
              fullWidth
              label="Password"
              name="password"
              value={password}
              onChange={onInputChanged}
              placeholder="Password"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid size={{ sm: 12, md: 6 }}>
            <Button
              disabled={isAuthenticating}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <Button
              disabled={isAuthenticating}
              onClick={onGoogleSignIn}
              fullWidth
              variant="contained"
              color="primary"
            >
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
