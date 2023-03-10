import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import routeConfig from '../../config/routes';
function Cart() {
    const CartItem = false;
    return (
        <div className="container mt-3">
            <div className="p-4 text-center border mt-2">
                <h1>Giỏ hàng</h1>
                <h4>Store</h4>
            </div>
            {!CartItem ? (
                <>
                    <div className="p-5 mt-3 pt-3 border text-center d-flex flex-column justify-content-center align-items-center">
                        <FontAwesomeIcon className="img-fluid" icon={faCartShopping} />
                        <span className="mt-2 fs-5 fw-medium">Bạn chưa có sản phẩm nào trong giỏ hàng</span>
                        <Link to={routeConfig.product} className="btnGoto mt-4 text-center fs-5 text-decoration-none">
                            Đi đến cửa hàng
                        </Link>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Cart;
