import React from 'react';
import './Footer.scss'
import Image from 'next/image';
import Logo from '@/app/assets/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <ul>
              <li className="title"><Image src={Logo} alt='logo' width={120} height={60}/></li>
              <li><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</a></li>
              
            </ul>
          </div>
          <div className="col-sm-3">
            <ul>
              <li className="title">Follow Us</li>
              <li><a href="#">Since the 1500s, when an unknown printer took a galley of type and scrambled.</a></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <ul>
              <li className="title">Contact Us</li>
              <li><a href="#">E-Comm , 4578 Marmora Road, Glasgow D04 89GR</a></li>
              
            </ul>
          </div>
          
        </div>
        <div className="row">
          <div className="col-sm-3">
            <ul>
              <li className="title">Overview</li>
              <li><a href="#">Feature Tour</a></li>
              <li><a href="#">Sell Online</a></li>
              <li><a href="#">Online Store</a></li>
              <li><a href="#">Store Design</a></li>
              
            </ul>
          </div>
          <div className="col-sm-3">
            <ul>
              <li className="title">Resources</li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Theme Store</a></li>
              <li><a href="#">API Docs</a></li>
              <li><a href="#">Help Counter</a></li>

            </ul>
          </div>
          <div className="col-sm-3">
            <ul>
              <li className="title">Favorites</li>
              <li><a href="#">Best Practices 2015</a></li>
              <li><a href="#">Person Development</a></li>
              <li><a href="#">Frontend Methodology</a></li>
              <li><a href="#">Javascript for Designers</a></li>

            </ul>
          </div>
          <div className="col-sm-3">
            <ul>
              <li className="title">Social</li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Youtube</a></li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

