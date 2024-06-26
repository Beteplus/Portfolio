import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">BTM.</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonial" className="footer_link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a href="" className="footer_social-link" target="blanck">
            <i class="uil uil-instagram"></i>
          </a>
          <a href="" className="footer_social-link" target="blanck">
            <i class="uil uil-linkedin"></i>
          </a>
          <a href="" className="footer_social-link" target="blanck">
            <i class="uil uil-github"></i>
          </a>
        </div>


        <span className="footer_copy">
            &#169; BTM. All Right Reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
