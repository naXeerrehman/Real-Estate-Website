

import React, { useContext, useState } from "react";
// import icons
import { RiMapPinLine, RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
// import context
// import headless ui
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="dropdown-relative">
      <Menu.Button className="flex gap-x-2 ml-3 mt-2 items-center border border-white w-[200px]" onClick={() => setIsOpen(!isOpen)}>
        <RiMapPinLine className="text-2xl dropdown-icon-primary"/>
        <div>
          <div className="text-[15px] font-medium">{country}</div>
          <div className="">Select Your Place</div>
        </div>
        {isOpen ? <RiArrowUpSLine className="text-2xl"/> : <RiArrowDownSLine className="text-2xl"/>}
      </Menu.Button>
      <Menu.Items className="dropdown-menu w-48 ml-[10px] lg:ml-[10px] mx-auto">
        {countries.map((country, index) => (
          <Menu.Item
            as="list"
            key={index}
            onClick={() => setCountry(country)}
            className="cursor-pointer hover:text-violet-700 transition block w-full"
          >
            {country}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
export default CountryDropdown;
