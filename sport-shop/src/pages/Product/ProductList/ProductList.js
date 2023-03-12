import './ProductList.css';
function ProductItem({products ,handleAdd}) {
    return (
        <>
            {products.map((product,index) => (
                <div key={product.id}className="m-3 p-2 pt-3 row container">
                    <div className="img col-3 ">
                        <img className="img-thumbnail" src={product.image} alt="" />
                    </div>
                    <div className="col-6">
                        <span className="name-product fs-4">{product.name}</span>
                        <p className="decription">{product.decription}</p>
                    </div>
                    <div className="price col-3 d-flex justify-content-evenly flex-column">
                        <span className="text-center fs-5">Giá : 10000000 VND</span>
                        <button className="btn btn-outline-danger" onClick={()=>handleAdd(product)}>Thêm vào giỏ hàng</button>
                    </div>
                    <hr/>
                </div>
                ))}
        </>
    );
}

export default ProductItem;
