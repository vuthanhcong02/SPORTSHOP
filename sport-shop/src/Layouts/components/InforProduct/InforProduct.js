import { useParams } from "react-router-dom";
import Mockdata from "../MockDataProduct/Mockdata";
function InforProduct() {
    const { productId } = useParams();
    const product = Mockdata.find((p) => p.id===parseInt(productId))

    return ( 
        <div className="container mt-3 p-3">
                <h5 className="mt-2 p-3">Thông tin sản phẩm #{product.id}</h5>
                <div className=" p-2 pt-3 row container">
                    <div className="img col-5 d-flex justify-content-start align-items-center">
                        <img className="img-fluid w-100 h-100" src={product.image} alt="" />
                    </div>
                   <div className="col-7 d-flex flex-column justify-content-start">
                        <span className="fs-4">{product.name}</span>
                        <span className="fs-5 mt-3">{product.price} VND</span>
                        <p className="mt-5">{product.decription}</p>
                        <div>
                            <span>Số lượng : </span>
                           <div className="d-flex justify-content-start align-items-center mt-2">
                                <button className="btn btn-outline-danger">-</button>
                                <span className="p-3">1</span>
                                <button className="btn btn-outline-danger">+</button>
                           </div>
                        </div>
                        <div>
                            <span>Kích cỡ : </span>
                            <div className="d-flex mt-2">
                                <button className="btn btn-outline-danger m-2">S</button>
                                <button className="btn btn-outline-danger m-2">M</button>
                                <button className="btn btn-outline-danger m-2">L</button>
                                <button className="btn btn-outline-danger m-2">XL</button>
                                <button className="btn btn-outline-danger m-2">XXL</button>
                            </div>
                        </div>
                        <button className=" mt-5 w-50 btn btn-outline-danger">Thêm vào giỏ hàng</button>
                   </div >
                </div>
        </div>
    );
}
export default InforProduct;