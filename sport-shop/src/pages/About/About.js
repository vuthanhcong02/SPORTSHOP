import './About.css'
function About() {
    return ( 
        <div className="container p-2">
            <div className="title p-3 border">
                <h1 className="text-center p-3">About US</h1>
            </div>
            <div className="content p3">
                <div className="bg-img row d-flex justify-content-center">
                    <div className="col d-flex border">
                        <img className="img-fluid object-fit-cover h-100 w-75" src="https://msmobile.com.vn/upload_images/images/hinh-nen-powerpoint-dep-nhat-2017-1.jpg" alt=""/>
                    </div>
                    <div className="col p-3 border">

                    </div>
                </div>
                <div className="row">
                        <div className="col">
                            <h5>Thach thuc</h5>
                            <span>abcxyz</span>
                        </div>
                        <div className="col">

                        </div>
                    </div>
            </div>
        </div>
    );
}

export default About