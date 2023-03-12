import './CartProducts.css'
import { Link } from 'react-router-dom';
import routeConfig from '../../../config/routes';
function CartProducts({products}) {
    return(
        <div className="container mt-3 d-flex border">
            <div className="col-8 p-3 mt-3">
                <div>
                    <span>Sản Phẩm</span>
                    <hr/>
                </div>
                {products.map((product)=>(
                    <div className="row" key={product.id}>
                  
                    <div className="col-5 p-3 d-flex flex-column" >
                        <img className="img-fluid w-100 border" src={product.image} alt=''/>
                    </div>
                    <div className="col-7 p-2 d-flex flex-column justify-content-evenly">
                        <span>Tên sản phẩm:</span>
                        <span className="text-center">{product.name}</span>
                        <div className="row">
                            <span className="col-3">Giá : </span>
                            <span className="col-9">{product.price}</span>
                        </div>
                        <div className="row d-flex align-items-center">
                            <span className="col-3">Số lượng : </span>
                            <div className="count col-9">
                                <button className="btn btn-outline-dark">-</button>
                                <span className="p-2">1</span>
                                <button className="btn btn-outline-dark">+</button>
                            </div>
                        </div>
                        <div className="row">
                            <span className="col-3">Tổng cộng : </span>
                            <span className="col-9">10000000</span>
                        </div>
                    </div>
                    <hr/>
                </div>
                ))}
            </div>
            <div className="col-4 p-3 mt-3 ">
                <div className="border border-dashed p-3">
                <div>
                    <span>Đơn Hàng</span>
                    <hr/>
                </div>
                <div className="row">
                    <div className="row">
                        <span className="col-6">Tổng số sản phẩm : </span>
                        <span className="col-6">10000000</span>
                    </div>
                    <hr className="mt-3"/>
                    <div className="row mt-3 p-2">
                        <span className="col-6">Phí vận chuyển : </span>
                        <span className="col-6">100000</span>
                    </div>
                    <div className="row mt-3 p-2">
                        <span className="col-6">Hình thức thanh toán : </span>
                        <span className="col-6">VND</span>
                    </div>
                    <div className="row mt-3 p-2">
                        <span className="col-6">Tổng cộng : </span>
                        <span className="col-6">10000000</span>
                    </div>
                    <hr className="mt-3"/>
                    <div className="d-flex justify-content-around align-items-center mt-3">
                        <Link to={routeConfig.product} className="btn btn-outline-danger">Tiếp tục mua hàng</Link>
                        <button className="btn btn-outline-danger">Tiến hành đặt hàng</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CartProducts;