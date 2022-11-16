import React, { useState, useRef, useEffect, useCallback } from "react";
import "./Carousel.css";
function Carousel() {
  const useResize = (myRef) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleResize = useCallback(() => {
      setWidth(myRef.current.offsetWidth);
      setHeight(myRef.current.offsetHeight);
    }, [myRef]);

    useEffect(() => {
      window.addEventListener("load", handleResize);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("load", handleResize);
        window.removeEventListener("resize", handleResize);
      };
    }, [myRef, handleResize]);

    return { width, height };
  };
  const componentRef = useRef();
  const { width, height } = useResize(componentRef);

  const prev = useRef();
  const next = useRef();
  //   const carousel = document.querySelector(".carousel-container");
  const track = useRef();
  let Contentwidth = width;
  let index = 0;
  //   window.addEventListener("resize", function () {
  //     Contentwidth = carousel.offsetWidth;
  //   });
  function forward(e) {
    e.preventDefault();
    index = index + 1;
    prev.current.classList.add("show");
    console.log(track);
    track.current.style.transform =
      "translateX(" + index * -Contentwidth + "px)";
    if (track.offsetWidth - index * Contentwidth < index * Contentwidth) {
      next.current.classList.add("hide");
    }
  }
  function backward() {
    index = index - 1;
    next.current.classList.remove("hide");
    if (index === 0) {
      prev.current.classList.remove("show");
    }
    track.current.style.transform =
      "translateX(" + index * -Contentwidth + "px)";
  }

  return (
    <>
      <div ref={componentRef}>
        <p>width: {Contentwidth}px</p>
        <p>height: {height}px</p>
      </div>

      <div className="carousel-container">
        <div className="inner-carousel">
          <div ref={track} className="track">
            <div className="card-container">
              <div className="card card1"></div>
            </div>
            <div className="card-container">
              <div className="card card2"></div>
            </div>
            <div className="card-container">
              <div className="card card3"></div>
            </div>
            <div className="card-container">
              <div className="card card4"></div>
            </div>
            <div className="card-container">
              <div className="card card5"></div>
            </div>
            <div className="card-container">
              <div className="card card6"></div>
            </div>
            <div className="card-container">
              <div className="card card7"></div>
            </div>
            <div className="card-container">
              <div className="card card8"></div>
            </div>
            <div className="card-container">
              <div className="card card9"></div>
            </div>
            <div className="card-container">
              <div className="card card10">1</div>
            </div>
            <div className="card-container">
              <div className="card card11">1</div>
            </div>
            <div className="card-container">
              <div className="card card12">12</div>
            </div>
          </div>
          <div className="nav">
            <button ref={prev} className="prev" onClick={backward}>
              <i className="fas fa-arrow-left fa-2x"></i>
            </button>
            <button ref={next} className="next" onClick={forward}>
              <i className="fas fa-arrow-right fa-2x"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
