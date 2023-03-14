import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import axios from "axios";




function Home() {
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

  const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      }
    ],
  };

  const settingsBanner = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const gallerySettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive:[
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }

    ]
  }
  return (
    <div>
      <section>
        <Slider {...settingsBanner}>
          <div>
            <div
              class="featured-item"
              style={{
                backgroundImage: "url(assets/images/1.jpg)",
                transition:"step-start"
                
              }}
            >
              <img
                    class="facts-mockup animated bounce bannerImg"
                    src="/assets/images/Asset2scope.png"
                    alt="mockup-image"
                  />
              <div class="featured-cap" style={{marginLeft:"9%"}}>
                {/* <span>Rescue and firefighters are great</span> */}
                <h2>  
                Life Safety  to over <span class="theme-clr">3800</span>+ people and Properties{" "}
                  {/* <span class="theme-clr">Properties</span> */}
                </h2>
                {/* <p>
                  Fire Fighters Team Saved 6000+ Lives & ninty two hundred acres of forest from fire.
                </p> */}
                <div class="btns-grp" style={{paddingTop:"2rem"}}>
                  <a class="theme-btn brd-rd30"  href="tel: 04952998879" title="">
                  Call Now
                  </a>
              
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              class="featured-item" 
              style={{
                backgroundImage: "url(assets/images/2.jpg)",
              }}
            >
              <img
                    class="facts-mockup animated bounce bannerImg"
                    src="/assets/images/Asset2scope.png"
                    alt="mockup-image"
                  />
              <div class="featured-cap" style={{marginLeft:"9%"}}>
                {/* <span>Rescue and firefighters are great</span> */}
                <h2>  
                Life Safety  to over <span class="theme-clr">3800</span>+ people and Properties{" "}
                  {/* <span class="theme-clr">Properties</span> */}
                </h2>
                {/* <p>
                  Fire Fighters Team Saved 6000+ Lives & ninty two hundred acres of forest from fire.
                </p> */}
                <div class="btns-grp" style={{paddingTop:"2rem"}}>
                <a class="theme-btn brd-rd30"  href="tel: 04952998879" title="">
                  Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              class="featured-item"
              style={{
                backgroundImage: "url(assets/images/3.jpg)",
              }}
            >
              <img
                    class="facts-mockup animated bounce bannerImg"
                    src="/assets/images/Asset2scope.png"
                    alt="mockup-image"
                  />
             <div class="featured-cap" style={{marginLeft:"9%"}}>
                {/* <span>Rescue and firefighters are great</span> */}
                <h2>  
                Life Safety  to over <span class="theme-clr">3800</span>+ people and Properties{" "}
                  {/* <span class="theme-clr">Properties</span> */}
                </h2>
                {/* <p>
                  Fire Fighters Team Saved 6000+ Lives & ninty two hundred acres of forest from fire.
                </p> */}
                <div class="btns-grp " style={{paddingTop:"2rem"}}>
                <a class="theme-btn brd-rd30"  href="tel: 04952998879" title="">
                  Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>



      </section>
      <section class="about-section">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-lg-6 col-md-12 col-sm-12 image-column mt-5">
              <div class="image_block_1">
                <div class="image-box">
                  <figure class="image">
                    <img
                      src="https://ae01.alicdn.com/kf/S8dbc0ea9d85846c39113d6b2e94105d8W.jpg"
                      alt=""
                    />
                  </figure>
                  <div class="image-content">
                    <h2>10</h2>
                    <h5>Years of experience in this field</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 content-column mt-5 ">
              <div class="content_block_1">
                <div class="content-box">
                  <div class="sec-title">
                    {/* <p itemprop="headline">About Our Firbrigs</p> */}

                    <h2>About Us</h2>
                  </div>
                  <div class="text pt-2">
                    <p>
                      Rayan Firesystems. Specialize in design, supply, installation, testing,
                      commissioning and servicing of complete fire protection systems as per national
                      building code of India (NBC). We are a group of professionals with around 20
                      years of experience in the field of fire system installation, consultancy
                      services and training needs of fire systems.
                    </p>
                  </div>
                  <div class="inner-box clearfix">
                    <div class="single-item">
                      <i class="fa-solid fa-fire"></i>
                      <h4>
                        Think of fire <br />
                        before it starts
                      </h4>
                    </div>
                    <div class="single-item">
                      <i class="fa-solid fa-fire-burner"></i>
                      <h4 style={{ paddingLeft: "1.5rem" }}>Don’t play with matches</h4>
                    </div>
                  </div>
                  {/* <ul class="list-item clearfix">
                    <li>If you are going to use a passage of you need</li>
                    <li>
                      Lorem ipsum available, but the majority have suffered
                    </li>
                  </ul> */}
                  <div class="support-box">
                    <i class="fa-regular fa-phone"></i>
                    <i class="fa-solid fa-phone"></i>
                    <p>Contact Us</p>
                    <h4>
                      <a href="tel: 04952998879"style={{fontSize:"1rem"}}> 04952998879</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="service-section centred bg-color-1"
        style={{
          backgroundImage:
            "url(http://azim.commonsupport.com/Firbrigs/assets/images/background/service-bg-1.jpg)",
        }}
      >
        <div class="bg-layer"></div>
        <div class="container-fluid">
          <div class="sec-title mt-5" style={{ textAlign: "center" }}>
            {/* <p>A Safer Community Services</p> */}
            <h2>Solutions</h2>
          </div>
          <div class="row ">
            <div style={{ width: "100%", height: "100%" }}>
              <Slider {...settings}>
                <div>
                  <div class="card">
                    <div class="main-content">
                      <img
                        src="https://otisfire.com/wp-content/uploads/2019/06/otis_vancaouver_fire_protection_fire_safety_fire_alarm_fire_sprinkler_extinguisher_emergency_light_fire_safety_plan_backflow_hydrant00007.jpg"
                        alt="Batman"
                      />
                    </div>
                    <div class="overlay-content">
                      <p>
                        Fire Detection & Alarm System<br></br>
                        <span
                          onClick={(e) => {
                            navigate("/solutions", { state: "fire" });
                          }}
                          className="mt-3"
                          style={{ cursor: "pointer" }}
                        >
                          <i class="fa-solid fa-circle-arrow-right fa-2x"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <div class="main-content">
                      <img
                        src="https://cpimg.tistatic.com/06332678/b/4/Kitchen-Hood-Fire-Suppression-System.jpg"
                        alt="Batman"
                      />
                    </div>
                    <div class="overlay-content">
                      <p>
                        Gas-Based Suppression System<br></br>
                        <span
                          className="mt-3"
                          onClick={(e) => {
                            navigate("/solutions", { state: "gas" });
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <i class="fa-solid fa-circle-arrow-right fa-2x"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <div class="main-content">
                      <img
                        src="https://media.istockphoto.com/id/960450450/photo/engineer-checking-industrial-fire-control-system-fire-alarm-controller-fire-notifier-anti-fire.jpg?s=612x612&w=0&k=20&c=ww5COfrt1Pv2mtIthZvJZ9a19X0SV4NoXDOx-E5zMjs="
                        alt="Batman"
                      />
                    </div>
                    <div class="overlay-content">
                      <p>
                        Maintenance Services
                        <br></br>
                        <span
                          onClick={(e) => {
                            navigate("/solutions", { state: "maintenance" });
                          }}
                          className="mt-3"
                          style={{ cursor: "pointer" }}
                        >
                          <i class="fa-solid fa-circle-arrow-right fa-2x"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <div class="main-content">
                      <img
                        src="https://thumbs.dreamstime.com/b/fire-sprinkler-system-water-isolate-black-d-rendering-fire-sprinkler-water-d-rendering-178663533.jpg"
                        alt="Batman"
                      />
                    </div>
                    <div class="overlay-content">
                      <p>
                        Water-Based Suppression Systems<br></br>
                        <span
                          className="mt-3"
                          onClick={(e) => {
                            navigate("/solutions", { state: "water" });
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <i class="fa-solid fa-circle-arrow-right fa-2x"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="card">
                    <div class="main-content">
                      <img
                        src="https://resources.impactfireservices.com/hubfs/How-Does-a-Fire-Alarm-Pull-Station-Work.jpg"
                        alt="Batman"
                      />
                    </div>
                    <div class="overlay-content">
                      <p>
                        Voice Evacuation System<br></br>
                        <span
                          className="mt-3"
                          onClick={(e) => {
                            navigate("/solutions", { state: "voice" });
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <i class="fa-solid fa-circle-arrow-right fa-2x"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section class="skrills-section bg-color-2" style={{marginTop:"3rem"}}>
        <div
          class="bg-layer"
          style={{
            backgroundImage:
              "url(https://5.imimg.com/data5/SY/AQ/MY-1180337/fire-detection-equipments-500x500.jpg)",
          }}
        ></div>
        <figure class="image-layer">
          {/* <img
            src="http://st2.depositphotos.com/2488047/6124/i/450/depositphotos_61246295-Fire-detector.jpg"
            alt=""
          /> */}
        </figure>
        <div class="auto-container">
          <div class="row clearfix">
            <div class="col-xl-6 col-lg-12 col-md-12 content-column">
              <div class="content_block_2">
                <div class="content-box">
                  <div class="sec-title light">
                    {/* <p>The Best Firefighters Team</p> */}
                    <h2>Protected the lives and property of over 5900 people</h2>
                  </div>
                  <div class="text">
                    <p>
                      No matter if your house is on fire, your workplace is, or your neighborhood
                      forest is experiencing a wildfire, our team will show up to put out the fire as
                      soon as practically possible, which makes us essential to the well-being of the
                      community.
                    </p>
                  </div>
                  <div class="inner-box clearfix">
                    <div class="single-item">
                      <i class="fas fa-check"></i>
                      <h5>Dedicated to Save Lives</h5>
                    </div>
                    <div class="single-item ps-4">
                      <i class="fas fa-check"></i>
                      <h5>24/7 Available to Save</h5>
                    </div>
                  </div>
                  <div class="progress-inner">
                    <div class="progress-box">
                      <h5>Families Saved</h5>
                      <div class="bar">
                        <div
                          class="bar-inner count-bar counted"
                          data-percent="77%"
                          style={{ width: "77%" }}
                        >
                          <div class="count-text">77%</div>
                        </div>
                      </div>
                    </div>
                    <div class="progress-box">
                      <h5>Property Saved</h5>
                      <div class="bar">
                        <div
                          class="bar-inner count-bar counted"
                          data-percent="60%"
                          style={{ width: "60%" }}
                        >
                          <div class="count-text">60%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="cta-section bg-color-3">
        <div class="pattern-layer"></div>
        <div class="auto-container">
          <div class="inner-box clearfix">
            <div class="text pull-left">
              <h2>
                24/7 Available. Call us Immediately
                <br />
                <a href="tel:04952998879"> 04952998879</a>
              </h2>
            </div>
            <div class="btn-box pull-right">
              <a
                onClick={() => {
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

      <section className="mt-5">
        <div class="gap theme-bg-layer opc9 hlf-parallax ">
          <div
            class="fixed-bg"
            style={{
              backgroundImage:
                "url(https://www.shutterstock.com/image-illustration/fire-water-colliding-black-background-260nw-1440588368.jpg)",
            }}
          ></div>
          <div class="sec-tl text-center">
            <span>We provide you with practical actions, advice and resources.</span>
            <h2 itemprop="headline">Gallery</h2>
          </div>
          {/* {gallery?.map((items) => {
                return (
                  <div class="vdo-bx">
                    <img
                      src={items?.Image}
                      alt="vdo-img1-2.jpg"
                      itemprop="image"
                    />
                  </div>
                );
              })} */}
          <div style={{marginTop:"10rem"}}>
            <Slider {...gallerySettings}>
            {gallery.map((items)=>{
              return(

                <div>
                <div class="vdo-bx" >
                  <img src={items.Image} style={{maxHeight:"17rem",minHeight:"17rem"}} alt="vdo-img1-4.jpg" itemprop="image" />
             
                </div>
              </div>
              )
            })}
            </Slider>
          </div>


        </div>
      </section>
      {/* <section>
        <div class="gap remove-gap">
          <div class="container">
            <div class="sec-tl text-center">
              <span>Get upto date information from blogs and events</span>
              <h2 itemprop="headline">
                Our Blog & <span class="theme-clr">Events</span>
              </h2>
            </div>
            <div class="blg-evnt-wrp">
              <div class="row">
                <div class="col-md-6 col-sm-12 col-lg-6">
                  <div class="remove-ext5">
                    <div class="row">
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="blg-bx">
                          <div class="blg-thmb">
                            <a href="blog-detail.html" title="" itemprop="url">
                              <img
                                src="assets/images/resources/blg-img1-1.jpg"
                                alt="blg-img1-1.jpg"
                                itemprop="image"
                              />
                            </a>
                          </div>
                          <div class="blg-inf">
                            <h6 itemprop="headline">
                              <a
                                href="blog-detail.html"
                                title=""
                                itemprop="url"
                              >
                                Road Closed, House On Fire
                              </a>
                            </h6>
                            <ul class="pst-mta">
                              <li>
                                <i class="far fa-calendar-alt"></i>
                                <a href="#" title="" itemprop="url">
                                  Aug 25, 2020
                                </a>
                              </li>
                              <li>
                                <i class="fas fa-user"></i>
                                <a href="#" title="" itemprop="url">
                                  Nodi Blake
                                </a>
                              </li>
                            </ul>
                            <p itemprop="description">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque.
                            </p>
                            <a href="blog-detail.html" title="" itemprop="url">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-lg-6">
                        <div class="blg-bx">
                          <div class="blg-thmb">
                            <a href="blog-detail.html" title="" itemprop="url">
                              <img
                                src="assets/images/resources/blg-img1-2.jpg"
                                alt="blg-img1-2.jpg"
                                itemprop="image"
                              />
                            </a>
                          </div>
                          <div class="blg-inf">
                            <h6 itemprop="headline">
                              <a
                                href="blog-detail.html"
                                title=""
                                itemprop="url"
                              >
                                Shoe Factory Caught Fire
                              </a>
                            </h6>
                            <ul class="pst-mta">
                              <li>
                                <i class="far fa-calendar-alt"></i>
                                <a href="#" title="" itemprop="url">
                                  Oct 14, 2020
                                </a>
                              </li>
                              <li>
                                <i class="fas fa-user"></i>
                                <a href="#" title="" itemprop="url">
                                  Nodi Blake
                                </a>
                              </li>
                            </ul>
                            <p itemprop="description">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque.
                            </p>
                            <a href="blog-detail.html" title="" itemprop="url">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 col-lg-6">
                  <div class="evnt-wrp">
                    <div class="evnt-bx">
                      <span class="evnt-dat">
                        <a class="theme-bg" href="#" title="" itemprop="url">
                          18<i>Oct</i>
                        </a>
                      </span>
                      <div class="evnt-inf">
                        <h5 itemprop="headline">
                          <a href="event-detail.html" title="" itemprop="url">
                            Emergency Medical Services Tips
                          </a>
                        </h5>
                        <ul class="pst-mta">
                          <li>
                            <i class="fas fa-map-marker-alt theme-clr"></i>
                            Glasgow, DO4 89GR
                          </li>
                          <li>
                            <i class="far fa-clock theme-clr"></i>03:00 pm -
                            10:00 pm
                          </li>
                        </ul>
                        <p itemprop="description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud.
                        </p>
                        <a
                          class="event-btn"
                          href="event-detail.html"
                          title=""
                          itemprop="url"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                    <div class="evnt-bx">
                      <span class="evnt-dat">
                        <a class="theme-bg" href="#" title="" itemprop="url">
                          21<i>Oct</i>
                        </a>
                      </span>
                      <div class="evnt-inf">
                        <h5 itemprop="headline">
                          <a href="event-detail.html" title="" itemprop="url">
                            Emergency Medical Services Tips
                          </a>
                        </h5>
                        <ul class="pst-mta">
                          <li>
                            <i class="fas fa-map-marker-alt theme-clr"></i>
                            Glasgow, DO4 89GR
                          </li>
                          <li>
                            <i class="far fa-clock theme-clr"></i>03:00 pm -
                            10:00 pm
                          </li>
                        </ul>
                        <p itemprop="description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <a
                          class="event-btn"
                          href="event-detail.html"
                          title=""
                          itemprop="url"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div class="gap black-layer opc8">
          <div
            style={{
              backgroundImage:
                "url(http://st2.depositphotos.com/2488047/6124/i/450/depositphotos_61246295-Fire-detector.jpg)",
            }}
            class="fixed-bg"
          ></div>
          <div class="container">
            <div class="shrt-fcts-wrp">
              <div class="row">
                <div class="col-md-5 col-sm-12 col-lg-5">
                  <img
                    class="facts-mockup animated bounce"
                    src="/assets/images/Asset2scope.png"
                    alt="mockup-image"
                  />
                </div>
                <div class="col-md-6 col-sm-12 col-lg-6">
                  <div class="fcts-wrp">
                    <div class="sec-tl">
                      {/* <span>
                        Youth Fire Stop Prevention & Intervention Program.
                      </span> */}
                      <h2 itemprop="headline">Life Safety to over 3800 people and property</h2>
                    </div>
                    <p itemprop="description">
                      We engage in a wide variety of activities, many of which put our lives in
                      danger. Still, we also participate in any activity that helps us and requires
                      quick thinking and physical prowess. Our main goal is to protect lives by
                      putting out flames before they start and doing so in emergencies. Property is
                      essential, but lives are more important than property. So the fire brigade team
                      devotes considerable time to keeping the property safe
                    </p>
                    <ul class="fcts-lst">
                      <li>
                        <span class="counter">10</span>
                        <h6 itemprop="headline"> Years Of Experience</h6>
                      </li>
                      <li>
                        <span class="counter">2421</span>
                        <h6 itemprop="headline">Total Projects</h6>
                      </li>
                      <li>
                        <span class="counter">275</span>
                        <h6 itemprop="headline">Fire Emergencies</h6>
                      </li>
                      <li>
                        <span class="counter">50</span>
                        <h6 itemprop="headline">Year of Experience</h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-1 col-sm-12 col-lg-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div class="gap">
          <div class="container">
            <div class="sec-tl text-center">
              <span>Fire Fighters are always ready to help and care</span>
              <h2 itemprop="headline">
                Firefighters <span class="theme-clr">Team</span>
              </h2>
            </div>
            <div class="tem-sec remove-ext5 text-center">
              <div class="row">
                <div class="col-md-4 col-sm-6 col-lg-4">
                  <div class="tm-bx">
                    <div class="tm-thmb">
                      <a href="team-detail.html" title="" itemprop="url">
                        <img
                          src="assets/images/resources/tm-img1.jpg"
                          alt="tm-img1.jpg"
                          itemprop="image"
                        />
                      </a>
                      <div class="scl2">
                        <a
                          class="theme-bg"
                          href="#"
                          title="Twitter"
                          itemprop="url"
                          target="_blank"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          class="theme-bg"
                          href="#"
                          title="Facebook"
                          itemprop="url"
                          target="_blank"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a
                          class="theme-bg"
                          href="#"
                          title="Linkedin"
                          itemprop="url"
                          target="_blank"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          class="theme-bg"
                          href="#"
                          title="Google Plus"
                          itemprop="url"
                          target="_blank"
                        >
                          <i class="fab fa-google-plus-g"></i>
                        </a>
                      </div>
                    </div>
                    <div class="tm-inf">
                      <h5 itemprop="headline">
                        <a href="team-detail.html" title="" itemprop="url">
                          Tim Patinson
                        </a>
                      </h5>
                      <span class="theme-clr">Fire Fighter</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-lg-4">
                  <div class="tm-bx">
                    <div class="tm-thmb">
                      <a href="team-detail.html" title="" itemprop="url">
                        <img
                          src="assets/images/resources/tm-img2.jpg"
                          alt="tm-img2.jpg"
                          itemprop="image"
                        />
                      </a>
                      <div class="scl2">
                        <a
                          class="theme-bg"
                          href="#"
                          title="Twitter"
                          itemprop="url"
                          target="_blank"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          class="theme-bg"
                          href="#"
                          title="Facebook"
                          itemprop="url"
                          target="_blank"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a
                          class="theme-bg"
                          href="#"
                          title="Linkedin"
                          itemprop="url"
                          target="_blank"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          class="theme-bg"
                          href="#"
                          title="Google Plus"
                          itemprop="url"
                          target="_blank"
                        >
                          <i class="fab fa-google-plus-g"></i>
                        </a>
                      </div>
                    </div>
                    <div class="tm-inf">
                      <h5 itemprop="headline">
                        <a href="team-detail.html" title="" itemprop="url">
                          Johny Smith
                        </a>
                      </h5>
                      <span class="theme-clr">Rescue Doctor</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-lg-4">
                  <div class="tm-bx">
                    <div class="tm-thmb">
                      <a href="team-detail.html" title="" itemprop="url">
                        <img
                          src="assets/images/resources/tm-img3.jpg"
                          alt="tm-img3.jpg"
                          itemprop="image"
                        />
                      </a>
                      <div class="scl2">
                        <a
                          class="theme-bg"
                          href="#"
                          title="Twitter"
                          itemprop="url"
                          target="_blank"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          class="theme-bg"
                          href="#"
                          title="Facebook"
                          itemprop="url"
                          target="_blank"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a
                          class="theme-bg"
                          href="#"
                          title="Linkedin"
                          itemprop="url"
                          target="_blank"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          class="theme-bg"
                          href="#"
                          title="Google Plus"
                          itemprop="url"
                          target="_blank"
                        >
                          <i class="fab fa-google-plus-g"></i>
                        </a>
                      </div>
                    </div>
                    <div class="tm-inf">
                      <h5 itemprop="headline">
                        <a href="team-detail.html" title="" itemprop="url">
                          Kevin Stene
                        </a>
                      </h5>
                      <span class="theme-clr">First Aid Officer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="floter-911" href="#" title="" itemprop="url">
            <img
              src="assets/images/911-icon.png"
              alt="911-icon.png"
              itemprop="image"
            />
          </a>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
