import React from "react";

function Maintance() {
  return (
    <div class="col-lg-8 col-md-12 col-sm-12 content-side">
      <div class="service-details-content">
        <div class="inner-box">
          <h2>Maintenance Services</h2>
          <figure class="image-box">
            <img
              src="/assets/images/maintence.jpg"
              alt=""
            />
          </figure>
          <div class="text">
            <p style={{marginTop:"1rem"}}>
              Rayan Fire Systems manages all your fire, security, and infrastructure
              solutions proactively in an end-to-end manner. Our highly-trained
              engineering teams are available round-the-clock to ensure that all
              systems are maintained efficiently and effectively. Our services
              include:
            </p>
            <h4>Managed Services — Operations & Maintenance Contract</h4>
            <p>
              A full-fledged team manages all your Fire Detection Systems,
              Evacuation Systems, and Fire Suppression Systems. Highly qualified
              and trained engineers will be deployed at your facility to
              monitor, maintain, and manage these systems. This frees up your
              manpower resources and ensures more efficient systems management.
              Breakdowns, if any, can be identified and resolved proactively.
              This, in turn, enables you to respond faster and more efficiently
              to emergencies and minimize losses to people and property.
            </p>
            <h4>
              Non-Comprehensive Annual Maintenance Contract (NAMC) And
              Comprehensive Annual Maintenance Contract (CAMC)
            </h4>
            <p>
              These are essentially ‘Services’ Contracts that vary based on your
              preferred service options. A team of trained engineers and
              technicians will visit your site and carry out Preventive
              Maintenance Services (PMS) — ideally done once in 3 months. This
              is a proactive service, meaning that they are planned in advance
              in coordination with you and a calendar of our visits is shared
              for site clearances, etc.
            </p>
          </div>
          <div class="two-column">
            <div class="row align-items-center clearfix">
            
                <div class="text">
                  <h4>Value Added Services</h4>
                  <ul class="list clearfix">
                    <li>Basic Fire Safety Training</li>
                    <li>Basic First Aid and Evacuation Training and Drills</li>
                    <li>Fire Extinguisher Services — Supply, Refill, and Replacement of Fire Extinguishers</li>
                    {/* <li>Think of fire before it starts</li>
                    <li>Read fire stop prevention Program</li>
                    <li>get out before the smoke gets thick</li> */}
                  </ul>
                </div>
              </div>
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintance;
