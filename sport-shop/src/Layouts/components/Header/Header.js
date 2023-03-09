import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import routeConfig from '../../../config/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect} from 'react';
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
                <button>Login</button>
                <button>Sign-up</button>
                <div className={cx('btn-cart')}>
                    <Link to={routeConfig.cart}>
                        <button>
                            Cart
                            <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} />
                            <sup>1</sup>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
