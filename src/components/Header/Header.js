import React from 'react';
import LoginModal from '../../components/LoginModal/LoginModal';
import Logo from '../../components/Logo/Logo';

const Header = (props) => {
    return (
        <div className="Main row justify-content-center">
            <div className="col-12 offset-8 offset-md-0 col-md-2">
                <Logo />
            </div>
            <div className="col-12 col-md-8 d-flex justify-content-center">
                <span className="align-self-center" style={{
                    fontFamily: "Poppins",
                    fontSize: "300%",
                    fontWeight: "600",
                    color: "#292b2c",
                    marginBottom: "0px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    color: "black",
                }}> PRE PLACEMENT PORTAL </span>
            </div>
            <div className="col-12 col-md-2 button d-flex justify-content-center align-items-center">
                <LoginModal />
            </div>
        </div>
    );
}

export default Header;