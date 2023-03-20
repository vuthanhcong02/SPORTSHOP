import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import routeConfig from "../../../config/routes";
const cx = classNames.bind(styles)
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-footer')}>
                <div>
                    <h4>Đăng kí nhận bản tin</h4>
                    <p>Nhận tất cả các thông tin mới nhất về sự kiện,<br/>bán hàng và ưu đãi Đăng kí nhận bản tin mới nhất<br/> ngày hôm nay</p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <input type='text' placeholder="Enter your Email"/>
                    <button className={cx('btn')}>ĐĂNG KÍ</button>
                </div>
                <div className={cx('icon')}>
                   <a href="https://www.facebook.com/VT.Coong090502">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </a>
                   <a href="https://www.facebook.com/VT.Coong090502">
                        <FontAwesomeIcon icon={faEnvelope}/>
                   </a>
                   <a href="https://www.facebook.com/VT.Coong090502">
                        <FontAwesomeIcon icon={faPhone}/>
                   </a>
                   <a href="https://www.facebook.com/VT.Coong090502">
                        <FontAwesomeIcon icon={faInstagram}/>
                   </a>
                </div>
            </div>
            <div className={cx('body-footer')}>
              <div className="d-flex align-items-start justify-content-around row pb-5">
                   <div className="d-flex flex-column col-4">
                        <h5>Liên hệ với chúng tôi</h5>
                        <div className="d-flex flex-column align-items-start justify-content-center">
                            <span>Địa chỉ</span>
                            <p>190 Nguyễn Trãi,Thanh Xuân,Hà Nội</p>
                        </div>
                        <div className="d-flex flex-column align-items-start justify-content-center ">
                            <span>Phone</span>
                            <p>0971765824</p>
                        </div>
                        <div className="d-flex flex-column align-items-start justify-content-center">
                            <span>Email</span>
                            <p>congvtc02@gmail.com</p>
                        </div>
                        <div className="d-flex flex-column align-items-start justify-content-center">
                            <span>Giờ làm việc</span>
                            <p>Mon - Sun / 9:00AM - 8:00PM</p>
                        </div>
                   </div >
                   <div className="d-flex flex-column col-3">
                        <h5>Tiện ích</h5>
                        <div className="d-flex flex-column">
                            <Link className={cx('menu')} to={routeConfig.home}>Home</Link>
                        </div>
                        <div className="d-flex flex-column">
                            <Link className={cx('menu')} to={routeConfig.product}>Product</Link>
                        </div>
                        <div className="d-flex flex-column">
                            <Link className={cx('menu')} to={routeConfig.about}>About</Link>
                        </div>
                        <div className="d-flex flex-column">
                            <Link  className={cx('menu')}to={routeConfig.contact}>Contact</Link>
                        </div>
                   </div >
                    <div className="d-flex flex-column col-3">
                        <h5>Chính sách</h5>
                        <div className="d-flex flex-column">
                            <Link className={cx('pay')}>Hướng dẫn thanh toán</Link>
                        </div>
                        <div className="d-flex flex-column">
                            <Link className={cx('pay')}>Chính sách đổi trả hàng</Link>
                        </div>
                        <div className="d-flex flex-column">
                            <Link className={cx('pay')}>Chính sách giao hàng</Link>
                        </div>
                    </div >
              </div>
            </div>  
        </div>
    );
}

export default Footer;