import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";
export default function Hero(){
    const [category,setCategory] = useState([]);
    const [menuHidden, setMenuhidden] = useState(false);
    
    const location = useLocation();
    useEffect(()=>{
        
        if (location.pathname === '/') {
            setMenuhidden(false); // Nếu là trang chủ, hiển thị menu mặc định
          } else {
            setMenuhidden(true); // Nếu không phải trang chủ, ẩn menu mặc định
          }

    },[location.pathname]);

    const handleToggleMenu = () => {
        
        setMenuhidden(!menuHidden);
    };
   
    const  loadCategories = async()=>{
        try{

            const rs = await api.get(url.CATEGORY.LIST)
            setCategory(rs.data);
        }catch(error){

        }
       
    }
    useEffect(()=>{

        loadCategories();
    },[])// chỉ chạy 1 lần sau khi làm xong giao diện
    return (
        <section className="hero hero-normal">
        <div className="container">
            <div className="row">
                <div className="col-lg-3" >  
                    <div className="hero__categories"   onClick={handleToggleMenu}>
                        <div className="hero__categories__all">
                            <i className="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul id="menu"  style={{ display: menuHidden ? "none" : "block" }}>
                            {category.map((item, index) => (
                            <li key={index}>
                                <a href="#">{item.name}</a>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="#">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?"/>
                                <button type="submit" className="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                     {location.pathname === '/' &&
                     <div class="hero__item set-bg"  style={{backgroundImage:"url(img/hero/banner.jpg)"}}>
                     <div class="hero__text">
                         <span>FRUIT FRESH</span>
                         <h2>Vegetable <br />100% Organic</h2>
                         <p>Free Pickup and Delivery Available</p>
                         <a href="#" class="primary-btn">SHOP NOW</a>
                     </div>
                 </div>
                
                     
                     } 
                    
                   
                </div>
            </div>
        </div>
    </section>
    )
}