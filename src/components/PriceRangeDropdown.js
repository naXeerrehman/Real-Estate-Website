import React, { useContext, useState } from "react";
// import icons
import {
  RiWallet3Line,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// import context
import { HouseContext } from "./HouseContext";
// import menu
import { Menu } from "@headlessui/react";

const PriceRangeDropdown = () => {
 
  const prices = [
    {
      value: 'price ange(any)',
    },
    {
      value: '100000-130000',
    },
    {
      value: '130000-160000',
    },
    {
      value: '160000-190000',
    },
    {
      value: '220000-250000',
    },
    {
      value: '10000-30000',
    },
    {
      value: '30000-40000',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const { price, setPrice } = useContext(HouseContext);
  return (
    <Menu as='dropdown-relative'>
      <Menu.Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
         className="flex gap-x-3 ml-3 mt-2 items-center border border-white w-[200px]"
      >
        <RiWallet3Line className="text-2xl dropdown-icon-primary"/>
        <div>
          <div className="">Select Price</div>
          <div className="">{price}</div>
        </div>
        <div>{isOpen ? <RiArrowUpSLine className="text-2xl"/> : <RiArrowDownSLine className="text-2xl"/>}</div>
      </Menu.Button>
      <Menu.Items className="dropdown-menu w-[180px] ml-[15px]">
      {prices.map((item, index) => {
          return (
            <Menu.Item
              as="list"
              key={index}
              onClick={() => setPrice(item.value)}
              className="cursor-pointer hover:text-violet-700 transition block w-full">
              {item.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
