import Hero from "@/components/LandingPage/Hero"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/LandingPage/Footer"
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>Gif Collector</title>
        <meta name="description" content="Find Yourself Some Gifs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <header className={styles.banner}>
        <div className={styles.navbar}>
          <Link href="/favorites">
                <button className={styles.button}>Favorites</button>
          </Link>
          <Link href="/login">
                <button className={styles.button}>Login</button>
          </Link>
          <h1>Search Gifs</h1>
          <input type="text" id="searchBox" placeholder="Search for GIFs"></input>
          <button id="searchButton" className={styles.button}>Search</button>
          <div id="gifContainer"></div>
        </div>
      </header>
      </div>
    </>
  )
}
