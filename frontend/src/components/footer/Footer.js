import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <footer>
        <div class="gap drk-bg">
          <div class="container">
            <div class="ftr-dta remove-ext5">
              <div class="row">
                <div class="col-md-6">
                  <div class="wdgt-bx">
                    <h5 itemprop="headline">About Us</h5>
                    <p itemprop="description">
                      We offer a wide variety of risk reduction strategies as
                      part of our unwavering commitment to the emergency's
                      prevention, preparation, response, and recovery phases.
                      Our team is committed to preserving lives and accelerating
                      the recovery of those unfortunate enough to suffer a
                      setback.
                    </p>
                  </div>
                </div>

                <div class="col-md-6 ">
                  <div class="col-md-5 col-sm-5 col-lg-5">
                    <div class="wdgt-bx">
                      <h5 itemprop="headline">Quick Links</h5>
                      <ul>
                        <li>
                          <a
                            onClick={() => {
                              navigate("/");
                            }}
                            title=""
                            itemprop="url"
                          >
                            <i class="fas fa-angle-double-right"></i>Home
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              navigate("/contact");
                            }}
                            title=""
                            itemprop="url"
                          >
                            <i class="fas fa-angle-double-right"></i>ContactUs
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              navigate("/about");
                            }}
                            title=""
                            itemprop="url"
                          >
                            <i class="fas fa-angle-double-right"></i>
                            AboutUs
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              navigate("/solutions");
                            }}
                            title=""
                            itemprop="url"
                          >
                            <i class="fas fa-angle-double-right"></i>Solution
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              navigate("/gallery");
                            }}
                            title=""
                            itemprop="url"
                          >
                            <i class="fas fa-angle-double-right"></i>Gallery
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              navigate("/careers");
                            }}
                            title=""
                            itemprop="url"
                          >
                            <i class="fas fa-angle-double-right"></i>Career
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="btm-br drk-bg">
        <div class="container">
          <div class="cpyrgt float-left">
            <p itemprop="description">
              <a href="#" title="" itemprop="url">
                Copyright
              </a>{" "}
              &copy; Rayan Fire Protection Systems All Rights Reserved
            </p>
            <p itemprop="description">
              <a href="#" title="" itemprop="url">
                Developed By
              </a>{" "}
              Tapclone
            </p>
          </div>
          <div class="scl-sbcrb float-right">
            <form class="scribe-frm">
              <input type="email" placeholder="Enter your email here..." />
              <button type="submit">
                <i class="fas fa-envelope"></i>
              </button>
            </form>
            <div class="scl3">
              <a href="#" title="Twitter" itemprop="url" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" title="Facebook" itemprop="url" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" title="Linkedin" itemprop="url" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" title="Google Plus" itemprop="url" target="_blank">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" title="Instagram" itemprop="url" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
