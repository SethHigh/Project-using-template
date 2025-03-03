export default async function handler(req, res) {
    const { query } = req.query;
  
    try {
      const response = await fetch(
        `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Error" });
    }
  }