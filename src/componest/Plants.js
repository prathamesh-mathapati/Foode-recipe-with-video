import React from "react";
import './Navbar'
const Plants = () => {
    return (
        <div className=" m-3 ">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body pants">
                        <h1 >Best house plants varieties.</h1>
                        <button className="btn btnShop mb-5 mt-2">Shop Now</button>
                        <p className="Beautiful">Beautiful living greenery for homes and offices</p>
                        <p className="card-text"><small className="text-muted">Wer've been mentioned in the press</small> </p>
                        <div className="Forbes"><h4>Bloomberg</h4> <h4>Forbes</h4></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src="./img/unsplash_YAPZt8wxMO4.png" className="img-fluid img-1" alt="..." />
                </div>
            </div>
            <div className="d-flex  each">
                <p>Each houseplant set is handled quickly and safely
                    before being sent to your destination in specially
                    designed insulated packaging.</p>
                <p>Learn how ve take care of your plant
                    at every stage of its journey from our
                    greenhouse to your home.</p></div>

                    <h6 className="aline d-flex justify-content-center gap-5 mb-5">LEARN MORE <img src="./img/Frame 26.png" alt="none"></img></h6>

                    <div className="">
                        <img src="./img/unsplash_ZSZ6wzNU12Q.png" className="img-fluid unsplash " alt="none"/>
                        <img src="./img/Frame 27.png" alt="none" className="back-img"></img>
                    </div>
        </div>
    )
}

export default Plants;