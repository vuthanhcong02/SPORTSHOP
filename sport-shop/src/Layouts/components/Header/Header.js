import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import routeConfig from '../../../config/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Header() {
    const [activePage, setActivePage] = useState('home');
    const handleAvtivePage = (page) => {
        setActivePage(page);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title-shop')}>Sport shop</div>
            <ul className={cx('nav')}>
                <Link
                    className={cx('menu', { active: activePage === 'home' })}
                    to={routeConfig.home}
                    onClick={() => handleAvtivePage('home')}
                >
                    Home
                </Link>
                <Link
                    className={cx('menu', { active: activePage === 'product' })}
                    to={routeConfig.product}
                    onClick={() => handleAvtivePage('product')}
                >
                    Product
                </Link>
                <Link
                    className={cx('menu', { active: activePage === 'about' })}
                    to={routeConfig.about}
                    onClick={() => handleAvtivePage('about')}
                >
                    About
                </Link>
                <Link
                    className={cx('menu', { active: activePage === 'contact' })}
                    to={routeConfig.contact}
                    onClick={() => handleAvtivePage('contact')}
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
                            <sup>0</sup>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
