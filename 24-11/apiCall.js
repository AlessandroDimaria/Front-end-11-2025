export async function apiCall(endpoint) {
const API_BASE_URL = "https://jsonplaceholder.typicode.com";
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API Success", `Dati ricevuti da ${endpoint}`);
    return data;
  } catch (error) {
    console.log("API Error", `Errore per ${endpoint}: ${error.message}`);
    return null;
  }
}
