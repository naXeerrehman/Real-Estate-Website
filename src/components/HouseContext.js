import React, { createContext, useState, useEffect } from "react";
import { housesData } from "../data";

// Create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  // State variables
  const [houses, setHouses] = useState(housesData);
  const [originalHouses] = useState(housesData);
  const [country, setCountry] = useState("Location(any)");
  const [property, setProperty] = useState("Property type(any)");
  const [countries, setCountries] = useState([]);
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range(any)");
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Extract countries from the original house data
    const allCountries = originalHouses.map((house) => house.country);
    // Remove duplicates
    const uniqueCountries = ["Location(any)", ...new Set(allCountries)];
    // Update the state
    setCountries(uniqueCountries);
  }, [originalHouses]);

  useEffect(() => {
    // Extract unique property types from the original house data
    const allProperties = originalHouses.map((house) => house.type);
    // Remove duplicates
    const uniqueProperties = ["Property type(any)", ...new Set(allProperties)];
    // Update the state
    setProperties(uniqueProperties);
  }, [originalHouses]);

  useEffect(() => {
    // Extract prices from the original house data
    const allPrices = originalHouses.map((house) => house.price);
    // Remove duplicates
    const uniquePrices = ["Price range(any)", ...new Set(allPrices)];
    // Update the state
    setPrices(uniquePrices);
  }, [originalHouses]);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => str.includes("(any)");
    const minPrice = !isDefault(price) ? parseInt(price.split("-")[0]) : null;
    const maxPrice = !isDefault(price) ? parseInt(price.split("-")[1]) : null;

    const newHouses = originalHouses.filter((house) => {
      const housePrice = parseInt(house.price);

      // Check country
      if (!isDefault(country) && house.country !== country) return false;
     
      // Check property
      if (!isDefault(property) && house.type !== property) return false;

      // Check price
      if (!isDefault(price) && (house.price < minPrice || house.price > maxPrice)) return false;

      return true;
    });

    setTimeout(() => {
      setHouses(newHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        prices,
        houses,
        setHouses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;


//// This is Sir cristian mihai code but the liitation of this code is that,In this search you can search house when you select the country,property and price  at a time, You can't search/filter the house based on country,property or price individually.
// In above my new code you can search/filter the house based on country,type and price individually.

// And the second thing is that when you select the country i.e united states for house filter and click the search button and then when you review the country list,you can't see the full list of countries you can see only the country which was selected like united state,but in above my code you can see the full list despite clikcing the search button.


// import React, { createContext,  useState,useEffect} from "react";
// import { housesData } from "../data";

// // Create context
// export const HouseContext = createContext();

// const HouseContextProvider = ({ children }) => {
//   // State variables
//   const [houses, setHouses] = useState(housesData);
//   const [country, setCountry] = useState("");
//   const [property, setProperty] = useState("");
//   const [countries, setCountries] = useState([]);
//   const [properties, setProperties] = useState([]);
//   const [price, setPrice] = useState("");
//   const [prices, setPrices] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Extract countries from house data
//     const allCountries = houses.map((house) => house.country);
//      // remove dupliactes
//     const uniqueCountries = ["Location(any)", ...new Set(allCountries)];
//     // upadate the state "setCountries is a state updater"
//     setCountries(uniqueCountries);
//   }, [houses]);
  
//   useEffect(() => {
//     // Extract unique property types 
//     const allProperties = houses.map((house) => house.type);
//     // remove dupliactes
//     const uniqueProperties = ["Property type(any)", ...new Set(allProperties)];
//     // upadate the state "setProperties is a state updater"
//     setProperties(uniqueProperties);
//   }, [houses]);

//   // Extract prices from house data
//   useEffect(() => {
//     const allPrices = houses.map((house) => house.price);
// // remove dupliactes
//     const uniquePrices = ["Price range(any)", ...new Set(allPrices)];
//     // upadate the state "setPrices is a state updater"
//     setPrices(uniquePrices);
//   }, [houses]);

//   // Handle the search click event
//   const handleClick = () => {
//     // Set loading to true
//     setLoading(true);
//     // console.log(country, property, price);

//     // Function to check if a string includes "(any)"
//     const isDefault = (str) => str.includes("(any)");

//     // Parse price range if it's not default
//     const minPrice = !isDefault(price) ? parseInt(price.split('-')[0]) : null; 
//     const maxPrice = !isDefault(price) ? parseInt(price.split('-')[1]) : null;

//     // Filter houses based on the selected criteria
//     const newHouses = housesData.filter((house) => {
//       const housePrice = parseInt(house.price);

//     // Check for country, property, and price
//       if (isDefault(country) && isDefault(property) && isDefault(price)) {
//         return true;
//       }

//       // If only country is specified
//       if (!isDefault(country) && isDefault(property) && isDefault(price)) {
//         return house.country === country;
//       }

//       // If only property is specified
//       if (isDefault(country) && !isDefault(property) && isDefault(price)) {
//         return house.type === property;
//       }

//       // If only price is specified
//       if (isDefault(country) && isDefault(property) && !isDefault(price)) {
//         return housePrice >= minPrice && housePrice <= maxPrice;
//       }

//       // If country and property are specified
//       if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
//         return house.country === country && house.type === property;
//       }

//       // If country and price are specified
//       if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
//         return house.country === country && housePrice >= minPrice && housePrice <= maxPrice;
//       }

//       // If property and price are specified
//       if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
//         return house.type === property && housePrice >= minPrice && housePrice <= maxPrice;
//       }

//       // If all three are specified
//       if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
//         return house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice;
//       }
//       // return false;
//     });

//     // Simulate loading delay and update house list
//     setTimeout(() => {
//       setHouses(newHouses);
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <HouseContext.Provider
//       value={{
//         country,
//         setCountry,
//         countries,
//         property,
//         setProperty,
//         properties,
//         price,
//         prices,
//         setPrice,
//         houses,
//         loading,
//         handleClick,
//       }}
//     >
//       {children}
//     </HouseContext.Provider>
//   );
// };

// export default HouseContextProvider;
