import { auth } from "./Firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";


//checks if email is in use already
export async function isEmailInUse(email) {
    const auth = getAuth();
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    return signInMethods.length > 0;
}
//calls upon createuserwithemailandpassword to create a new user
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
  //calls upon signinwithemailandpassword to check with firebase for login
  export async function login(email, password, setUser) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return { user: userCredential.user, error: null } // Return user instead of setting state
      } catch (error) {
        return { user: null, error: error.message }
      }
  }