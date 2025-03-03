import { doc, setDoc, getDoc, getDocs, collection, query, where, addDoc } from "firebase/firestore"
import { database } from "./Firebase"
import { auth } from "./Firebase";

// save gif and user to database
export const favoritingGif = async (gifId) => {
  const user = auth.currentUser;

  const userGifRef = collection(database, "users", user.uid, "favoritedGifs");

  try {
    await addDoc(userGifRef, { gifId, timestamp: new Date() });
    console.log("GIF favorited successfully!");
  } catch (error) {
    console.error("Error: ", error);
  }
};

//pull favorited Gifs from database
export const getfavoritedGifs = async () => {
    const user = auth.currentUser;
  
    const userGifRef = collection(database, "users", user.uid, "favoritedGifs");
  
    try {
      const querySnapshot = await getDocs(userGifRef);
      const favoritedGifs = querySnapshot.docs.map(doc => doc.data().gifId);
      console.log("favorited:", favoritedGifs);
      return favoritedGifs;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };