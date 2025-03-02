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
import { favoritingGif } from '@/backend/Database'

//creates home page
export default function Home() {
  const { user } = useStateContext()
  const [searchQuery, setSearchQuery] = useState('')
  const [gifs, setGifs] = useState([])
  const [offset, setOffset] = useState(0)
  const limit = 4;



  //function to get gifs from Giphy API
  const handleSearch = async (newOffset = 0) => {
    if (!searchQuery) return;

    const results = await fetchGifs(searchQuery, newOffset, limit);
    setGifs(results);
    console.log(newOffset);
    setOffset(newOffset);
    console.log(offset);
  };

  //function to sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth)
      console.log('User signed out')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  //calls upon favoriting gif
  const handleFavoritingGif = async (gifId) => {
    await favoritingGif(gifId); // Save GIF to Firestore
  };

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

      <div className={styles.gif_container}>
        {gifs.map((gif) => (
          <div key={gif.id} className={styles.gifItem}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
        {user && (
          <button 
            onClick={() => handleFavoritingGif(gif.id)} 
            className={styles.save_button}
          >
            favorite GIF
          </button>
        )}
      </div>
    ))}
  </div>


        <div className={styles.browse_buttons}>
          <button 
            onClick={() => handleSearch(Number(offset) - Number(limit))} 
            className={styles.button} 
            disabled={offset === 0}
          >
            ◀ Previous
          </button>
          <button 
            onClick={() => handleSearch(Number(offset) + Number(limit) || 4)} 
            className={styles.button}
          >
            Next ▶
          </button>
        </div>


      </div>
    </>
  )
}
