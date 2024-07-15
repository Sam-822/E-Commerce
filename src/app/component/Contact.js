import React from 'react'

const Contact = () => {
	return (
		<div
        className="container contact d-flex align-items-center justify-content-around"
        style={{ height: 200 }}
      >
        <p className="fs-3 text-white w-auto my-0 ms-4 fw-bold">
          Subscribe to our newsletter and receive exclusive offers every week
        </p>
        <div className="d-flex align-items-center justify-content-end w-75 ms-5">
          <input type="text" className="contact-text me-5 ps-3" placeholder={'Email Address'} />
          <input type="button" className="contact-button me-5 w-25 fw-bold" value={'Subscribe'} />
        </div>
      </div>
	)
}

export default Contact
