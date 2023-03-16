import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';
import ProductList from './ProductList/ProductList';
import { useContext } from 'react';
import { CartContext } from '../../Layouts/DefaultLayout/DefaultLayout';
import ProductOption from './ProductOption/ProductOption';
const products = [
    {
        id: 1,
        price: 50000000,
        image: 'https://firebasestorage.googleapis.com/v0/b/sandrasoft-8fe2b.appspot.com/o/public%2Fgaleries%2F4b9461fc-74ed-4ddb-8aa3-25a9382b49d4%2FThumbnail%20(3).png?alt=media&token=d5c18f15-3dfd-4731-b900-64f93c13ceec',
        name: 'Dell XPS 15-9510 i9 11900H/ 16GB/ 1TB SSD/ RTX3050ti',
        decription:
            'Bộ vi xử lí : Core i9-11900H 2.5Ghz Ram : 16GB Đĩa cứng : 1TB SSD PCIe Màn hình : 15.6 inch FHD` Card đồ họa : RTX3050Ti 4GB GDDR6 Hệ Điều Hành : Windows® 10 bản quyền Đèn bàn phím : Có Finger Printer...',
    },
    {
        id: 2,
        price: 20000000,
        image: 'https://firebasestorage.googleapis.com/v0/b/sandrasoft-8fe2b.appspot.com/o/public%2Fgaleries%2F4b9461fc-74ed-4ddb-8aa3-25a9382b49d4%2FThumbnail%20(3).png?alt=media&token=d5c18f15-3dfd-4731-b900-64f93c13ceec',
        name: 'Dell XPS 15-9510 i9 11900H/ 16GB/ 1TB SSD/ RTX3050ti',
        decription:
            'Bộ vi xử lí : Core i9-11900H 2.5Ghz Ram : 16GB Đĩa cứng : 1TB SSD PCIe Màn hình : 15.6 inch FHD` Card đồ họa : RTX3050Ti 4GB GDDR6 Hệ Điều Hành : Windows® 10 bản quyền Đèn bàn phím : Có Finger Printer...',
    },
    {
        id: 3,
        price: 40000000,
        image: 'https://firebasestorage.googleapis.com/v0/b/sandrasoft-8fe2b.appspot.com/o/public%2Fgaleries%2F4b9461fc-74ed-4ddb-8aa3-25a9382b49d4%2FThumbnail%20(3).png?alt=media&token=d5c18f15-3dfd-4731-b900-64f93c13ceec',
        name: 'Dell XPS 15-9510 i9 11900H/ 16GB/ 1TB SSD/ RTX3050ti',
        decription:
            'Bộ vi xử lí : Core i9-11900H 2.5Ghz Ram : 16GB Đĩa cứng : 1TB SSD PCIe Màn hình : 15.6 inch FHD` Card đồ họa : RTX3050Ti 4GB GDDR6 Hệ Điều Hành : Windows® 10 bản quyền Đèn bàn phím : Có Finger Printer...',
    },
];

function Product() {
    const { addToCart,cartItems } = useContext(CartContext);
    function handleAdd(product) {
        addToCart(product);
      }
    return (
            <div className=" wrapper container mt-3">
                <div className="row">
                    <ProductOption/>
                    <div className="col-8 p-3 m-1">
                        <div className="d-flex justify-content-between">
                            <span className="fs-5 fw-bold">Hiện thị sản phẩm</span>
                            <div className="btn-search">
                                <input className="search" type="text" placeholder="Tìm kiếm..." />
                                <FontAwesomeIcon className="searchicon" icon={faSearch} />
                            </div>
                        </div>
                        <hr className="hr" />
                        <ProductList products={products} handleAdd={handleAdd} cartItems={cartItems} />
                    </div>
                </div>
            </div>
    );
}

export default Product;
