import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import Header from '../components/Header';
// application.scss

import { useState,createContext } from 'react';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Footer from '../components/Footer/Footer';
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
      const updateTotal= updatedCartItems.reduce((total,item)=>total+(item.price*item.quantity),0)
      setTotal(updateTotal)
      // alert('Sản phẩm đã có trong giỏ hàng.')
      // Display an info toast with no title
      Toastify({
        text: "Sản phẩm đã có trong giỏ hàng !",
        duration: 3000,
        destination: "",
        newWindow: false,
        close: false,
        offset: {
          x: 10, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 85 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:"#FFA500", 
          padding:"20px 40px",
          borderRadius:"10px",
          fontWeight:"600",        
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
    } else {
      // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm mới vào giỏ hàng
      const updatedCartItems = [...cartItems, { ...newProduct, quantity: 1 }];
      setCartItems(updatedCartItems);
      console.log("New item:", newProduct);
      console.log("Cart items:", updatedCartItems);
      setTotal((prevTotal) => prevTotal + newProduct.price);
      Toastify({
        text: "Sản phẩm đã được thêm vào giỏ hàng.",
        duration: 3000,
        destination: "",
        newWindow: false,
        close: false,
        offset: {
          x: 10, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 85 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:"linear-gradient(to right, #00b09b, #96c93d)", 
          padding:"20px 40px",
          borderRadius:"10px",
          fontWeight:"600",        
        },
        onClick: function(){} // Callback after click
      }).showToast();
  
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
           <CartContext.Provider value={{cartItems,total,deleteProduct}}> 
            <Header/>
           </CartContext.Provider >
           </div>
            <div className={cx('content')}>
               <CartContext.Provider value={{cartItems,addToCart,setCartItems,increaseQuantity,decreaseQuantity,deleteProduct,total}}>
                 {children}
                 </CartContext.Provider>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}

export default DefaultLayout;