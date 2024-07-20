import React, { useContext, useState } from "react";
// import icons
import { RiHome3Line, RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
// import context
import { HouseContext } from "./HouseContext";
// import menu
import { Menu } from "@headlessui/react";
const PropertyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { property, setProperty, properties } = useContext(HouseContext);
  return (
    <Menu as='dropdown-relative'>
      <Menu.Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
       className="flex gap-x-3 lg:ga-x-[50px] ml-3 mt-2 items-center border border-white  w-[240px]"
      >
        <RiHome3Line className="text-2xl dropdown-icon-primary"/>
        <div>
          <div>{property}</div>
          <div className="">Choose Property Type</div>
        </div>
        <div>{isOpen ? <RiArrowUpSLine className="text-2xl"/> : <RiArrowDownSLine className="text-2xl"/>}</div>
      </Menu.Button>
      <Menu.Items className="dropdown-menu w-48 ml-[10px] lg:ml-[15px] mx-auto">
        {properties.map((property, index) => (
          <Menu.Item
            as="li"
            key={index}
            onClick={() => setProperty(property)}
            className="cursor-pointer hover:text-violet-700 transition block w-full">
            {property}
          </Menu.Item>)
        )}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
