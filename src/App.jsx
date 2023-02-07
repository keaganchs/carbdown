// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; 
import Cip from "./pages/CIP";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Layout />}>
          <Route index          element={<Home />} />
          <Route path="blog"    element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cip"     element={<Cip />} />
          <Route path="*"       element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// // Create a root.
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render();