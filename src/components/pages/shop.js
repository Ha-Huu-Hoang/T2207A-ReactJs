import api from "../../services/api";
import url from "../../services/url";
import Sidebar from "../layouts/sidebar"
import { useState ,useEffect} from "react"
function Shop(){
    const [products,setProduct]= useState([]);
    const loadProducts = async ()=>{
        try{
            const rs = await api.get(url.PRODUCT.LIST);
            const setlimited = rs.data.slice(0,12);
            setProduct(setlimited);
        }catch(error){

        }
    }
    useEffect(()=>{
       loadProducts();
    },[])
        
    return (
        <div className="row">
                <div className="col-lg-3 col-md-5">
                    <Sidebar/>   
                </div>
                <div className="col-lg-9 col-md-7">
                {/* <div className="product__discount">
                        <div className="section-title product__discount__title">
                            <h2>Sale Off</h2>
                        </div>
                        <div className="row">
                            <div className="product__discount__slider owl-carousel">
                                <div className="col-lg-4">
                                    <div className="product__discount__item">
                                        <div className="product__discount__item__pic set-bg"
                                           style={{backgroundImage:"url(img/product/discount/pd-1.jpg)"}}>
                                            <div className="product__discount__percent">-20%</div>
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__discount__item__text">
                                            <span>Dried Fruit</span>
                                            <h5><a href="#">Raisin’n’nuts</a></h5>
                                            <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product__discount__item">
                                        <div className="product__discount__item__pic set-bg"
                                            style={{backgroundImage:"url(img/product/discount/pd-2.jpg)"}}>
                                            <div className="product__discount__percent">-20%</div>
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__discount__item__text">
                                            <span>Vegetables</span>
                                            <h5><a href="#">Vegetables’package</a></h5>
                                            <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product__discount__item">
                                        <div className="product__discount__item__pic set-bg"
                                          style={{backgroundImage:"url(img/product/discount/pd-3.jpg)"}}>
                                            <div className="product__discount__percent">-20%</div>
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__discount__item__text">
                                            <span>Dried Fruit</span>
                                            <h5><a href="#">Mixed Fruitss</a></h5>
                                            <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product__discount__item">
                                        <div className="product__discount__item__pic set-bg"
                                            style={{backgroundImage:"url(img/product/discount/pd-4.jpg)"}}>
                                            <div className="product__discount__percent">-20%</div>
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__discount__item__text">
                                            <span>Dried Fruit</span>
                                            <h5><a href="#">Raisin’n’nuts</a></h5>
                                            <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product__discount__item">
                                        <div className="product__discount__item__pic set-bg"
                                            style={{backgroundImage:"url(img/product/discount/pd-5.jpg)"}}>
                                            <div className="product__discount__percent">-20%</div>
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__discount__item__text">
                                            <span>Dried Fruit</span>
                                            <h5><a href="#">Raisin’n’nuts</a></h5>
                                            <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product__discount__item">
                                        <div className="product__discount__item__pic set-bg"
                                           style={{backgroundImage:"url(img/product/discount/pd-6.jpg)"}}>
                                            <div className="product__discount__percent">-20%</div>
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__discount__item__text">
                                            <span>Dried Fruit</span>
                                            <h5><a href="#">Raisin’n’nuts</a></h5>
                                            <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="filter__item">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                                <div className="filter__sort">
                                    <span>Sort By</span>
                                    <select  >
                                        <option value="0">Default</option>
                                        <option value="0">Default</option>
                                    </select>
                                    {/* <div className="nice-select" tabindex="0"><span className="current">Default</span><ul className="list"><li data-value="0" className="option selected">Default</li><li data-value="0" className="option">Default</li></ul></div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="filter__found">
                                    <h6><span>16</span> Products found</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-3">
                                <div className="filter__option">
                                    <span className="icon_grid-2x2"></span>
                                    <span className="icon_ul"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                              products.map((product,i) =>(
                        <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item" key={i}>
                                <div className="product__item__pic set-bg"  style={{backgroundImage: `url(img/product/${product.thumbnai})`}}>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">{product.name}</a></h6>
                                    <h5>${product.price}</h5>
                                </div>
                            </div>
                           
                        </div>
                         ))
                        }
                       
                    </div>
                    <div className="product__pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>

        </div>
    )
}
export default Shop;