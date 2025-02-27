import Hero from "@/components/LandingPage/Hero"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/LandingPage/Footer"
import Link from "next/link";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <>
      <div>
      <header className={styles.banner}>
        <div className={styles.navbar}>
          <Link href="auth/signup">
                <button className={styles.button}>sign up</button>
          </Link>
          <Link href="auth/login">
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
