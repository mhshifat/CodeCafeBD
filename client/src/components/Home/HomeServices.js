import React from "react";

// Components
import HomeServicesCard from "./HomeServicesCard";

const HomeServices = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services_info">
          <h1 className="section_title wow fadeInDown" data-wow-duration="2s">
            Services
          </h1>
          <span
            className="section_underline wow zoomIn"
            data-wow-duration="2s"
          />
          <div className="row">
            <div
              className="card wow zoomIn"
              data-wow-duration="2s"
              data-wow-delay="0s"
            >
              <HomeServicesCard
                icon="fas fa-chess-rook"
                title="Strategy & Planning"
                quote="All my projects, large or small, begins here."
              />
            </div>

            <div
              className="card wow zoomIn"
              data-wow-duration="2s"
              data-wow-delay=".2s"
            >
              <HomeServicesCard
                icon="fas fa-file-invoice"
                title="Content"
                quote="Written content is the lifeblood of any digital project."
              />
            </div>

            <div
              className="card wow zoomIn"
              data-wow-duration="2s"
              data-wow-delay=".4s"
            >
              <HomeServicesCard
                icon="fas fa-paint-brush"
                title="UI Design"
                quote="We all know looking good is only skin deep."
              />
            </div>

            <div
              className="card wow zoomIn"
              data-wow-duration="2s"
              data-wow-delay=".6s"
            >
              <HomeServicesCard
                icon="fas fa-desktop"
                title="Development"
                quote="Thoroughly considered, documented, cross platform, and forward thinking."
              />
            </div>

            <div
              className="card wow zoomIn"
              data-wow-duration="2s"
              data-wow-delay=".8s"
            >
              <HomeServicesCard
                icon="fas fa-headset"
                title="Support"
                quote="Launching your site will be just the first step in what should ideally be an ongoing process."
              />
            </div>

            <div
              className="card wow zoomIn"
              data-wow-duration="2s"
              data-wow-delay="1s"
            >
              <HomeServicesCard
                icon="fas fa-search-plus"
                title="Optimization"
                quote="Once a site is launched, attention needs to turn to its ongoing performance."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
