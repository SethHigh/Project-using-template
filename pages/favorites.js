import Link from "next/link";
import styles from "../styles/Home.module.css"; 
import { useEffect, useState } from "react";
import { getfavoritedGifs } from "@/backend/Database";
import { useStateContext } from "@/context/StateContext";
import {auth} from '@/backend/Firebase'

//page for looking through favorite gifs
export default function Home() {
  
  const { user } = useStateContext()
  const [favoritedGifs, setFavoritedGifs] = useState([]);

  //fetches favorited gifs
  useEffect(() => {
    if (user) {
      getfavoritedGifs(user.uid).then(setFavoritedGifs);
    }
  }, [user]);


  return (
    <>
      <header className={styles.banner_favorites}>
        <div className={styles.navbar}>
          <Link href="/">
                <button className={styles.button}>Go back</button>
          </Link>
          <h1>Search Favorites</h1>
            <input type="text" id="searchBox" placeholder="Search Favorite GIFs"></input>
            <button id="searchButton" className={styles.button}>Search</button>
            <div id="gifContainer"></div>
          </div>
        </header>

        <div className={styles.gif_container}>
          {favoritedGifs.map((gif, index) => (
          <div key={gif.id || index} className={styles.gifItem}>  
          <img src={gif.url} alt={gif.title} />
        </div>
  ))}
</div>

    </>
  );
}
