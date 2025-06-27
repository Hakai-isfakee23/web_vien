import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home_page/HomePage";
import About from "./pages/About_page/About";
import Services from "./pages/Services_page/Services";
import News from "./pages/News_page/News";

import Admin from "./pages/Admin_page/Admin";
import ManageServices from "./pages/Admin_page/manage_services";
import ManageAbout from "./pages/Admin_page/manage_about";

import MoreNews1 from "./pages/News_page/more_news1";
import MoreNews2 from "./pages/News_page/more_news2";
import MoreNews3 from "./pages/News_page/more_news3";
import MoreNews4 from "./pages/News_page/more_news4";
import MoreNews5 from "./pages/News_page/more_news5";
import MoreNews6 from "./pages/News_page/more_news6";

import SignIn from "./pages/SignIn_page/SignIn";
import SignUp from "./pages/SignUp_page/SignUp";

import Blog from "./pages/Blog_page/Blog";
import MoreBlog1 from "./pages/Blog_page/more_blog1";
import MoreBlog2 from "./pages/Blog_page/more_blog2";

import MoreService1 from "./pages/Services_page/more_service1";
import MoreService2 from "./pages/Services_page/more_service2";
import MoreService3 from "./pages/Services_page/more_service3";

import MoreAnnou1 from "./pages/News_page/more_announce1";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/manage_services" element={<ManageServices />} />
        <Route path="/admin/manage_about" element={<ManageAbout />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/more_blog1" element={<MoreBlog1 />} />
        <Route path="/more_blog2" element={<MoreBlog2 />} />

        <Route path="/more_news1" element={<MoreNews1 />} />
        <Route path="/more_news2" element={<MoreNews2 />} />
        <Route path="/more_news3" element={<MoreNews3 />} />
        <Route path="/more_news4" element={<MoreNews4 />} />
        <Route path="/more_news5" element={<MoreNews5 />} />
        <Route path="/more_news6" element={<MoreNews6 />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/more_service1" element={<MoreService1 />} />
        <Route path="/more_service2" element={<MoreService2 />} />
        <Route path="/more_service3" element={<MoreService3 />} />

        <Route path="/more_announce1" element={<MoreAnnou1 />} />
      </Routes>
    </Router>
  );
};

export default App;
