import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import routeConfig from '../../config/routes';
import './CartProducts/CartProducts.css'
import { useContext } from 'react';
import { CartContext } from '../../Layouts/DefaultLayout/DefaultLayout';
import CartProducts from './CartProducts/CartProducts';
function Cart() {
    const { cartItems,increaseQuantity,decreaseQuantity} = useContext(CartContext);
    function handleCountUp(product) {
        increaseQuantity(product);
      }
    const handleCountDown = (product)=>{
        decreaseQuantity(product)
    }  
    console.log(handleCountUp)
    return (
        <div className="container mt-3">
            <div className="p-4 text-center mt-2 border">
                <h1>Giỏ hàng</h1>
                <h4>Store</h4>
            </div>
            { cartItems.length===0 ? (
                <>
                    <div className="container p-5 mt-3 pt-3 border text-center d-flex flex-column justify-content-center align-items-center">
                        <FontAwesomeIcon className="img-fluid" icon={faCartShopping} />
                        <span className="mt-2 fs-5 fw-medium">Bạn chưa có sản phẩm nào trong giỏ hàng</span>
                        <Link to={routeConfig.product} className="btnGoto mt-4 text-center fs-5 text-decoration-none">
                            Đi đến cửa hàng
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <CartProducts products={cartItems} handleCountUp={handleCountUp} handleCountDown={handleCountDown}/>
                </>
            )}
        </div>
    );
}

export default Cart;
