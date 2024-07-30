import React from "react";
import "@/app/footer.css";

const Footer = () => {
  return (
    <div className="footer-container glass">
      <div className="container d-flex align-items-center justify-content-center  h-100">
        <div className="row w-100">
          <div className="col-1 grid" id="footer-logo">
            <div className="cube-container mx-2 pers650">
              <div className="cube">
                <div className="face front">
                  <img src="/logo.svg" height="100%" alt="" />
                </div>
                <div className="face back">
                  <img src="/logo.svg" height="100%" alt="" />
                </div>
                <div className="face left">
                  <img src="/logo.svg" height="100%" alt="" />
                </div>
                <div className="face right">
                  <img src="/logo.svg" height="100%" alt="" />
                </div>
                <div className="face top">
                  <img src="/logo.svg" height="100%" alt="" />
                </div>
                <div className="face bottom">
                  <img src="/logo.svg" height="100%" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 d-flex align-items-center">
            <a
              href="https://abdulsamadsportfolio2.netlify.app/"
              target="_blank"
              id="footer-name"
              className="footer-links fs-2 text-crimson"
            >
              Abdul Samad Ansari
            </a>
          </div>
          <div className="col">
            <div className="row">
              <div className="col fs-4 text-crimson">Projects:</div>
            </div>
            <div className="row">
              <div className="col">
                <a
                  href="https://bookstore-sooty-beta.vercel.app/"
                  className=" text-black fs-5 footer-links"
                  target="_blank"
                >
                  Books Palace
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a
                  href="https://shopbuddy-abdul-samad-ansaris-projects.vercel.app/"
                  className=" text-black fs-5 footer-links"
                  target="_blank"
                >
                  ShopBuddy
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a
                  href="https://foodbuddyabdul.netlify.app/"
                  className=" text-black fs-5 footer-links"
                  target="_blank"
                >
                  FoodBuddy
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col fs-4 text-crimson">Links:</div>
            </div>
            <div className="row">
              <div className="col">
                <a
                  href="mailto:ansamad1028@gmail.com"
                  className=" text-black fs-5 footer-links"
                  target="_blank"
                >
                  <i className="bi bi-envelope-at-fill fs-5 me-1"></i>E-mail
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a
                  href="https://www.linkedin.com/in/abdulsamad102/"
                  className=" text-black fs-5 footer-links"
                  target="_blank"
                >
                  <i className="bi bi-linkedin fs-5 me-1"></i>Linkedin
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a
                  href="https://github.com/Sam-822"
                  className=" text-black fs-5 footer-links"
                  target="_blank"
                >
                  <i className="bi bi-github fs-5 me-1"></i>Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
