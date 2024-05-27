  "use client"

import React from 'react'
import Link from 'next/link'
import "./nav.scss"
import { useState } from 'react'
import Image from 'next/image'
import Down from '@/app/assets/arrow.svg'
import Account from '@/app/assets/account.svg'
import Vector from '@/app/assets/head.svg'
import Cart from '@/app/assets/Cart.svg'
import Search from '@/app/assets/search.svg'
import Logo from '@/app/assets/logo.svg'


function Navbar() {
  return (
    <>
      <div>
        <div className='topNav'>
          <div className='money'>
            <h3>EN <Image src={Down} alt="en" width={10} height={10} /></h3>
            <h3>USD <Image src={Down} alt="en" width={10} height={10} /></h3>            
          </div>
          <div className='linkImg'>
            <ul>
              <Link href={"/"}><Image src={Account} alt="img1" width={33} height={34} /></Link>
              <Link href={"/"}><Image src={Vector} alt="img1" width={33} height={34} /></Link>
              <Link href={"/"}><Image src={Cart} alt="img1" width={33} height={34} /></Link>
              <Link href={"/"}>Items</Link>
              <span>
                <h3>$0.00</h3>
                <Image src={Search} alt="img1" width={33} height={34} />
              </span>
            </ul>
          </div>
        </div>
        <navbar className="navbar">
          <div className="navbar__logo">
            <Image src={Logo} alt="img1" width={144} height={54} />
          </div>
          <div className="navbar__menu">
            <ul>
              <Link href={"/"}>Home</Link>
              <Link href={"/bags"}>BAGS</Link>
              <Link href={"/sneakers"}>SNEAKERS</Link>
              <Link href={"/belt"}>BELT</Link>
              <Link href={"/contact"}>CONTACT</Link>
            </ul>
          </div>
        </navbar>
      </div>
    </>
  )
}

export default Navbar