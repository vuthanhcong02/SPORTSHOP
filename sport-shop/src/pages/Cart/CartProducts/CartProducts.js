import './CartProducts.css'
import { memo } from 'react';
import { Link } from 'react-router-dom';
import routeConfig from '../../../config/routes';
function CartProducts({products,handleCountUp,handleCountDown,handleDelete,totalPrice}) { 
    console.log('render:',totalPrice)
    
    return(
        <div className="container mt-3 d-flex border">
            <div className="col-7 p-3 mt-3">
                <div>
                    <span>Sản Phẩm</span>
                    <div className="hr mt-3"></div>
                </div>
                {products.map((product)=>(
                    <div className="row" key={product.id}>
                  
                    <div className="col-4 p-3 d-flex flex-column" >
                        <img className="img-fluid w-100 border" src={product.image} alt=''/>
                    </div>
                    <div className="col-8 p-2 d-flex flex-column justify-content-evenly">
                        <span>Tên sản phẩm:</span>
                        <span className="text-center">{product.name}</span>
                        <div className="row">
                            <span className="col-3">Giá : </span>
                            <span className="col-9">{product.price}</span>
                        </div>
                        <div className="row d-flex align-items-center">
                            <span className="col-3">Số lượng : </span>
                            <div className="count col-9">
                                <button className="btn btn-outline-dark" onClick={()=>handleCountDown(product)}>-</button>
                                <span className="p-2">{product.quantity}</span>
                                <button className="btn btn-outline-dark" onClick={()=>handleCountUp(product)}>+</button>
                            </div>
                        </div>
                        <div className="row d-flex align-items-center">
                            <span className="col-3">Tổng cộng : </span>
                            <span className="col">{product.price*product.quantity}</span>
                            <button className="btn-delete btn btn-outline-danger col" onClick={()=>handleDelete(product)}>Xóa sản phẩm</button>
                        </div>
                    </div>
                    <div className="hr"></div>
                </div>
                ))}
            </div>
            <div className="col-5 p-3 mt-3 ">
                <div className="border border-dashed p-3">
                <div>
                    <span>Đơn Hàng</span>
                    <div className="hr mt-3"></div>
                </div>
                <div className="row">
                    <div className="row mt-3">
                        <span className="col-6 ">Tổng số sản phẩm : </span>
                        <span className="col-6">{products.length}</span>
                    </div>
                    <div className="hr mt-3"></div>
                    {/* <div className="row mt-3 p-2">
                        <span className="col text-center">Mã sản phẩm</span>
                        <span className="col text-center">Số lượng</span>
                        <span className="col text-center">Giá trị</span>
                    </div>
                    <div className="row mt-2 p-2">
                        <span className="col text-center">#1</span>
                        <span className="col text-center">2</span>
                        <span className="col text-center">100000</span>
                    </div> */}
                     <div className="row mt-3 p-2">
                            <span className="col text-center">Mã sản phẩm</span>
                            <span className="col text-center">Số lượng</span>
                            <span className="col text-center">Giá trị</span>
                    </div>
                    {products.map((product)=>(
                        <>
                            <div className="row mt-2 p-2" key={product.id}>
                                <span className="col text-center">#{product.id}</span>
                                <span className="col text-center">{product.quantity}</span>
                                <span className="col text-center">{product.price*product.quantity}</span>
                            </div>
                        </>
                    ))}
                    <div className="row mt-3 p-2">
                        <span className="col-6 ">Phí vận chuyển : </span>
                        <span className="col-6">25000</span>
                    </div>
                    <div className="row mt-3 p-2 d-flex align-items-center">
                        <span className="col-6">Hình thức thanh toán : </span>
                        <div className="col-6">
                            <select className="form-select" aria-label="Default select example">
                                <option value="1" selected>Thẻ ngân hàng</option>
                                <option value="2">Thẻ tín dụng/Ghi nợ</option>
                                <option value="3">Thanh toán khi nhận hàng</option>
                            </select>
                        </div>
                    </div>
                    <div className="hr mt-3"></div>
                    <div className="row mt-3 p-2">
                        <span className="col-6">Tổng cộng : </span>
                        <span className="col-6">{totalPrice}</span>
                    </div>
                    <div className="row d-flex justify-content-evenly align-items-center mt-3">
                        <Link to={routeConfig.product} className="btn btn-outline-danger col">Tiếp tục mua hàng</Link>
                        <button className="btn btn-outline-danger col" >Tiến hành đặt hàng</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default memo(CartProducts);