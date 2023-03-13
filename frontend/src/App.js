import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Career from "./pages/Career";
import Services from "./pages/Services";
import AdminHome from "./pages/AdminHome";
import AddProject from "./pages/AddProjectPage";
import ViewAllProjects from "./pages/AdminProjectPage";
import AddGallery from "./pages/AdminAddGalleryPage";
import AdminGalleryPage from "./pages/AdminGalleryHomePages";
import AdminCareers from "./pages/AdminCareers";
import LoginPage from "./pages/AdminLoginPage";
import ProjectPage from "./pages/Projects";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/projects" element={<ProjectPage />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/careers" element={<Career />}></Route>
        <Route path="/solutions" element={<Services />}></Route>
        <Route path="/admin-login" element={<LoginPage />}></Route>
        <Route path="/admin-home" element={<AdminHome />}></Route>
        <Route path="/add-project" element={<AddProject />}></Route>
        <Route path="/view-all-projects" element={<ViewAllProjects />}></Route>
        <Route path="/add-gallery-image" element={<AddGallery />}></Route>
        <Route path="/view-all-gallery" element={<AdminGalleryPage />}></Route>
        <Route path="/view-all-careers" element={<AdminCareers />}></Route>
      </Routes>
    </div>
  );
}

export default App;
