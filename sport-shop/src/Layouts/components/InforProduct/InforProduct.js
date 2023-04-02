import { useParams } from "react-router-dom";
import Mockdata from "../MockDataProduct/Mockdata";
import { useContext, useState } from "react";
import { CartContext } from "../../DefaultLayout/DefaultLayout";
function InforProduct() {
    const { productId } = useParams();
    const [activeSize,setActiveSize]=useState('')
    const {addToCart}=useContext(CartContext)
    const product = Mockdata.find((p)=>{
        if(p.id===parseInt(productId)){
            if((!p.hasOwnProperty('quantity'))) {
                p.quantity = 1; //hasOwnProperty để kiểm tra xem đối tượng sản phẩm đã có thuộc tính quantity hay chưa. Nếu chưa có, ta sẽ thêm thuộc tính quantity vào đối tượng sản phẩm và gán giá trị mặc định bằng 1. 
              }
              return true;
            }
            return false;
    })
    const [quantity,setQuantity]=useState(product.quantity)
    const handleDecrease=()=>{
        if(quantity>1){
            setQuantity(prev=>prev-1)
        }
        else{
            return
        }
    }
    const handleIncrease=()=>{
        setQuantity(prev=>prev+1)
    }
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
                                <button className="btn btn-outline-danger m-2" onClick={handleDecrease}>-</button>
                                <span className="">{quantity}</span>
                                <button className="btn btn-outline-danger m-2" onClick={handleIncrease}>+</button>
                           </div>
                        </div>
                        <div>
                            <span>Kích cỡ : </span>
                            <div className="d-flex mt-2">
                                <button style={activeSize==='S'?{backgroundColor:"crimson",color:"white"}:{}} className="btn btn-outline-danger m-2" onClick={()=>setActiveSize('S')}>S</button>
                                <button style={activeSize==='M'?{backgroundColor:"crimson",color:"white"}:{}} className="btn btn-outline-danger m-2" onClick={()=>setActiveSize('M')}>M</button>
                                <button style={activeSize==='L'?{backgroundColor:"crimson",color:"white"}:{}} className="btn btn-outline-danger m-2"  onClick={()=>setActiveSize('L')}>L</button>
                                <button style={activeSize==='XL'?{backgroundColor:"crimson",color:"white"}:{}} className="btn btn-outline-danger m-2" onClick={()=>setActiveSize('XL')}>XL</button>
                                <button style={activeSize==='XXL'?{backgroundColor:"crimson",color:"white"}:{}} className="btn btn-outline-danger m-2" onClick={()=>setActiveSize('XXL')}>XXL</button>
                            </div>
                        </div>
                        <button className="m-2 mt-5 w-50 btn btn-outline-danger" onClick={()=>addToCart(product)}>Thêm vào giỏ hàng</button>
                   </div >
                </div>
        </div>
    );
}
export default InforProduct;