import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Gallery() {
  const navigate = useNavigate();
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/admin/view-all-blog");
        setGallery(data);
      } catch (error) {
        console.log(error);
      }
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
              <h1>Gallery</h1>
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
              <li>Our Gallery</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="gallery-page-section">
        <div class="auto-container">
          <div class="row clearfix">
            {gallery.map((items) => {
              return (
                <div class="col-lg-4 col-md-6 col-sm-12 gallery-block mt-3">
                  <div class="card" style={{width:"100%",maxHeight:"18rem",minHeight:"18rem"}}>
                    <div class="main-content">
                      <img src={items.Image} alt={items.Name} />
                    </div>
                    <div class="overlay-content">
                      <p>
                        {items.Name}
                        <br></br>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
