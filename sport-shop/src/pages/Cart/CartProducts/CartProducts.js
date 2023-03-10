import './CartProducts.css'
function CartProducts({products}) {
    return(
        <div className="container mt-3 d-flex border">
            <div className="col-8 p-3 mt-3">
                <div>
                    <span>San pham</span>
                    <hr/>
                </div>
                {products.map((product)=>(
                    <div className="row" key={product.id}>
                  
                    <div className="col-5 p-3 d-flex flex-column" >
                        <img className="img-fluid w-100 border" src={product.image} alt=''/>
                    </div>
                    <div className="col-7 p-3 d-flex flex-column justify-content-evenly">
                        <span>Ten San Pham :</span>
                        <span className="text-center">{product.name}</span>
                        <div className="row">
                            <span className="col-3">Gia : </span>
                            <span className="col-9">{product.price}</span>
                        </div>
                        <div className="row d-flex align-items-center">
                            <span className="col-3">So luong : </span>
                            <div className="count col-9">
                                <button className="btn btn-outline-dark">-</button>
                                <span className="p-2">1</span>
                                <button className="btn btn-outline-dark">+</button>
                            </div>
                        </div>
                        <div className="row">
                            <span className="col-3">Tong cong : </span>
                            <span className="col-9">10000000</span>
                        </div>
                    </div>
                    <hr/>
                </div>
                ))}
                {/* <div className="row">
                  
                    <div className="col-5 p-3 d-flex flex-column" >
                        <img className="img-fluid w-100 border" src='https://firebasestorage.googleapis.com/v0/b/sandrasoft-8fe2b.appspot.com/o/public%2Fgaleries%2F4b9461fc-74ed-4ddb-8aa3-25a9382b49d4%2FThumbnail%20(3).png?alt=media&token=d5c18f15-3dfd-4731-b900-64f93c13ceec' alt=''/>
                    </div>
                    <div className="col-7 p-3 d-flex flex-column justify-content-evenly">
                        <span>Ten San Pham :</span>
                        <span className="text-center">Dell XPS 15-9510 i9 11900H/ 16GB/ 1TB SSD/ RTX3050ti</span>
                        <div className="row">
                            <span className="col-3">Gia : </span>
                            <span className="col-9">10000000</span>
                        </div>
                        <div className="row d-flex align-items-center">
                            <span className="col-3">So luong : </span>
                            <div className="count col-9">
                                <button className="btn btn-outline-dark">-</button>
                                <span className="p-2">1</span>
                                <button className="btn btn-outline-dark">+</button>
                            </div>
                        </div>
                        <div className="row">
                            <span className="col-3">Tong cong : </span>
                            <span className="col-9">10000000</span>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="col-4 p-3 mt-3 ">
                <div className="border border-dashed p-3">
                <div>
                    <span>Don Hang</span>
                    <hr/>
                </div>
                <div className="row">
                    <div>
                        <span>Tong cong : </span>
                        <span>10000000</span>
                    </div>
                    <hr className="mt-3"/>
                    <div className="mt-3 p-2">
                        <span>Phi van chuyen : </span>
                        <span>100000</span>
                    </div>
                    <div className="mt-3 p-2">
                        <span>Hinh thuc thanh toan : </span>
                        <span>VND</span>
                    </div>
                    <div className="mt-3 p-2">
                        <span>Tong cong : </span>
                        <span>10000000</span>
                    </div>
                    <hr className="mt-3"/>
                    <div className="d-flex justify-content-center align-items-center mt-3">
                        <button className="btn btn-outline-danger">Tien hanh dat hang</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CartProducts;