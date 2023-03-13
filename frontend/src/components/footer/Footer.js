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
                    {/* <div class="loc-mp" id="loc-mp"></div>
                        <span>
                          <i class="fas fa-map-marker-alt theme-clr"></i>Find us
                          on Map
                        </span> */}
                  </div>
                </div>

                <div class="col-md-6 ">
                  {/* <div class="col-md-7 col-sm-7 col-lg-7">
                      <div class="wdgt-bx">
                        <h5 itemprop="headline">Latest Work</h5>
                        <div class="wrk-glry-wrp">
                          <ul class="wrk-gal-mn">
                            <li>
                              <img
                                src="assets/images/resources/wrk-gal-img1.jpg"
                                alt="wrk-gal-img1.jpg"
                                itemprop="image"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/resources/wrk-gal-img2.jpg"
                                alt="wrk-gal-img2.jpg"
                                itemprop="image"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/resources/wrk-gal-img3.jpg"
                                alt="wrk-gal-img3.jpg"
                                itemprop="image"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/resources/wrk-gal-img4.jpg"
                                alt="wrk-gal-img4.jpg"
                                itemprop="image"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/resources/wrk-gal-img5.jpg"
                                alt="wrk-gal-img5.jpg"
                                itemprop="image"
                              />
                            </li>
                            <li>
                              <img
                                src="assets/images/resources/wrk-gal-img6.jpg"
                                alt="wrk-gal-img6.jpg"
                                itemprop="image"
                              />
                            </li>
                          </ul>
                          <ul class="wrk-gal-nv">
                            <li>
                              <div class="wrk-gal-nv-itm">
                                <img
                                  src="assets/images/resources/wrk-gal-nv-img1.jpg"
                                  alt="wrk-gal-nv-img1.jpg"
                                  itemprop="image"
                                />
                              </div>
                            </li>
                            <li>
                              <div class="wrk-gal-nv-itm">
                                <img
                                  src="assets/images/resources/wrk-gal-nv-img2.jpg"
                                  alt="wrk-gal-nv-img2.jpg"
                                  itemprop="image"
                                />
                              </div>
                            </li>
                            <li>
                              <div class="wrk-gal-nv-itm">
                                <img
                                  src="assets/images/resources/wrk-gal-nv-img3.jpg"
                                  alt="wrk-gal-nv-img3.jpg"
                                  itemprop="image"
                                />
                              </div>
                            </li>
                            <li>
                              <div class="wrk-gal-nv-itm">
                                <img
                                  src="assets/images/resources/wrk-gal-nv-img4.jpg"
                                  alt="wrk-gal-nv-img4.jpg"
                                  itemprop="image"
                                />
                              </div>
                            </li>
                            <li>
                              <div class="wrk-gal-nv-itm">
                                <img
                                  src="assets/images/resources/wrk-gal-nv-img5.jpg"
                                  alt="wrk-gal-nv-img5.jpg"
                                  itemprop="image"
                                />
                              </div>
                            </li>
                            <li>
                              <div class="wrk-gal-nv-itm">
                                <img
                                  src="assets/images/resources/wrk-gal-nv-img6.jpg"
                                  alt="wrk-gal-nv-img6.jpg"
                                  itemprop="image"
                                />
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
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
                NAAR
              </a>{" "}
              &copy; 2020 / ALL RIGHTS RESERVED
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
