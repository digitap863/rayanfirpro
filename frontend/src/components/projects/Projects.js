import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

function Services() {
    const [items, setItems] = useState([]);
    const [project, setProject] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        (async function () {
            try {
                const { data } = await axios.get("/api/admin/view-all-project");
                setItems(data);
                setProject(data[0]);
            } catch (error) {}
        })();
    }, []);
    const changeProject = (items) => {
        setProject(items);
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
                            <h1>Projects</h1>
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
                            <li>Projects</li>
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
                                        <h4>Projects</h4>
                                    </div>
                                    <div class="widget-content">
                                        <ul class="categori-list clearfix">
                                            {items.map((items) => {
                                                return (
                                                    <li>
                                                        <a
                                                            onClick={(e) => {
                                                                changeProject(items);
                                                            }}
                                                            className={items.Name == project.Name ? "active" : ""}
                                                        >
                                                            {items.Name}
                                                        </a>
                                                    </li>
                                                );
                                            })}
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
                        <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div class="service-details-content">
                                <div class="inner-box">
                                    <h2>{project?.Name}</h2>
                                    <figure class="image-box">
                                        <img src={project?.Image} alt="" />
                                    </figure>
                                    <div class="text">
                                        {/* <h4>Integrated Voice Evacuation System</h4> */}
                                        {project?.paragraph.map((items) => {
                                            return <p>{items.description}</p>;
                                        })}
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

export default Services;
