
import Link from "next/link";
import styles from "../styles/Home.module.css"; 

//page for looking through favorite gifs
export default function Home() {
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
    </>
  );
}
