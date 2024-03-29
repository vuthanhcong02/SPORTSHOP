import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import routeConfig from '../../../config/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useContext} from 'react';
import { CartContext } from '../../DefaultLayout/DefaultLayout';
import Tippy from '@tippyjs/react/headless';
const cx = classNames.bind(styles);

function Header() {
    const location = useLocation()
    //hook useLocation để lấy thông tin về URL hiện tại.
    const [activePage, setActivePage] = useState(()=>{
        const activeCurPage = localStorage.getItem('activePage')

        return activeCurPage ? activeCurPage : 'home' 
    });
    const handleActivePage = (page) => {
        setActivePage(page);
        localStorage.setItem('activePage',page)
    };
    useEffect(() => {
        const activeCurPage = localStorage.getItem('activePage')
        if (activeCurPage) {
            setActivePage(activeCurPage);
        }
        if(location.pathname===routeConfig.cart){
            setActivePage('product')
        }
    }, [location.pathname]);
    const {cartItems,total ,deleteProduct}=useContext(CartContext)
    console.log("cart: ",cartItems)
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title-shop')}>Store</div>
            <ul className={cx('nav')}>
                <Link
                    className={cx('menu', { active: activePage === 'home' })}
                    to={routeConfig.home}
                    onClick={() => handleActivePage('home')}
                >
                    Home
                </Link>
                <Link
                    className={cx('menu', { active: activePage === 'product' })}
                    to={routeConfig.product}
                    onClick={() => handleActivePage('product')}
                >
                    Product
                </Link>
                <Link
                    className={cx('menu', { active: activePage === 'about' })}
                    to={routeConfig.about}
                    onClick={() => handleActivePage('about')}
                >
                    About
                </Link>
                <Link
                    className={cx('menu', { active: activePage === 'contact' })}
                    to={routeConfig.contact}
                    onClick={() => handleActivePage('contact')}
                >
                    Contact
                </Link>
            </ul>
            <div className={cx('btn-action')}>
                <button className="btn btn-outline-danger">Login</button>
                <button className="btn btn-outline-danger">Sign-up</button>
               {
                cartItems.length>0&&
                <Tippy  interactive={true} placement='bottom-end' appendTo={document.body}
                render={attrs => (
                   <div className={cx('box')} tabIndex="-1" {...attrs}>
                       <div className="cart-tippy row p-3 d-flex flex-column justify-content-between">
                          {cartItems.map((item)=>(
                           <div key={item.id} >
                              <div className="d-flex align-items-center justify-content-between">
                                   <div className="col-8">
                                       <span>{item.name}</span>
                                       <div className="d-flex justify-content-evenly align-items-center">
                                           <span>{item.quantity}</span>
                                           <span>x</span>
                                           <span>{item.price}</span>
                                       </div>
                                   </div>
                                   <div className="col-3">
                                       <img className="img-fluid" src={item.image} alt=""/>
                                   </div>
                                   <button  className={cx('btn-close')} onClick={()=>deleteProduct(item)}><FontAwesomeIcon icon={faClose}/></button>
                              </div>
                              <hr/>
                           </div>
                          ))}
                        <div className=" row d-flex align-items-center mt-2">
                                   <span className="col">TỔNG CỘNG</span>
                                   <span className="col">{total} VND</span>
                        </div>
                        <div className=" d-flex align-items-center mt-3 justify-content-evenly">
                                   <Link  to={routeConfig.cart} className=" btn btn-outline-danger">Giỏ hàng</Link>
                                   <button className=" btn btn-outline-danger">Đặt hàng</button>
                        </div>
                       </div>
                   </div>
                 )}
               >
                
                   <div className={cx('btn-cart')}>
                           <Link to={routeConfig.cart}>
                               <button className="btn btn-outline-danger">
                                   Cart
                                   <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} />
                                   <sup>{cartItems.length}</sup>
                               </button>
                           </Link>
                   </div>
               </Tippy>

               }
            </div>
        </div>
    );
}

export default Header;
