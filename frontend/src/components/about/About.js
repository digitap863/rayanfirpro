import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
import firewaterimg from '../../assets/images/fire-water.jpg'
function About() {
  const navigate = useNavigate();
  return (
    <>
      <section
        class="page-title centred"
        style={{
          backgroundImage:
            `url(${firewaterimg})`,
        }}
      >
        <div class="overlay-bg"></div>
        <div class="overlay-bg"></div>
        <div class="pattern-layer"></div>

        <div class="auto-container">
          <div class="content-box">
            <div class="title">
              <h1>About</h1>
            </div>
            <ul class="bread-crumb clearfix">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="about-section border-bottom">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-6 col-md-12 col-sm-12 image-column">
              <div class="image-box mr-70">
                <figure class="image">
                  <img
                    src="https://otisfire.com/wp-content/uploads/2019/06/otis_vancaouver_fire_protection_fire_safety_fire_alarm_fire_sprinkler_extinguisher_emergency_light_fire_safety_plan_backflow_hydrant00007.jpg"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 content-column">
              <div class="content_block_1">
                <div class="content-box mr-0">
                  <div class="sec-title">
                    {/* <p>About Our Firbrigs</p> */}
                    <h2>About </h2>
                  </div>
                  <div class="text">
                    <p>
                    Safeguard lives and properties with Rayan Fire Systems,the leading fire safety solution provider in Kerala. We are dedicated to ensuring that your environment is prepared to handle fire emergencies with confidence. Contact us today to fortify your safety measures and secure a fire-resistant future.
                    </p>
                    <p className="mt-3">
                    As a fire safety solution provider we understand the unique challenges and regulations of the region, ensuring compliance and customized solutions.
Quality Assurance: Our products and services meet the highest industry standards, ensuring that your safety is never compromised.


                    </p>
                  </div>
                  {/* <ul class="list-item clearfix">
                    <li>If you are going to use a passage of you need</li>
                    <li>
                      Lorem ipsum available, but the majority have suffered
                    </li>
                  </ul> */}
                  <div class="btn-box">
                    <a onClick={(e)=>{navigate("/contact")}} class="theme-btn-one">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
