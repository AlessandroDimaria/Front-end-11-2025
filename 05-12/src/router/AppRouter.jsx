// 1️⃣ Importo i costrutti base: Routes e Route
import { Routes, Route } from "react-router-dom";

// 2️⃣ Importo i componenti-pagina
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import User from "../components/User";
import NotFound from "../components/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      {/* 🏠 Rotta principale ("/") */}
      <Route path="/" element={<Home />} />
      {/* ℹ️ Rotta "user id" */}
      <Route path="/user/:id" element={<User />} />
      {/* ℹ️ Rotta "Chi Siamo" */}
      <Route path="/about" element={<About />} />
      {/* 📞 Rotta "Contatti" */}
      <Route path="/contact" element={<Contact />} />
      {/*Rotta per gestire il caso in cui non sia presente una rotta*/}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
