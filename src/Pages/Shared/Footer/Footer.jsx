import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-16 p-10 bg-slate-500 text-white">
        <div>
          <h2 className="font-bold text-3xl">ChefInfo</h2>
          <p>Providing reliable service since 2000</p>
        </div>
        <div>
          <span className="footer-title">Catering</span>

          <a className="link link-hover">Corporate Events</a>

          <a className="link link-hover">Weddings Events</a>

          <a className="link link-hover">Special Events</a>

          <a className="link link-hover">Cooking Classes</a>
        </div>

        <div>
          <span className="footer-title">About us</span>

          <a className="link link-hover">Our Blog</a>

          <a className="link link-hover">Our Team</a>

          <a className="link link-hover">Shop</a>
        </div>

        <div>
          <span className="footer-title">What We Offer</span>

          <a className="link link-hover">Pricing</a>

          <a className="link link-hover">Testimonials</a>

          <a className="link link-hover">Baking School</a>

          <a className="link link-hover">Our Recipes</a>
        </div>

        <div>
          <span className="footer-title">Contact</span>

          <a className="link link-hover">
            (734) 895-9501 35867 Florane St Westland, Michigan(MI), 48186
          </a>

          <a className="link link-hover">+ 895-9501 35867</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
