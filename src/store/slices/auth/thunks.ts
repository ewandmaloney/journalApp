import { checkingCredentials, login, logout } from "./authSlice";
import { signInWithGoogle } from "../../../firebase/providers";

export const checkingAuthentication = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(checkingCredentials());
  };
};

export const startOnGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    const { ok, error, ...userData } = result;

    if (ok) {
      dispatch(
        login({
          user: userData,
          logged: true,
          status: "authenticated",
          errorMessage: null,
        })
      );
    } else {
      dispatch(
        logout({
          user: [],
          logged: false,
          status: "not-authenticated",
          errorMessage: error,
        })
      );
    }
  };
};
