"use client"
import React, {useState}  from 'react';
import "./Main.scss";
import Products from '@/components/products/page';
function Main() {
  const [displayedItems, setDisplayedItems] = useState(8);

  // Function to load more items
  const loadMoreItems = () => {
    // Assuming you want to load 8 more items each time
    setDisplayedItems(prevItems => prevItems + 8);
  };
 

  return (
    <>
      <div>
        <div className='bg__img'>
          <h1>Super Flash Sale <br /><br /> 50% Off</h1>
        </div>
        <section className='category'>
          <div className='category__cards'>
            <div className='category__card1'>
              <div className='card__title'>
                <h1>FS - QUILTED MAXI <br /> CROSS BAG</h1>
              </div>
              <div className='card__img'>
                
              </div>
              <div className='card__money'>
                <div>
                  <del>$534,33</del>
                  <h4 >24% Off</h4>
                </div>
                <h2>$2<big>99,43</big></h2>
              </div>
            </div>
            <div className='category__card2'>
              <div className='card__title'>
                <h1>FS - QUILTED MAXI <br /> CROSS BAG</h1>
                <h2>$2<big>99,43</big></h2>
              </div>
              <div className='card__img'>
                
              </div>
              <div className='card__money'>
                <div>
                  <del>$534,33</del>
                  <h4 >24% Off</h4>
                </div>
              </div>
            </div>
            <div className='category__card3'>
              <div className='card__title'>
                <h1>FS - QUILTED MAXI <br /> CROSS BAG</h1>
              </div>
              <div className='card__img'>
                
              </div>
              <div className='card__money'>
                <div>
                  <del>$534,33</del>
                  <h4 >24% Off</h4>
                </div>
                <h2>$2<big>99,43</big></h2>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='sellers'>
            <span><h1>BEST SELLER</h1></span>
            <ul className='seller__all'>
              <li>All</li>
              <li>Bags</li>
              <li>Sneakers</li>
              <li>Belt</li>
              <li>Sunglasses</li>
            </ul>
            <div className='seller'>
             <Products displayedItems={displayedItems}/>
              <button className='btn__lead' onClick={loadMoreItems}>LEAD MORE</button>
            </div>
          </div>
        </section>
      </div>
    
    </>
  )
}

export default Main