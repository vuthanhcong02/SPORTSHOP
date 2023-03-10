import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
import ProductItem from './ProductItem/ProductItem';
function Product() {
    return ( 
        <div className=" wrapper container mt-3">
            <div className="row">
                <div className="col-3 p-3 m-2">
                    <div className='d-flex justify-content-between pb-2'>
                        <span className="fs-6 fw-bold">Bộ lọc</span>
                        <span className="fs-6 fw-bold">Xóa tất cả</span>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center pt-4">
                        <span className="fs-6 fw-bold">Giá tiền : </span>
                        <select className="w-75 p-2">
                            <option value="">500 VND</option>
                            <option value="">1tr VND</option>
                            <option value="">1tr VND-1tr5 VND</option>
                            <option value="">2tr tro len</option>
                        </select>
                    </div>
                    <span className="d-flex pt-4 pb-2 fs-5">Áp dụng</span>
                    <hr/>
                    <div className="">
                        <span className="fs-4 fw-bold">Phân loại</span>
                        <div className="form-check pt-3 ">
                            <input className="form-check-input text-bg-secondary border-secondary" type="checkbox" id="check1" name="option1" value="something" />
                            <label className="form-check-label">Option 1</label>
                        </div>
                        <div className="form-check pt-3">
                            <input className="form-check-input text-bg-secondary border-secondary" type="checkbox" id="check1" name="option1" value="something" />
                            <label className="form-check-label">Option 1</label>
                        </div>
                        <div className="form-check pt-3">
                            <input className="form-check-input text-bg-secondary border-secondary" type="checkbox" id="check1" name="option1" value="something" />
                            <label className="form-check-label">Option 1</label>
                        </div>
                        <div className="form-check pt-3">
                            <input className="form-check-input text-bg-secondary border-secondary" type="checkbox" id="check1" name="option1" value="something"/>
                            <label className="form-check-label">Option 1</label>
                        </div>

                    </div>
                </div>
                <div className="col-8 p-3 m-1">
                    <div className="d-flex justify-content-between">
                        <span className="fs-5 fw-bold">Hiện thị sản phẩm</span>
                        <div className="btn-search">
                            <input className="search" type="text" placeholder="Tìm kiếm..."/>
                            <FontAwesomeIcon  className="close" icon={faSearch}/>
                        </div>
                       
                    </div>
                    <hr className="hr"/>
                    {/* <div className="m-3 p-5 pt-3 border">
                    </div> */}
                    <ProductItem/>
                </div>
            </div>
        </div>
    );
}

export default Product