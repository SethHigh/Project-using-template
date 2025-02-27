import Hero from "@/components/LandingPage/Hero"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/LandingPage/Footer"
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useStateContext } from '@/context/StateContext'
import { auth } from '@/backend/Firebase'
import { signOut } from 'firebase/auth'
import { fetchGifs } from '@/backend/Giphy'
import { useState } from 'react'

//creates home page
export default function Home() {
  const { user } = useStateContext()
  const [searchQuery, setSearchQuerys] = useState('')
  const [gifs, setGifs] = useState([])

  const handleSearch = async () => {
    if (!searchQuery) return
    const results = await fetchGifs(searchQuery)
    setGifs(results)
  }

  //function to sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth)
      console.log('User signed out')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }
  //return of website design
  return (
    <>
      <div>
      <header className={styles.banner}>
        <div className={styles.navbar}>
        {user ? (
              <>
                <Link href="/favorites">
                  <button className={styles.button}>Favorites</button>
                </Link>
                <button onClick={handleSignOut} className={styles.button}>Sign Out</button>
              </>
            ) : (
              <>
              <Link href="auth/signup">
                <button className={styles.button}>sign up</button>
              </Link>
              <Link href="auth/login">
                <button className={styles.button}>Login</button>
              </Link>
            </>
          )}
          <h1>Search Gifs</h1>
          <input 
              type="text" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for GIFs"
            />
            <button onClick={handleSearch} className={styles.button}>Search</button>
        </div>
      </header>

        <div className={styles.gifContainer}>
            {gifs.map((gif) => (
              <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
            ))}
        </div>

      </div>
    </>
  )
}
