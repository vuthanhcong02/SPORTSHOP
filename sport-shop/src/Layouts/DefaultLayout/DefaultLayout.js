import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import Header from '../components/Header';
import { useState,createContext } from 'react';
const cx = classNames.bind(styles)
export const CartContext = createContext();
function DefaultLayout({children}) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item) {
      setCartItems(prevItems => [...prevItems, item]);
    }
    // console.log(children)
    return (  
        <div className={cx('wrapper')}>
           <div className={cx('header')}>
           <CartContext.Provider value={{cartItems}}> 
            <Header/>
           </CartContext.Provider >
           </div>
            <div className={cx('content')}>
               <CartContext.Provider value={{cartItems,addToCart}}>
                 {children}
                 </CartContext.Provider>
            </div>
        </div>
    );
}

export default DefaultLayout;