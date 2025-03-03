import Link from "next/link";
import styles from "../styles/Home.module.css"; 
import { useEffect, useState } from "react";
import { getfavoritedGifs } from "@/backend/Database";
import { useStateContext } from "@/context/StateContext";
import {auth} from '@/backend/Firebase'

const GIPHY_API_KEY = "JAhp1YKsFoyR9mZ7I02lxYsS1LTCCtqT";

//page for looking through favorite gifs
export default function Home() {
  
  const { user } = useStateContext()
  const [favoritedGifs, setFavoritedGifs] = useState([]);

  //fetches favorited gifs
  useEffect(() => {
    async function fetchFavorites() {
      if (user) {
        const gifIds = await getfavoritedGifs(user.uid);
        
        if (gifIds.length > 0) {
          try {
            const fetchedGifs = await Promise.all(
              gifIds.map(async (gifId) => {
                const response = await fetch(
                  `https://api.giphy.com/v1/gifs/${gifId}?api_key=${GIPHY_API_KEY}`
                );
                const data = await response.json();
                
                if (data.data && data.data.images) {
                  return {
                    id: data.data.id,
                    url: data.data.images.fixed_height.url,
                    title: data.data.title,
                  };
                } else {
                  console.error("Error:", data);
                  return null;
                }
              })
            );

            // Update state with valid GIFs only
            setFavoritedGifs(fetchedGifs.filter(gif => gif !== null));
          } catch (error) {
            console.error("Error:", error);
          }
        }
      }
    }

    fetchFavorites();
  }, [user]);


  return (
    <>
      <header className={styles.banner_favorites}>
          <Link href="/">
                <button className={styles.button}>Go back</button>
          </Link>
          <h1>Browse Favorites</h1>
        </header>

        <div className={styles.gif_container}>
        {favoritedGifs.length > 0 ? (
          favoritedGifs.map((gif) => (
            <div key={gif.id} className={styles.gifItem}>
              <img src={gif.url} alt={gif.title} />
            </div>
          ))
        ) : (
          <p>No favorite GIFs found.</p>
        )}
      </div>

    </>
  );
}
