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
      <div className="footer">
    <MDBFooter color="blue" className="font-small pt-4 mt-3">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="5">
            <p>
            Jagan Institute of Management Studies <br/> Tel : 011-45184000, 45184001, 45184002 <br/> contact@jimsindia.org
            </p>
          </MDBCol>

          <div className="social-container">
            {/* <h3>Social Follow</h3> */}
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

        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
                  Copyright &copy; {new Date().getFullYear()} All Rights Reserved with JIMS
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;