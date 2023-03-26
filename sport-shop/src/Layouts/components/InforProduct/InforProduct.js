import { useParams } from "react-router-dom";
import Mockdata from "../MockDataProduct/Mockdata";
function InforProduct() {
    const { productId } = useParams();
    const product = Mockdata.find((p) => p.id===parseInt(productId))

    return ( 
        <div>
                <div className=" p-2 pt-3 row container d-flex justify-content-center align-items-center">
                    <div className="img col-3 ">
                        <img className="img-thumbnail" src={product.image} alt="" />
                    </div>
                    <div className="col-6">
                        <span className="name-product fs-4">{product.name}</span>
                        <p>{product.decription}</p>
                    </div>
                    <div className="price col-3 d-flex justify-content-evenly flex-column">
                        <span className="text-center fs-5">{product.price} VND</span>
                        <button className="btn btn-outline-danger">Thêm vào giỏ hàng</button>
                    </div>
                </div>
        </div>
    );
}
export default InforProduct;