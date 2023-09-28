import React from 'react';
import { useLocation } from 'react-router-dom';//Sử dụng useLocation hook từ React Router để lấy thông tin về trang hiện tại.
import { NavLink } from 'react-router-dom';
function Breadcrunds(){
    const location = useLocation();

    let pageTitle = 'Organi Shop';

    // Thay đổi nội dung pageTitle dựa trên trang hiện tại
    switch (location.pathname) {
        case '/blog':
            pageTitle = 'Blog';
            break;
        case '/contact':
            pageTitle = 'Contact Us';
            break;
        // Thêm các trường hợp khác tùy theo nhu cầu
        default:
            break;
    }

    return(
        <section className="breadcrumb-section set-bg" style={{backgroundImage:"url(img/breadcrumb.jpg)"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>{pageTitle}</h2>
                        <div className="breadcrumb__option">
                        <NavLink to="/">Home</NavLink>
                            <span>{pageTitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )

}
export default Breadcrunds