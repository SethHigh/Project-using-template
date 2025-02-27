import { auth } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";



export async function isEmailInUse(email) {
    const auth = getAuth();
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    return signInMethods.length > 0;
}

export async function register(email, password, setUser) {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user);
      setUser(user);
      return user;
    } catch (error) {
      console.error("Error creating user:", error.message);
      throw error;
    }
  }

  