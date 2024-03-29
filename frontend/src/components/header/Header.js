import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/rayan.png";
import mLogo from "../../assets/rayan.png";
import insta from "../../assets/instaIcon.svg";
import instaWhite from "../../assets/instagram-white.svg";
import close from "../../assets/cross.svg";
import hamburger from "../../assets/hamburger.svg";

function Header() {
    const navigate = useNavigate();
    const [state, setState] = useState(false);
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid rgba(0,0,0,0.2)",
                }}
            >
                {/* <div style={{ width: "90%", display: "flex", flexDirection: "column", rowGap: "1rem" }}>
                    <div
                        className="topBar"
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "3rem" }}
                    >
                        <p>Rayan Fire Systems: Elevating fire safety through innovation.</p>
                        <div className="socialMediaIcons" style={{ display: "flex" }}>
                            <i class="fab fa-google-plus-g"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook"></i>
                        </div>
                    </div>
                </div> */}
            </div>
            <div
                className="fixedHeader"
                style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "6rem",backgroundColor:"#222222 " }}
            >
                <div style={{ width: "100%", display: "flex", flexDirection: "column", rowGap: "1rem",paddingRight:'5rem' }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div
                            className="logo"
                            style={{ cursor: "pointer" }}
                            onClick={(e) => {
                                navigate("/");
                            }}
                        >
                            <img src={logo} alt="" />
                        </div>
                        <div className="navs">
                            <a
                                onClick={(e) => {
                                    navigate("/");
                                }}
                            >
                                Home
                            </a>
                            <a
                                onClick={(e) => {
                                    navigate("/about");
                                }}
                            >
                                About
                            </a>
                            <a
                                onClick={(e) => {
                                    navigate("/solutions");
                                }}
                            >
                                Solutions
                            </a>
                            <a
                                onClick={(e) => {
                                    navigate("/projects");
                                }}
                            >
                                Projects
                            </a>
                            <a
                                onClick={(e) => {
                                    navigate("/gallery");
                                }}
                            >
                                Gallery
                            </a>
                            <a
                                onClick={(e) => {
                                    navigate("/careers");
                                }}
                            >
                                Career
                            </a>
                            <a
                                onClick={(e) => {
                                    navigate("/contact");
                                }}
                            >
                                Contact
                            </a>
                        </div>
                        <div className="hamburger">
                            <img
                                onClick={() => {
                                    document.querySelector(".mobileViewNavBar").style.display = "block";
                                    setState(true);
                                }}
                                src={hamburger}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobileView" style={{ width: state ? "100%" : "0" }}>
                <div className="mobileViewNavBar">
                    <img
                        onClick={() => {
                            setState(false);
                            document.querySelector(".mobileViewNavBar").style.display = "none";
                        }}
                        style={{ position: "absolute", width: "1rem", zIndex: "120", right: "5%", top: "5%" }}
                        src={close}
                        alt=""
                    />
                    <div className="mLogo">
                        <img src={mLogo} alt="" />
                    </div>
                    <div className="mNavs">
                    <a
                                onClick={(e) => {
                                    navigate("/");
                                }}
                            >
                                Home
                            </a>
                            <a
                                onClick={(e) => {
                                    navigate("/about");
                                }}
                            >
                                About
                            </a>
                            <a
                                onClick={(e) => {
                                    navigate("/solutions");
                                }}
                            >
                                Solutions
                            </a>
                            <a
                                onClick={(e) => {
                                    navigate("/projects");
                                }}
                            >
                                Projects
                            </a>
                            <a
                                onClick={(e) => {
                                    navigate("/gallery");
                                }}
                            >
                                Gallery
                            </a>
                            <a
                                onClick={(e) => {
                                    navigate("/careers");
                                }}
                            >
                                Career
                            </a>
                            <a
                                onClick={(e) => {
                                    navigate("/contact");
                                }}
                            >
                                Contact
                            </a>
                        {/* <a href="" style={{ borderBottom: "1.5px solid rgba(255,255,255,0.1)" }}>
                            Help
                        </a> */}
                    </div>
                    <div className="contactInfo">
                        <p style={{ fontWeight: "600", fontSize: "1.3rem", marginBottom: "1.2rem" }}>Contact Info</p>
                        <p>Address</p>
                        <p>mobile</p>
                        <p>email</p>
                        <div style={{ display: "flex", marginTop: "2rem", columnGap: "2rem" }} className="socialMediaIcons">
                            <img style={{ fill: "white" }} src={instaWhite} alt="" />
                            <img src={instaWhite} alt="" />
                            <img src={instaWhite} alt="" />
                            <img src={instaWhite} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
