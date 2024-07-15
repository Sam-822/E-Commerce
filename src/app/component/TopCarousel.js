import React from 'react'

const TopCarousel = () => {
	return (
		<div>
        <div
          id="carouselExample"
          className="carousel slide bg-dark"
          style={{ height: 500 }}
        >
          <div
            className="carousel-inner overflow-hidden h-100"
            style={{
              backgroundImage: 'url("/image1.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="carousel-item active"></div>
            <div
              className="carousel-item overflow-hidden h-100"
              style={{
                backgroundImage: 'url("/image2.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1
                className="text-center position-relative text-white"
                style={{ bottom: -300 }}
              >
                Title
              </h1>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
	)
}

export default TopCarousel
