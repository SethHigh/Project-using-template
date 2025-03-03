//uses duckduckgo for autofilling search bar
export default async function handler(req, res) {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: "No search query provided" });

  try {
    const response = await fetch(
      `https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      }
    );

    if (!response.ok) throw new Error("Failed to fetch");

    const data = await response.json();
    console.log("DuckDuckGo Response:", data);

    const suggestions = data.length ? data.map((item) => item.phrase || item) : [];

    res.status(200).json(suggestions);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}