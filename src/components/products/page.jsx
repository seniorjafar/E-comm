"use client"

import React, { useEffect, useState } from 'react';
import { getData } from '@/api/index';
import "./Product.scss"
import Image from 'next/image';
import Link from 'next/link';
import Rate from '@/app/assets/rate.svg'
import Vector from '@/app/assets/head.svg'
import Cart from '@/app/assets/Cart.svg'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData('products');
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='cards'>
      {products.map(product => (
        <div className='card' key={product.id}>
            
            <div className='images'>
                
                <div className='hover'>
                    <span>
                        <Link href={"/"}><Image src={Vector} alt='head' width={30} height={30}/></Link>
                        <Link href={"/"}><Image src={Cart} alt='head' width={30} height={30}/></Link>
                    </span>
                </div>
                <img className='apiImg' src={product.image} alt={product.title} />
            </div>
            <div className='title'>
                <h2>{product.title}</h2>
                <div className='rate'>
                    <Image src={Rate} alt='rate' width={100} height={20}/>
                </div>
                <div className='price'>
                    <h3>{product.price}</h3>
                    <div className='dis'>
                        <del>$534,33</del>
                        <h4 >24% Off</h4>
                    </div>
                </div>

            </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;