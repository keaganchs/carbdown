// import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; 

import Contact from "./pages/Contact";
import Cip from "./pages/CIP";

import Projects from "./pages/Projects";
import LabBlog from './pages/blogs/LabBlog';
import OutreachBlog from './pages/blogs/OutreachBlog';
import SensorBlog from './pages/blogs/SensorBlog';
import TwinBlog from './pages/blogs/TwinBlog';

import './App.css';


export default function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />}>
            <Route path="lab" element={<LabBlog />}/>
            <Route path="outreach" element={<OutreachBlog />}/>
            <Route path="sensor" element={<SensorBlog />}/>
            <Route path="twin" element={<TwinBlog />}/>
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="cip" element={<Cip />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

// // Create a root.
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render();