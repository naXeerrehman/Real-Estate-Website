import React,{useContext} from "react";
// import components
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
// import context
// import { HouseContext} from "./HouseContext";
// import icon
import { RiSearch2Line } from "react-icons/ri";
// import Housecontext
import { HouseContext } from "./HouseContext";

const Search = () => {
  const {handleClick}=useContext(HouseContext)
    return (
       <div
       className="max-w-[1100px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-center gap-2 px-2 py-[10px] pt-0 lg:pt-0 lg:h-[60px] lg:gap-x-[100px] mr-5 ml-5 mt-5 lg:ml-[80px] bg-white relative lg:-top-2 lg:shadow-1 lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
       <button  
       onClick={()=>handleClick()}
        className="bg-violet-700 hover:bg-violet-800 transition w-[540px] lg:max-w-[70px] py-[10px] lg:py-[7px] lg:mr-[5px] mt-2 mx-auto rounded-lg flex justify-center items-center text-white text-2xl">
       <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
