import React from 'react'
import "./Main.scss"
// import Image from 'next/image'
// import CategoryImg1 from '@/app/assets/icon.png'
// import CategoryImg2 from '@/app/assets/icon1.png'
// import CategoryImg3 from '@/app/assets/icon2.png'
// import CategoryImg4 from '@/app/assets/icon3.png'

function Main() {
  return (
    <>
      <div>
        <div className='bg__img'>
          <h3>Posted on startup</h3>
          <h1>Step-by-step guide to choosing great font pairs</h1>
          <h4>By <h4>James West</h4>  |  May 23, 2022 </h4>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <button>Read More </button>
        </div>
        <section className='category'>
          <h1>Choose A Catagory</h1>
          <div className='category__cards'>
            <div className='category__card'>
              <div>
                <span>
                  {/* <Image src={CategoryImg1} alt="img1" width={33} height={34} /> */}
                </span>

              </div>
              <h1>Business</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div className='category__card'>
              <span>
                {/* <Image src={CategoryImg2} alt="img1" width={28} height={29} /> */}
              </span>
              <h1>Startup</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div className='category__card'>
              <span>
                {/* <Image src={CategoryImg3} alt="img1" width={33} height={34} /> */}
              </span>
              <h1>Economy</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div className='category__card'>
              <span>
                {/* <Image src={CategoryImg4} alt="img1" width={33} height={34} /> */}
              </span>
              <h1>Technology</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            
          </div>
        </section>
      </div>
    
    </>
  )
}

export default Main