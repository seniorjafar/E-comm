import React from 'react'
import "@/app/page.css"
import Navbar from '@/components/navbar/page'
import Main from '@/components/main/page'
import Footer from '@/components/footer/page'



function page() {
  return (
    <div className='container'>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default page