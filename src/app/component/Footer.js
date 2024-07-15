import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="container d-grid mt-5 mb-0 px-0"
      style={{ gridTemplateColumns: "50% auto auto auto", height: 200 }}
    >
      <div className="footer-col d-flex flex-column justify-content-between">
        <div className="nav-left h-auto w-auto mx-0 d-flex align-items-center">
          <Image
            src={"/logo.svg"}
            height={"50"}
            width={"50"}
            alt="Brand Logo"
          />
          <p className="mx-4 my-0 fs-2 td-none">ShopBuddy</p>
        </div>
        <p className="w-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, natus.
          Natus eius commodi beatae sequi dolores molestiae sit rem maxime?
        </p>
        <p>
          <a className="ms-4" href="#">
            <i className="bi bi-facebook fs-5 text-secondary footer-icons" />
          </a>
          <a className="ms-4" href="#">
            <i className="bi bi-twitter fs-5 text-secondary footer-icons" />
          </a>
          <a className="ms-4" href="#">
            <i className="bi bi-linkedin fs-5 text-secondary footer-icons" />
          </a>
          <a className="ms-4" href="#">
            <i className="bi bi-instagram fs-5 text-secondary footer-icons" />
          </a>
          <a className="ms-4" href="#">
            <i className="bi bi-youtube fs-5 text-secondary footer-icons" />
          </a>
        </p>
      </div>
      <div className="footer-col">
        <p className="fw-bold mb-4">Shopping Online</p>
        <p className="footer-text my-1">
          <a className="td-none" href="#">
            Order Status
          </a>
        </p>
        <p className="footer-text my-1">
          <a className="td-none" href="#">
            Shipping and Delivery
          </a>
        </p>
        <p className="footer-text my-1">
          <a className="td-none" href="#">
            Returns
          </a>
        </p>
        <p className="footer-text my-1">
          <a className="td-none" href="#">
            Payment options
          </a>
        </p>
        <p className="footer-text my-1">
          <a className="td-none" href="#">
            Contact Us
          </a>
        </p>
      </div>
      <div className="footer-col">
        <p className="fw-bold mb-4">Information</p>
        <p className="footer-text my-1">
          <a className="td-none" href="#">
            Gift Cards
          </a>
        </p>
        <p className="footer-text my-1">
          <a className="td-none" href="#">
            Find a store
          </a>
        </p>
        <p className="footer-text my-1">
          <a className="td-none" href="#">
            Newsletter
          </a>
        </p>
        <p className="footer-text my-1">
          <a className="td-none" href="#">
            Bacome a member
          </a>
        </p>
        <p className="footer-text my-1">
          <a className="td-none" href="#">
            Site feedback
          </a>
        </p>
      </div>
      <div className="footer-col">
        <p className="fw-bold mb-4">Contact</p>
        <p className="footer-text my-1">
          <a className="td-none" href="#">
            info@storebuddy.com
          </a>
        </p>
        <p className="footer-text my-1">
          <a className="td-none" href="#">
            Phone: +91 9191919191
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
