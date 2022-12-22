import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blog from './pages/blog';
import Support from './pages/support';
import Gallery from './pages/gallery';
import Team from './pages/team';
import Projects from './pages/projects';
import AboutSingle from './pages/about/aboutDetailCard';
import BlogDetails from './pages/blogs/BlogDetails';
import { useEffect, useState } from 'react';
import {AllBlogs} from "./context/UseManageBlogs.js"
import sanityClient from './sanityClient';
import SupportForm from './pages/support/supportForm';


function App() {
  const [allBlogPosts, setAllBlogPosts]=useState()
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"&&(*[_type == "category"&&title=="blog"][0]._id in categories[]._ref)]{
        title,
        slug,
        "author": author->name,
        "date":publishedAt,
        "body":body[].children[].text,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllBlogPosts(data))
      .catch(console.error);
  }, []);
  return (
    <BrowserRouter>
    <AllBlogs.Provider value={{allBlogPosts, setAllBlogPosts}}>
      <Routes>
        <Route index element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/about/:aboutItem" element={<AboutSingle />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/support" element={<Support />} />
        <Route path="/support/:formId" element={<SupportForm />} />
      </Routes>
      </AllBlogs.Provider>
    </BrowserRouter>
  );
}

export default App;
