import React from "react";
// import data
import { housesData } from "../data";
// import useparams
import { useParams } from "react-router-dom";
// import icons
import { BiBed, BiBath, BiArea, } from "react-icons/bi";
// import link
import { Link } from "react-router-dom";
const PropertyDetails = () => {
  // get the house id
  const { id } = useParams();
  // get the house based on id
const house=housesData.find((house)=>{
return house.id===parseInt(id)
})
return(
<section className="bg-white border border-gray-300 border-top">
{/* house name,address,type,country,price */}
 <div className="flex justify-between w-[600px] lg:w-[900px] lg:ml-[200px] mx-1">
 <div>
  <div className="lg:text-2xl font-semibold">
    {house.name}</div>
 <div className="lg:text-lg">{house.address}</div>
 </div>
 <div className="flex gap-x-2 mt-1 items-center">
  <div className="bg-violet-700 px-1 lg:px-2 rounded-full h-[21px] lg:h-[30px] text-lg flex items-center text-white">{house.type}</div>
  <div className="bg-green-500 px-1 lg:px-2 rounded-full h-[21px] lg:h-[30px] text-lg flex items-center text-white">{house.country}</div>
 </div>
 <div className="flex items-center">
  <div className="text-violet-700 font-semibold lg:text-2xl mb-3 mr-4">${house.price}</div>
 </div>
 </div>
{/* image and and agent detail */}
<div className="flex flex-col lg:flex-row mx-5 ml-[80] lg:ml-[200px] gap-x-[100px]">
  {/* image */}
<div>
<img className="w-[500px]" src={house.imageLg}/>
 <div className="flex gap-x-[50px]">
 <div className="flex gap-x-2 items-center text-2xl text-violet-700 justify-between">
  <BiBed/>
  <div>{house.bedrooms}</div>
 </div>
 <div className="flex gap-x-2 items-center text-2xl text-violet-700">
  <BiBath/>
  <div>{house.bathrooms}</div>
 </div>
 <div className="flex gap-x-2 items-center text-2xl text-violet-700">
  <BiArea/>
  <div>{house.surface}</div>
 </div>

 </div>
  <div className="w-[500px]">{house.description}</div>
</div>
 {/* form */}
<form className="flex flex-col gap-y-2 bg-white w-[300px] mt-0 h-[345px] mx-auto lg:mx-0 mb-2 border border-gray-300 items-center">
<div className="flex items-center mx-5 mt-5 gap-x-2">
 <img className="w-[70px] border border-gray-900 rounded-full " src={house.agent.image} />
<div>
  <div className="font-semibold">{house.agent.name}</div>
<Link className="text-violet-700">View listing</Link>
</div>
</div>
<div className="ml-5 flex flex-col gap-y-2">
<input placeholder="Name*" type="text" className="border border-gray-300 focus:border-violet-700 w-[200px]  outline-none p-1"/>
<input placeholder="Email*" type="text" className="border border-gray-300 focus:border-violet-700 w-[200px] outline-none p-1"/>
<input placeholder="Phone*" type="Number" className="border border-gray-300 focus:border-violet-700 w-[200px]  outline-none p-1"/>
<textarea  defaultValue="I want to buy a property"  className="border border-gray-300 focus:border-violet-700 w-[200px] resize-none outline-none p-1"/>
<div className="flex gap-x-2">
  <butoon className='bg-violet-700 p-2 text-white'>Send Message</butoon>
  <butoon className='border border-violet-700 text-violet-700 w-[80px] flex p-2'>Call us</butoon>
</div>
</div>
</form>
</div>
</section>
)};
 export default PropertyDetails
