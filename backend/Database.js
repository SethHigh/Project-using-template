import { doc, setDoc, getDoc, getDocs, collection, query, where, addDoc } from "firebase/firestore"
import { database } from "./Firebase"
import { auth } from "./Firebase";

// save gif and user to database
export const favoritingGif = async (gifId) => {
  const user = auth.currentUser;

  const userGifRef = collection(database, "users", user.uid, "savedGifs");

  try {
    await addDoc(userGifRef, { gifId, timestamp: new Date() });
    console.log("GIF saved successfully!");
  } catch (error) {
    console.error("Error saving GIF:", error);
  }
};