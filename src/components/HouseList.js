import React, { useContext } from "react";
// import component
import House from "./House";
// import icons
import { ImSpinner2 } from "react-icons/im";
// import link
import { Link } from "react-router-dom";
// import context
import { HouseContext } from "./HouseContext";
const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  // if loading
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[150px]" />
    );
  }
  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mb-[25px] mt-[25px]">
        Sorry,Nothing Found
      </div>
    );
  }
 return (
    <section className="mb-10 mt-1 lg:mt-0 lg:top-15">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {houses.map((house,index) => (
            <Link to={`/property/${house.id}`} key={index}>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
