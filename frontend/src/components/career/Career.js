import React, { useEffect, useState } from "react";
import "./Career.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Career() {
  const navigate = useNavigate();
  const [career, setCareer] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/admin/view-all-careers");
        setCareer(data);
      } catch (error) {}
    })();
  }, []);
  return (
    <>
      <section
        class="page-title centred"
        style={{
          backgroundImage:
            " url(http://azim.commonsupport.com/Firbrigs/assets/images/background/page-title.jpg)",
        }}
      >
        <div class="overlay-bg"></div>
        <div class="overlay-bg"></div>
        <div class="pattern-layer"></div>

        <div class="auto-container">
          <div class="content-box">
            <div class="title">
              <h1>Career</h1>
            </div>
            <ul class="bread-crumb clearfix">
              <li>
                <a
                  onClick={(e) => {
                    navigate("/");
                  }}
                >
                  Home /
                </a>
              </li>
              <li>Career</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="gallery-page-section">
        <div class="auto-container">
          <div class="row clearfix">
            {career.map((items) => {
              return (
                <div class="col-lg-4 col-md-6 col-sm-12 gallery-block" style={{maxHeight:"19rem",minHeight:"19rem"}}>
                  <div class="gallery-block-one">
                    <div class="inner-box">
                      <figure class="image-box">
                        <img
                          src={items.Image}
                          alt=""
                        />
                        <a
                          href={items.Image}
                          class="view-btn lightbox-image"
                          data-fancybox="gallery"
                        >
                          +
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
            {/* <p style={{float:"right",width:"30%"}}>Share your resume to rayanfiresystems@gmail.com</p> */}
        </div>
      </section>
      <p style={{fontSize:"1rem",textAlign:"center"}}>Share your resume to rayanfiresystems@gmail.com</p>
    </>
  );
}

export default Career;
