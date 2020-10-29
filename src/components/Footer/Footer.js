import React from "react";
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const FooterPage = () => {
    return (
        // <div className="footer col-12">
        //   <MDBFooter color="blue" className="font-small pt-4 mt-3">
        //     <MDBContainer fluid className="text-center text-md-left">
        //       <MDBRow>
        //         <MDBCol md="5">
        //           <p>
        //             Jagan Institute of Management Studies <br /> Tel : 011-45184000, 45184001, 45184002 <br /> contact@jimsindia.org
        //         </p>
        //         </MDBCol>
        //       </MDBRow>
        //     </MDBContainer>
        //   </MDBFooter>

        //   <MDBFooter color="blue" className="font-small pt-4 mt-3">
        //     <MDBContainer fluid className="text-center text-md-left">
        //       <MDBRow>
        //         <MDBCol md="5">
        //           <div className="social-container">
        //             <a href="https://www.youtube.com/c/JIMSRohiniSector5"
        //               className="youtube social">
        //               <FontAwesomeIcon icon={faYoutube} size="2x" />
        //             </a>
        //             <a href="https://www.facebook.com/JimsDelhi?sk=wall"
        //               className="facebook social">
        //               <FontAwesomeIcon icon={faFacebook} size="2x" />
        //             </a>
        //             <a href="https://twitter.com/JIMSRohini" className="twitter social">
        //               <FontAwesomeIcon icon={faTwitter} size="2x" />
        //             </a>
        //             <a href="https://www.instagram.com/jimsrohinisector5/"
        //               className="instagram social">
        //               <FontAwesomeIcon icon={faInstagram} size="2x" />
        //             </a>
        //           </div>

        //       Copyright &copy; {new Date().getFullYear()} All Rights Reserved with JIMS
        //       <br /><br />
        //         </MDBCol>
        //       </MDBRow>
        //     </MDBContainer>
        //   </MDBFooter>
        // </div>






        <div className="footer">
            <div className="row justify-content-center">
                <div className="col-7 offset-1 col-sm-7">
                    <address>
                        <h2 className="mt-4 text-center" style={{
                            fontFamily: "Poppins",
                            fontWeight: "bold",
                            color: "lightblue",
                        }}>Jagan Institute of Management Studies </h2><br />
                        <br />
                        <i className="fa fa-phone fa-lg"></i> : 011-45184000<br />
                        <i className="fa fa-fax fa-lg my-2"></i> : 45184001<br />
                        <i className="fa fa-fax fa-lg my-2"></i> : 45184002<br />
                        <i className="fa fa-envelope fa-lg my-2"></i> : <a href="mailto:contact@jimsindia.org">
                            contact@jimsindia.org</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a href="https://www.youtube.com/c/JIMSRohiniSector5"
                            className="youtube social">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/JimsDelhi?sk=wall"
                            className="facebook social">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://twitter.com/JIMSRohini" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/jimsrohinisector5/"
                            className="instagram social">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved with JIMS</p>
                </div>
            </div>
        </div>
    );
}

export default FooterPage;