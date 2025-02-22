import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';

import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import ContactPage from './components/contact/ContactPage';
import Careers from './components/careers/Careers';
import JobDetails from './components/careers/JobDetails';
import AboutUs from './components/aboutUs/AboutUs';
import ProductService from './components/productService/ProductService';
import PreviousWorks from './components/previousWorks/PreviousWorks';
import Blog from './components/blog/Blog';
import BlogDetails from './components/blog/BlogDetails';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/contact' element={<ContactPage></ContactPage>}/>
        <Route path='/career' element={<Careers></Careers>}/>
        <Route path='/about' element={<AboutUs></AboutUs>}/>
        <Route path='/jobDetails/:id' element={<JobDetails></JobDetails>}/>
        <Route path='/products' element={<ProductService></ProductService>}/>
        <Route path='/previous' element={<PreviousWorks></PreviousWorks>}/>
        <Route path='/blog' element={<Blog></Blog>}/>
        <Route path="/blog/:id" element={<BlogDetails></BlogDetails>} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
