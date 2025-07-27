import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Contact from "../Contact/Contact";
import About from "../Components/About";
import Layout from "../Layout/layout"; // Import the layout
import Login from "../Login/Login";
import Register from "../Register/Register";
import WhyUs from "../Components/WhyUs";
import QuizStart from "../Quiz/Quiz";
import QuizQuestions from "../Quiz/QuizQuestion";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="whyus" element={<WhyUs />} />
        <Route path="/quiz" element={<QuizStart />} />
        <Route path="/quiz/start" element={<QuizQuestions />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
