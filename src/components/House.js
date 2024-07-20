// import icons
import { BiBath, BiBed, BiArea } from "react-icons/bi";
const House = ({ house }) => {
  // destructure the house object
  const { image, type, country, address, bathrooms, bedrooms, surface, price } = house;
  return (
    <div className="bg-white shadow-5 shadow-gray-500 pl-10 pt-6  rounded-tl-[100px] rounded-lg h-[400px] max-w-[350px] mx-auto cursor-pointer hover:shadow-2xl transition-shadow">
      <img className="h-[200px] mb-4" src={image} alt="" />
      <div className="mb-3 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3">{type}</div>
        <div className="bg-violet-500 rounded-full text-white px-3">
          {country}
          
        </div>
      </div>

      <div className="text-lg font-semibold max-w-[270px]">{address}</div>

      <div className="flex gap-x-4 my-1">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>

        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>

        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>

      <div className="text-lg font-semibold text-violet-600">
        ${price}
      </div>
    </div>
  );
};

export default House;