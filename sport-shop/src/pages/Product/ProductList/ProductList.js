import './ProductList.css';
import { memo } from 'react';
function ProductItem({products ,handleAdd}) {
    return (
        <>
            {products.map((product,index) => (
                <div key={product.id}className=" p-2 pt-3 row container d-flex justify-content-center align-items-center">
                    <div className="img col-3 ">
                        <img className="img-thumbnail" src={product.image} alt="" />
                    </div>
                    <div className="col-6">
                        <span className="name-product fs-4">{product.name}</span>
                        <p className="decription">{product.decription}</p>
                    </div>
                    <div className="price col-3 d-flex justify-content-evenly flex-column">
                        <span className="text-center fs-5">{product.price} VND</span>
                        <button className="btn btn-outline-danger" onClick={()=>handleAdd(product)}>Thêm vào giỏ hàng</button>
                    </div>
                    <div className="hr mt-3"></div>
                </div>
                ))}
        </>
    );
}

export default memo(ProductItem);
