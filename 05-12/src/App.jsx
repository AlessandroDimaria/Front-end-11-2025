import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

// App.jsx è il contenitore dell'intera UI
export default function App() {
  return (
    <>
      {/* 🔝 Navbar sempre visibile */}
      <Navbar />

      {/* 🔀 Mappa di tutte le rotte */}
      <AppRouter />
    </>
  );
}
