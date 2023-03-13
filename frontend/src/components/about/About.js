import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
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
                      We engage in a wide variety of activities, many of which
                      put our lives in danger. Still, we also participate in any
                      activity that helps us and requires quick thinking and
                      physical prowess. Our main goal is to protect lives by
                      putting out flames before they start and doing so in
                      emergencies. Property is essential, but lives are more
                      important than property. So the fire brigade team devotes
                      considerable time to keeping the property safe.
                    </p>
                    <p className="mt-3">
                      We offer a wide variety of risk reduction strategies as
                      part of our unwavering commitment to the emergency's
                      prevention, preparation, response, and recovery phases.
                      Our team is committed to preserving lives and accelerating
                      the recovery of those unfortunate enough to suffer a
                      setback.
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
