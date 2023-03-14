import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Services.css";
import VoiceEvacualtion from "./VoiceEvacualtion";
import WatebaseSupression from "./WatebaseSupression";
import Maintance from "./Maintance";
import GasBased from "./GasBased";
import FireDetection from "./FireDetection";
import { useNavigate, useLocation } from "react-router-dom";

function Services() {
  const [items, setItems] = useState("fire");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setItems(location.state);
    }
  },[]);

  const service = (services) => {
    if (services == "fire") {
      return <FireDetection />;
    } else if (services == "gas") {
      return <GasBased />;
    } else if (services == "maintenance") {
      return <Maintance />;
    } else if (services == "water") {
      return <WatebaseSupression />;
    } else if (services == "voice") {
      return <VoiceEvacualtion />;
    }
  };
  return (
    <>
      <section
        class="page-title centred"
        style={{
          backgroundImage:
            " url(https://www.shutterstock.com/image-illustration/fire-water-colliding-black-background-260nw-1440588368.jpg)",
        }}
      >
        <div class="overlay-bg"></div>
        <div class="overlay-bg"></div>
        <div class="pattern-layer"></div>

        <div class="auto-container">
          <div class="content-box">
            <div class="title">
              <h1>Solutions</h1>
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
              <li>Services</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="service-details">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div class="service-sidebar default-sidebar">
                <div class="sidebar-widget categori-widget">
                  <div class="widget-title">
                    <h4>Solutions</h4>
                  </div>
                  <div class="widget-content">
                    <ul class="categori-list clearfix">
                      <li>
                        <a
                          onClick={(e) => {
                            setItems("fire");
                          }}
                          className={items == "fire" ? "active" : ""}
                        >
                          Fire Detection & Alarm System
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            setItems("gas");
                          }}
                          class={items == "gas" ? "active" : ""}
                        >
                          Gas-Based Suppression System
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            setItems("maintenance");
                          }}
                          className={items == "maintenance" ? "active" : ""}
                        >
                          Maintenance Services
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            setItems("water");
                          }}
                          className={items == "water" ? "active" : ""}
                        >
                          Water-Based Suppression Systems
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            setItems("voice");
                          }}
                          className={items == "voice" ? "active" : ""}
                        >
                          Voice Evacuation System
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div class="sidebar-widget advise-widget">
                  <div
                    class="inner-box centred"
                    style={{
                      backgroundImage:
                        "url(https://i0.wp.com/firealarm.com.ph/wp-content/uploads/2020/06/detectors.jpg?fit=700%2C500&ssl=1)",
                    }}
                  >
                    <div class="icon-box">
                      <i class="fa-solid fa-fire-extinguisher"></i>
                    </div>
                    <h2>Fire Department here to Save Lives</h2>
                  </div>
                </div> */}
              </div>
            </div>
            {service(items)}
          </div>
        </div>
      </section>
      <section class="cta-section bg-color-3">
        <div
          class="pattern-layer"
          style={{ background: "url(assets/images/shape/pattern-1.png)" }}
        ></div>
        <div class="auto-container">
          <div class="inner-box clearfix">
            <div class="text pull-left">
              <h2>
                24/7 Available. Call us Immediately
                <br />
                <a href="tel: 04952998879"> 04952998879</a>
              </h2>
            </div>
            <div class="btn-box pull-right">
              <a
                onClick={(e) => {
                  navigate("/contact");
                }}
                class="theme-btn-one"
              >
                Contact with us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
