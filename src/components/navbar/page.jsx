  "use client"

import React from 'react'
import Link from 'next/link'
import "./nav.scss"
import { useState } from 'react'

function Navbar() {
  return (
    <>
      <div>
        <div className="navbar">
          <div className="navbar__logo">
            <h1>Finsweet</h1>
          </div>
          <div className="navbar__menu">
            <ul>
              <Link href={"/"}>Home</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/about"}>About Us</Link>
              <Link href={"/register"}>Register</Link>
            </ul>
            <div className='nav-btn'>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar