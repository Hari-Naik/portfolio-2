import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <main className="w-screen h-screen bg-[#022c43] overflow-hidden">
      {/* header for mobile */}
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <ToastContainer />
    </main>
  );
};

export default App;
