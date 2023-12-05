import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="bg-black py-[71px] px-[25px]">
        <div className="max-w-[900px] w-[100%] m-auto md:flex justify-between items-center">
          <div className="md:hidden">
            <input
              type="text"
              placeholder="Email Address*"
              className="bg-white h-[57px] sm:w-[344px] w-[100%] indent-4"
            />
            <div className="border border-white h-[57px] sm:w-[344px] flex justify-center items-center myfont1 mt-[15px] text-white  font-bold text-[22px]">
              Sign up
            </div>
          </div>
          <div className="flex  items-center sm:justify-start justify-center md:mt-0 mt-[30px]">
            <img src="image 8.png" alt="" />
            <img src="image 9.png" alt="" />
            <img src="image 6.png" alt="" />
            <img src="image 55.png" alt="" />
            <img src="image 4.png" alt="" />
          </div>
          <div className="md:block hidden">
            <input
              type="text"
              placeholder="Email Address*"
              className="bg-white h-[57px] w-[344px] indent-4"
            />
            <div className="border border-white h-[57px] w-[344px] flex justify-center items-center myfont1 mt-[15px] text-white  font-bold text-[22px]">
              Sign up
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
