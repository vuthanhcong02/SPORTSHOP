import './ProductItem.css'
function ProductItem() {
    return (  
        <div className="m-3 p-2 pt-3 row container">
            <div className="img col-3 ">
                <img className="img-thumbnail" src="https://firebasestorage.googleapis.com/v0/b/sandrasoft-8fe2b.appspot.com/o/public%2Fgaleries%2F4b9461fc-74ed-4ddb-8aa3-25a9382b49d4%2FThumbnail%20(3).png?alt=media&token=d5c18f15-3dfd-4731-b900-64f93c13ceec" alt=""/>
            </div>
            <div className="col-6">
                <span className="name-product fs-4">Dell XPS 15-9510 i9 11900H/ 16GB/ 1TB SSD/ RTX3050ti</span>
                <p className="decription">Bộ vi xử lí : Core i9-11900H 2.5Ghz Ram : 16GB Đĩa cứng : 1TB SSD PCIe Màn hình : 15.6 inch FHD` Card đồ họa : RTX3050Ti 4GB GDDR6 Hệ Điều Hành : Windows® 10 bản quyền Đèn bàn phím : Có Finger Printer...</p>
            </div>
            <div className="price col-3 d-flex justify-content-evenly flex-column">
                <span className="text-center fs-6">Gia : 50000000 VND</span>
                <button className="btn btn-success ">Them vao gio hang</button>
            </div>
        </div>
        
    );
}

export default ProductItem; 