import React from "react";
// import logo
import Logo from "../assets/img/logo.svg";
// import link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section>
      <div className="mx-auto container max-w-[1300px] p-2 flex justify-between bg-white">
        <div className="ml-5 my-auto">
          {/* logo */}
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        {/* buttons */}
        <div className="flex justify-between gap-x-2 mr-5">
          <Link>
          <div className="text-violet-900 px-1 py-2 font-semibold">Sign in</div>
          </Link>
          <Link>
          <div className="bg-violet-700 hover:bg-violet-800 transition rounded-md px-2 py-2 text-white">Sign up</div></Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
