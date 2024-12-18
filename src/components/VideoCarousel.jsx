// import React from 'react'
import { highlightsSlides } from "../constants";

const VideoCarousel = () => {
  return (
    <>
      {/* container of the carousel */}
      <div className="flex items-center">
        {/* map thought the highlightsSlides array comming from index.js */}
        {highlightsSlides.map((list) => (
          // return something
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video id="video" playsInline={true} preload="auto" muted>
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
