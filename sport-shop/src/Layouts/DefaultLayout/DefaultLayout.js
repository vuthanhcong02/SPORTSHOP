import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import Header from '../components/Header';
import { useState,createContext } from 'react';
const cx = classNames.bind(styles)
export const CartContext = createContext();
function DefaultLayout({children}) {
    const [cartItems, setCartItems] = useState([]);
    const [total,setTotal] =useState(0)
    const addToCart=(newProduct)=> {
   
    const existingItem = cartItems.find(item => item.id === newProduct.id);
    if (existingItem) {
      // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng lên 1
      const updatedCartItems = cartItems.map((product) =>
        product.id === newProduct.id ? { ...product, quantity: product.quantity + 1 } : product
      );
      setCartItems(updatedCartItems);
      console.log("Existing item:", existingItem);
      console.log("Cart items:", updatedCartItems);
      const updateTotal= updatedCartItems.reduce((total,item)=>total+(item.price*item.quantity),0)
      setTotal(updateTotal)
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm mới vào giỏ hàng
      const updatedCartItems = [...cartItems, { ...newProduct, quantity: 1 }];
      setCartItems(updatedCartItems);
      console.log("New item:", newProduct);
      console.log("Cart items:", updatedCartItems);
      setTotal((prevTotal) => prevTotal + newProduct.price);
  
    }
    }
    const increaseQuantity = (productId)=>{

      const index = cartItems.findIndex((item) => item.id === productId.id);
      if (index !== -1) {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity += 1;
        setCartItems(newCartItems);
        const updateTotal= newCartItems.reduce((total,item)=>total+(item.price*item.quantity),0)
        setTotal(updateTotal)
      }
      console.log(cartItems.price,cartItems.quantity)
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
        const updateTotal= newCartItems.reduce((total,item)=>total+(item.price*item.quantity),0)
        setTotal(updateTotal)

      }
    };
    const deleteProduct =(productId)=>{
      const index =cartItems.findIndex((item) => item.id === productId.id);
      if(index!==-1){
        const newCartItems=[...cartItems]
        newCartItems.splice(index,1)
        setCartItems(newCartItems)
        const updateTotal= newCartItems.reduce((total,item)=>total+(item.price*item.quantity),0)
        setTotal(updateTotal)
       }
    }
    return (  
        <div className={cx('wrapper')}>
           <div className={cx('header')}>
           <CartContext.Provider value={{cartItems}}> 
            <Header/>
           </CartContext.Provider >
           </div>
            <div className={cx('content')}>
               <CartContext.Provider value={{cartItems,addToCart,setCartItems,increaseQuantity,decreaseQuantity,deleteProduct,total}}>
                 {children}
                 </CartContext.Provider>
            </div>
        </div>
    );
}

export default DefaultLayout;