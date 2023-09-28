 import Sidebar from "../layouts/sidebar"
 import { useParams } from "react-router-dom";
 import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
 export default function Category(){
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const loadProducts = async () => {
        try{
            if (id) {
                const response = await api.get(`${url.PRODUCT.DETAIL}?categoryId=${id}`);
                setProducts(response.data);
              } else {
                console.error("Category ID is undefined");
              }
console.log(products)
        }catch(error){

        }

    }
    useEffect(()=>{
        loadProducts();
    },[id])// chỉ chạy 1 lần sau khi làm xong giao diện
    return(
        <div className="row">
        <div className="col-lg-3 col-md-5">
            <Sidebar/>   
        </div>
        <div className="col-lg-9 col-md-7">
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
        </div>

</div>

    )
            }