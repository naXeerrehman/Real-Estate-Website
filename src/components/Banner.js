import React from 'react';
// import image
import Image from '../assets/img/house-banner.png'
const Banner = () => {
  return <div className='flex justify-between items-center mx-auto max-w-[1200px] mt-3'>
  {/* text */}
<div className='w-[500px] flex flex-col gap-y-10 ml-[80px] lg:ml-0'>
<h1 className='text-7xl font-semibold'><span className='text-violet-900' >Rent </span>Your  <br/>Dream House <span className='text-violet-900' >With Us</span> </h1>
<p className='w-[500px]'>Rent your house with us with ease and affordable price.You will have every facility and access every need of life. Rent your house with us with ease and affordable price.You will have every facility and access every need of life.</p>
</div>
{/* image */}
<div className="hidden lg:flex flex-1 max-w-[450px] ">
<img src={Image} alt='' />
</div>
  </div>;
};

export default Banner;
