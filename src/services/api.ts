const API_URL = "http://localhost:1337/api";

export async function fetchAPI(endpoint: string) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`);
    console.log(`Fetching: ${API_URL}${endpoint}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Fetch API error:", error);
    return null;
  }
}