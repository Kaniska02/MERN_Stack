// src/pages/Home.js
import React from 'react';
import './Home.css'; // Make sure Home.css is correctly set up

export default function Home() {
  return (
    <div id="page" className="site">
      <div id="banner">
        <p>
          <a href="#">
            <img src="/images/home.gif" alt="homepage" />
          </a> | 
          <a href="mailto:denise@mitchinson.net">
            <img src="/images/mail.gif" alt="contact" />
          </a>
        </p>
        <h1>Your Company Name ...</h1>
      </div>

      <div id="menu">
        <ul id="nav">
          <li id="home">
            <a href="#">Home</a>
          </li>
          <li id="who" className="activelink">
            <a href="#">About</a>
          </li>
          <li id="prod">
            <a href="#">Product</a>
          </li>
          <li id="serv">
            <a href="#">Services</a>
          </li>
          <li id="cont">
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>

      <div id="container">
        <div id="content">
          <h1>
            Welcome to <span style={{ fontWeight: 'bold', color: '#C4DA64' }}>StopWatch</span> Template
          </h1>
          <p className="big">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent rhoncus molestie dui. Proin euismod dignissim justo. Curabitur id urna non lorem egestas viverra.
            Aenean feugiat nisl et urna. Suspendisse vestibulum. Duis ligula ante, porttitor id, tempor a, tincidunt sed, dolor. Aliquam feugiat sollicitudin tellus. <a href="#">This is a link to nowhere.</a> Aenean augue arcu, venenatis sed, pulvinar non, hendrerit nec, odio. Duis ligula. Nulla in urna eu tellus auctor convallis. Nam elementum posuere enim.
          </p>
        </div>

        <div id="content_right">
          <dl className="curved">
            <dt>RECOMMENDED LINKS</dt>
            <dd>
              <ul id="navlist">
                <li><a href="#">Snapp Happy</a></li>
                <li><a href="#">Open Designs</a></li>
                <li><a href="#">Andreas Viklund</a></li>
                <li><a href="#">James Koster</a></li>
                <li><a href="#">CSS play</a></li>
                <li><a href="#">Listamatic</a></li>
              </ul>
              <p className="last">&nbsp;</p>
            </dd>
          </dl>
          <dl className="curved">
            <dt>CURVED CORNERS <span className="small"> by Stu Nicholls</span></dt>
            <dd>
              <p>Ok, finally a four corner box with no extra markup.</p>
              <p>No javascript and absolutely no hacks.</p>
              <p className="last">Examples at <a href="http://www.cssplay.co.uk">» CSS Play</a></p>
            </dd>
          </dl>
        </div>
      </div>

      <div id="footer">
        <p>
          <a href="#">homepage</a> | 
          <a href="mailto:denise@mitchinson.net">contact</a> | 
          &copy; 2007 Anyone | Design by <a href="http://www.mitchinson.net">www.mitchinson.net</a> | 
          Licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 License</a>
        </p>
      </div>
    </div>
  );
}
