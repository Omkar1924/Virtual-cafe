import React from 'react';
import {Link } from 'react-router-dom';
import myImg1 from "../Asetes/img-removebg-preview.png"
import myImg2 from "../Asetes/img.png-removebg-preview.png"
import myImg3 from "../Asetes/download.png"
import myImg4 from "../Asetes/dow-removebg-preview.png"
// import myImg5 from "../Asetes/img.png-removebg-preview.png"




import '../Style/homepage.css';

const CoffeeShop = () => {
  return (
    <>
    <section className="hero">
      <header>
        <nav>
          <div className="logo">
            <span className="dot"></span>
            Coffee <br />
            Shop
            <span className="dot"></span>
          </div>
          <input type="checkbox" id="check" />
          <label for="check" className="menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </label>
          <div className="nav-links">
            <Link to="/">Our Coffees</Link>
            <Link to="/index">Home</Link>
            <Link to="menu">Gallery</Link>
            <Link to="/">Contact US</Link>
            <Link to="/aboutUS">Talk to us</Link>
          </div>
        </nav>
      </header>
      <div className="intro">
        <div>
          <h1>Our Coffee Is</h1>
          <h2>A Never Ending Story</h2>
        </div>
        <div>
          <button><Link to="https://goo.gl/maps/ma3mTYdsWKehbau68">See Nearest Location</Link></button>
        </div>
      </div>
      <div className="hero-bg">
        <img src={myImg2} alt="cup of coffee" />
      </div>
      <div className="scroll">
        <Link to="#brands">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-down"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
          </svg>
          <span  >Scroll Down to <br/>Learn More</span>
        </Link>
      </div>
    </section>
    <section className="brands" id="brands">
      <img className="bottom-img" src="download-removebg-preview.png" alt="coffee" />
      <div className="brand">
        <div className="img">
          <img src="download-removebg-preview.png" alt="coffee" />
        </div>
        <div className="desc">
          <h2>Coffee</h2>
          <p>
            1.Black Coffe<br/>
            2.Hot coffe<br/>
            3.Hot chocklate<br/>
            4.cold coffe
          </p>
        </div>
      </div>
      <div className="brand row-reverse">
        <div className="img">
          <img src="img-removebg-preview.png" alt="burger" />
        </div>
        <div className="desc">
          <h2>Food & Meals</h2>
          <p>
            &gt;SANDWICH<br/>
            &gt;VEG BURDER<br/>
            &gt;PIZZA<br/>
            &gt;MAGGI

          </p>
        </div>
      </div>
      <div className="brand">
        <div className="img">
          <img src="dow-removebg-preview.png" alt="coffee beans" />
        </div>
        <div className="desc">
          <h2>Mocktails</h2>
          <p>
            *Ice Tangy Berries<br/>
            *Spice Guava punch<br/>
            *Lime Mint Mojito<br/>
            *Blue lagoon
          </p>
        </div>
      </div>
    </section>
    <footer>
      <div className="logo">
        <span className="dot"></span>
        Coffee <br />
        Shop
        <span className="dot"></span>
      </div>
      <div className="desc">
        <h3>One Sip - Forget The Rest</h3>
        <p>
         <h3>Thank You</h3> 
        </p>
      </div>
      <div className="social">
        <Link to="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg></Link>
        <Link to="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            /></svg></Link>
        <Link to="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            />
          </svg>
        </Link>
      </div>
    </footer>
    </>
  );
};

export default CoffeeShop;
