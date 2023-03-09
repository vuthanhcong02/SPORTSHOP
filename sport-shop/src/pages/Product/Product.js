import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
function Product() {
    return ( 
        <div className=" wrapper container mt-3">
            <div className="row">
                <div className="col-3 p-3 m-2 ">
                    <div className='d-flex justify-content-between pb-2'>
                        <span className="fs-6">Bo loc</span>
                        <span className="fs-6">Xoa tat ca</span>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between pt-4">
                        <span className="fs-6">Gia tien : </span>
                        <select className="w-75">
                            <option className="col" value="">500 VND</option>
                            <option value="">1tr VND</option>
                            <option value="">1tr VND-1tr5 VND</option>
                            <option value="">2tr tro len</option>
                        </select>
                    </div>
                    <span className="d-flex pt-4 pb-2 fs-5">Ap dung</span>
                    <hr/>
                    <div className="">
                        <span className="fs-4">Phan loai</span>
                        <div class="form-check pt-3 ">
                            <input class="form-check-input text-bg-secondary border-secondary" type="checkbox" id="check1" name="option1" value="something" />
                            <label class="form-check-label">Option 1</label>
                        </div>
                        <div class="form-check pt-3">
                            <input class="form-check-input text-bg-secondary border-secondary" type="checkbox" id="check1" name="option1" value="something" />
                            <label class="form-check-label">Option 1</label>
                        </div>
                        <div class="form-check pt-3">
                            <input class="form-check-input text-bg-secondary border-secondary" type="checkbox" id="check1" name="option1" value="something" />
                            <label class="form-check-label">Option 1</label>
                        </div>
                        <div class="form-check pt-3">
                            <input class="form-check-input text-bg-secondary border-secondary" type="checkbox" id="check1" name="option1" value="something"/>
                            <label class="form-check-label">Option 1</label>
                        </div>

                    </div>
                </div>
                <div className="col-8 p-3 m-1 ">
                    <div className="d-flex justify-content-between">
                        <span className="fs-4">Hien thi san pham</span>
                        <div className="btn-search">
                            <input className="search" type="text" placeholder="Tim kiem..."/>
                            <FontAwesomeIcon  className="close" icon={faSearch}/>
                        </div>
                    </div>
                    <div className="m-4 p-5 pt-3 border">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product