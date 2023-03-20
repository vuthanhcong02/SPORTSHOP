import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
function Contact() {
    return ( 
        <div className="row d-flex justify-content-center">
            <div className="col-3 mt-3 contact-logo">
                <div className="mt-4">
                    <img className="img-fluid w-100" src="https://geography-vnu.edu.vn/wp-content/uploads/wordpress/tieng-anh-van-phong-thong-dung-nhat-1.jpg" alt=""/>
                </div>
                <div className="address">
                    <div className="mt-3 d-flex justify-content-start align-items-center">
                         <div className="location-icon">
                            <FontAwesomeIcon icon={faLocationDot}/>
                        </div >
                        <span className="text">Tòa nhà A,phường B,quận C,Hà Nội</span>    
                    </div>
                    <div className="mt-3  d-flex justify-content-start align-items-center">
                      <div className="phone-icon">
                            <FontAwesomeIcon icon={faMobileScreen}/>
                     </div >
                        <span className="text">0971765824</span>    
                    </div>
                    <div className="mt-3 d-flex justify-content-start align-items-center">
                       <div className="mail-icon ">
                            <FontAwesomeIcon icon={faEnvelope}/>  
                        </div > 
                        <a href="https://mail.google.com/" target="blank" className="text">congvtc02@gmail.com</a>    
                    </div>
                </div>
            </div>
            <div className="col-7  mt-3">
                <div className="contact-main">
                    <div className="mt-4">
                        <span className="">Chúng tôi rất mong muốn lắng nghe ý kiến của quý khách.Vui lòng gửi mọi yêu cầu ,<br/> mọi thắc mắc theo thông tin bên dưới.Chúng tôi sẽ liên lạc với bạn sớm nhất có thể.</span>
                    </div>
                    <div className="mb-3 mt-3">
                        <label for="exampleFormControlInput1" className="form-label">HỌ VÀ TÊN</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label for="exampleFormControlInput1" className="form-label">EMAIL</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label for="exampleFormControlInput1" className="form-label">ĐIỆN THOẠI</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your phone"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">NỘI DUNG</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div >
                        <button className="btn btn-outline-danger w-100">Gửi</button>
                    </div>
                </div>
            </div>
            <div className="footer-contact d-flex justify-content-between p-3 m-4 align-items-center row ">
               <di className="title-footer-contact col">
                    <h4>
                        ĐĂNG KÍ NHẬN KHUYẾN MÃI
                    </h4>
               </di>
               <div className="title-footer-contact col d-flex justify-content-center align-items-center">
                    <input type="text" placeholder="Nhập email của bạn"/>
                    <button className="btn btn-outline-danger">Gửi</button>
               </div>
            </div>
        </div>
    );
}

export default Contact