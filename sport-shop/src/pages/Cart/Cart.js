import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import routeConfig from '../../config/routes';
import CartProducts from './CartProducts/CartProducts';
const products = [
    {
        id:1,
        price:50000000,
        image: 'https://firebasestorage.googleapis.com/v0/b/sandrasoft-8fe2b.appspot.com/o/public%2Fgaleries%2F4b9461fc-74ed-4ddb-8aa3-25a9382b49d4%2FThumbnail%20(3).png?alt=media&token=d5c18f15-3dfd-4731-b900-64f93c13ceec',
        name: 'Dell XPS 15-9510 i9 11900H/ 16GB/ 1TB SSD/ RTX3050ti',
        decription:
            'Bộ vi xử lí : Core i9-11900H 2.5Ghz Ram : 16GB Đĩa cứng : 1TB SSD PCIe Màn hình : 15.6 inch FHD` Card đồ họa : RTX3050Ti 4GB GDDR6 Hệ Điều Hành : Windows® 10 bản quyền Đèn bàn phím : Có Finger Printer...',
    },
    {
        id:2,
        price:20000000,
        image: 'https://firebasestorage.googleapis.com/v0/b/sandrasoft-8fe2b.appspot.com/o/public%2Fgaleries%2F4b9461fc-74ed-4ddb-8aa3-25a9382b49d4%2FThumbnail%20(3).png?alt=media&token=d5c18f15-3dfd-4731-b900-64f93c13ceec',
        name: 'Dell XPS 15-9510 i9 11900H/ 16GB/ 1TB SSD/ RTX3050ti',
        decription:
            'Bộ vi xử lí : Core i9-11900H 2.5Ghz Ram : 16GB Đĩa cứng : 1TB SSD PCIe Màn hình : 15.6 inch FHD` Card đồ họa : RTX3050Ti 4GB GDDR6 Hệ Điều Hành : Windows® 10 bản quyền Đèn bàn phím : Có Finger Printer...',
    },
    {
        id:3,
        price:40000000,
        image: 'https://firebasestorage.googleapis.com/v0/b/sandrasoft-8fe2b.appspot.com/o/public%2Fgaleries%2F4b9461fc-74ed-4ddb-8aa3-25a9382b49d4%2FThumbnail%20(3).png?alt=media&token=d5c18f15-3dfd-4731-b900-64f93c13ceec',
        name: 'Dell XPS 15-9510 i9 11900H/ 16GB/ 1TB SSD/ RTX3050ti',
        decription:
            'Bộ vi xử lí : Core i9-11900H 2.5Ghz Ram : 16GB Đĩa cứng : 1TB SSD PCIe Màn hình : 15.6 inch FHD` Card đồ họa : RTX3050Ti 4GB GDDR6 Hệ Điều Hành : Windows® 10 bản quyền Đèn bàn phím : Có Finger Printer...',
    },
];
function Cart() {
    const CartItem = true;
    
    return (
        <div className="container mt-3">
            <div className="p-4 text-center mt-2 border">
                <h1>Giỏ hàng</h1>
                <h4>Store</h4>
            </div>
            {!CartItem ? (
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
                    <CartProducts products={products}/>
                </>
            )}
        </div>
    );
}

export default Cart;
