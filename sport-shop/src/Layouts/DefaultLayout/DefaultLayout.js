import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import Header from '../components/Header';
import { useState,createContext } from 'react';
const cx = classNames.bind(styles)
export const CartContext = createContext();
function DefaultLayout({children}) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart=(newProduct)=> {
    console.log("New:",newProduct)
    const existingItem = cartItems.find(item => item.id === newProduct.id);
    if (existingItem) {
      // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng lên 1
      setCartItems(cartItems.map(product => 
        product.id === newProduct.id ? { ...product, quantity: product.quantity + 1 } : product
      ));
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm mới vào giỏ hàng
      setCartItems([...cartItems, { ...newProduct, quantity: 1 }]);
    }
    }
    const increaseQuantity = (productId)=>{

      const index = cartItems.findIndex((item) => item.id === productId.id);
      if (index !== -1) {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity += 1;
        setCartItems(newCartItems);
      }
    };
    const decreaseQuantity = (productId)=>{

      const index = cartItems.findIndex((item) => item.id === productId.id);
      if (index !== -1) {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity -= 1;
        if(newCartItems[index].quantity===0){
          newCartItems.splice(index,1)
        }
        setCartItems(newCartItems);
      }
    };
    return (  
        <div className={cx('wrapper')}>
           <div className={cx('header')}>
           <CartContext.Provider value={{cartItems}}> 
            <Header/>
           </CartContext.Provider >
           </div>
            <div className={cx('content')}>
               <CartContext.Provider value={{cartItems,addToCart,setCartItems,increaseQuantity,decreaseQuantity}}>
                 {children}
                 </CartContext.Provider>
            </div>
        </div>
    );
}

export default DefaultLayout;