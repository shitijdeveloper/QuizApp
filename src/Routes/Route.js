import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Contact from "../Contact/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
