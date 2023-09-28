//statefull
import './App.css';
import Category from './components/pages/category';
import Product from './components/views/product';
import Header from './components/layouts/header';
import Breadcrunds from './components/layouts/breadcrumbs';
import Hero from './components/layouts/hero';
import Sidebar from './components/layouts/sidebar';
import Footer from './components/layouts/footer';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/pages/home';
import Shop from './components/pages/shop';
import Blog from './components/pages/blog';
import Contact from './components/pages/contact';
import { useLocation } from 'react-router-dom';
import Default from './components/pages/detail';

function App() {
  const product1={
    name: "IPhone 15 PRM",
    price: "2000"
  }
  const product2={
    name: "IPhone 14 PRM",
    price: "1900"
  }
  const cat1={
    name: "Laptops"
  }
  const location =useLocation();

  return (
    <div className="App">
     <Header />
     <Hero />
     {location.pathname !== '/' && <Breadcrunds/>}
     <section className="product spad">
        <div className="container">
           
               <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/product/:id" element={<Default/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/category/:id" element={<Category/>} />
                <Route path="/contact" element={<Contact/>} />
               </Routes>
           
        </div>
    </section>
    <Footer/>
    </div>
  );
}

export default App;
