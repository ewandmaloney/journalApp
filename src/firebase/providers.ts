import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      displayName,
      email,
      photoURL,
      uid,
      errorMessage: null,
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      error
    };
  }
};
