//searches for gifs using the Giphy API
export async function fetchGifs(query) {
    const API_KEY = "JAhp1YKsFoyR9mZ7I02lxYsS1LTCCtqT"
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10`
  
    try {
      const response = await fetch(URL)
      if (!response.ok) throw new Error('Failed to fetch GIFs')
      const data = await response.json()
      return data.data
    } catch (error) {
      console.error('Error fetching GIFs:', error)
      return []
    }
  }