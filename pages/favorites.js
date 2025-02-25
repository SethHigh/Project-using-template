import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css"; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Favorites</title>
        <meta name="description" content="Find Your Favorite Gifs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
