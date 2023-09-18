import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import firewaterimg from "../../assets/images/fire-water.jpg";
import axios from "axios";
import homeImage from '../../assets/images/homeimage123.jpg'

function Home() {
  const navigate = useNavigate();
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get("/api/admin/view-all-blog");
        console.log(data);
        setGallery(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const settings = {
    dots: true,
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
      },
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
  };

  const gallerySettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
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
      },
    ],
  };
  return (
    <div>
      <section>
        <Slider {...settingsBanner}>
          <div>
            <div
              class="featured-item"
              style={{
                backgroundImage: "url(assets/images/second.jpg)",
                transition: "step-start",
              }}
            >
              <img
                class="facts-mockup animated bounce bannerImg"
                src="/assets/images/Asset2scope.png"
                alt="mockup-image"
              />
              <div class="featured-cap" style={{ marginLeft: "9%",marginTop:"-2rem" }}>
                {/* <span>Rescue and firefighters are great</span> */}
                <h2>
                  Perfect Safety<br/>Solutions
              
                  {/* <span class="theme-clr">Properties</span> */}
                </h2>
                {/* <p>
                  Fire Fighters Team Saved 6000+ Lives & ninty two hundred acres of forest from fire.
                </p> */}
                <div class="btns-grp" style={{ paddingTop: "2rem" }}>
                  <a
                    class="theme-btn brd-rd30"
                    href="mailto:rayanfiresystems@gmail.com"
                    title="Email us"
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              class="featured-item"
              style={{
                backgroundImage: "url(assets/images/first.jpg)",
              }}
            >
              <img
                class="facts-mockup animated bounce bannerImg"
                src="/assets/images/Asset2scope.png"
                alt="mockup-image"
              />
              <div class="featured-cap" style={{ marginLeft: "9%",marginTop:"-2rem" }}>
                {/* <span>Rescue and firefighters are great</span> */}
                <h2>
                  Perfect Safety Solutions
                  {/* <span class="theme-clr">Properties</span> */}
                </h2>
                {/* <p>
                  Fire Fighters Team Saved 6000+ Lives & ninty two hundred acres of forest from fire.
                </p> */}
                <div class="btns-grp" style={{ paddingTop: "2rem" }}>
                <a
                    class="theme-btn brd-rd30"
                    href="mailto:rayanfiresystems@gmail.com"
                    title="Email us"
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              class="featured-item"
              style={{
                backgroundImage: "url(assets/images/fourth.jpg)",
              }}
            >
              <img
                class="facts-mockup animated bounce bannerImg"
                src="/assets/images/Asset2scope.png"
                alt="mockup-image"
              />
              <div class="featured-cap" style={{ marginLeft: "9%",marginTop:"-2rem" }}>
                {/* <span>Rescue and firefighters are great</span> */}
                <h2>
                  Perfect Safety <br />Solutions
                  {/* <span class="theme-clr">Properties</span> */}
                </h2>
                {/* <p>
                  Fire Fighters Team Saved 6000+ Lives & ninty two hundred acres of forest from fire.
                </p> */}
                <div class="btns-grp " style={{ paddingTop: "2rem" }}>
                <a
                    class="theme-btn brd-rd30"
                    href="mailto:rayanfiresystems@gmail.com"
                    title="Email us"
                  >
                    Contact Now
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
                      src={homeImage}
                      alt=""
                    />
                  </figure>
                  <div class="image-content">
                    <h2>10</h2>
                    <h5>Years of Experience in this field</h5>
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
                      Rayan Fire systems. Specialize in design, supply,
                      installation, testing, commissioning and servicing of
                      complete fire protection systems as per national building
                      code of India (NBC). We are a group of professionals with
                      around 20 years of experience in the field of fire system
                      installation, consultancy services and training needs of
                      fire systems.
                    </p>
                  </div>
                  {/* <div class="inner-box clearfix">
                    <div class="single-item">
                      <i class="fa-solid fa-fire"></i>
                      <h4>
                        Think of fire <br />
                        before it starts
                      </h4>
                    </div>
                    <div class="single-item">
                      <i class="fa-solid fa-fire-burner"></i>
                      <h4 style={{ paddingLeft: "1.5rem" }}>
                        Don’t play with matches
                      </h4>
                    </div>
                  </div> */}
                  {/* <ul class="list-item clearfix">
                    <li>If you are going to use a passage of you need</li>
                    <li>
                      Lorem ipsum available, but the majority have suffered
                    </li>
                  </ul> */}
                  <div class="support-box">
                    <i class="fa-regular fa-phone"></i>
                    <p>Contact Us</p>
                    <h4>
                      <a href="tel: 04952998879" style={{ fontSize: "1rem" }}>
                        {" "}
                        rayanfiresystems@gmail.com
                      </a>
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

      <section class="skrills-section bg-color-2" style={{ marginTop: "3rem" }}>
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
                    <h2>
                      Rayan Fire Systems: Elevating fire safety through
                      innovation.
                    </h2>
                  </div>
                  <div class="text">
                    <p>
                      We take pride in being your ultimate destination for top
                      quality fire safety solutions that empowers you to face
                      any challenge head-on.
                      <br />
                      Quality Assurance: Our products and services meet the
                      highest industry standards, ensuring that your safety is
                      never compromised.
                    </p>
                  </div>
                  {/* <div class="inner-box clearfix">
                    <div class="single-item">
                      <i class="fas fa-check"></i>
                      <h5>Dedicated to Save Lives</h5>
                    </div>
                    <div class="single-item ps-4">
                      <i class="fas fa-check"></i>
                      <h5>Quick Response</h5>
                    </div>
                  </div> */}
                  {/* <div class="progress-inner">
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="cta-section bg-color-3">
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
      </section> */}

      <section className="mt-5">
        <div class="gap theme-bg-layer opc9 hlf-parallax ">
          <div
            class="fixed-bg"
            style={{
              backgroundImage: `url(${firewaterimg})`,
            }}
          ></div>
          <div class="sec-tl text-center">
            <span>
              We provide you with practical actions, advice and resources.
            </span>
            <h2 itemprop="headline">Gallery</h2>
          </div>
          <div style={{ marginTop: "10rem" }}>
            <Slider {...gallerySettings}>
              {gallery.map((items) => (
                // return(

                <div>
                  <div class="vdo-bx">
                    <img
                      src={items.Image}
                      style={{ maxHeight: "17rem", minHeight: "17rem" }}
                      alt="vdo-img1-4.jpg"
                      itemprop="image"
                    />
                  </div>
                </div>
                // )
              ))}
            </Slider>
          </div>
        </div>
      </section>
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
                      <h2 itemprop="headline">
                        Setting New Standards in Fire Safety Solutions and
                        Innovation.
                      </h2>
                    </div>
                    <p itemprop="description">
                      Safeguard lives and properties with Rayan Fire Systems,the
                      leading fire safety solution provider in Kerala. We are
                      dedicated to ensuring that your environment is prepared to
                      handle fire emergencies with confidence. Contact us today
                      to fortify your safety measures and secure a
                      fire-resistant future.
                    </p>
                    <ul class="fcts-lst">
                      <li>
                        <span class="counter">10</span>
                        <h6 itemprop="headline"> Years Of Experience</h6>
                      </li>
                      <li>
                        <span class="counter">23</span>
                        <h6 itemprop="headline">Ongoing Projects</h6>
                      </li>
                      <li>
                        <span class="counter">209</span>
                        <h6 itemprop="headline">Projects Completed</h6>
                      </li>
                      <li>
                        <h5 style={{color:"white"}}><span class="counter" style={{marginRight:"0.5rem"}}>100</span>%</h5>
                        <h6 itemprop="headline">Quality Assured</h6>
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
    </div>
  );
}

export default Home;
