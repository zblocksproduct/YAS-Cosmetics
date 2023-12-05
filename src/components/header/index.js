import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="h-[153px] bg-[#1C1C1C]  flex justify-center items-center">
      <div className="max-w-[1600px] w-[100%] m-auto  xl:px-[160px] lg:px-[120px] px-[25px] flex justify-between items-center">
        <div>
          <img
            src="/Frame 159.svg"
            alt=""
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="md:flex items-center  hidden">
          <p
            className="text-[20px] uppercase cursor-pointer text-white   myfont"
            onClick={() => navigate("/makeup")}
          >
            Shop
          </p>
          <p
            className="text-[20px] uppercase cursor-pointer text-white   myfont ml-[75px]"
            onClick={() => navigate("/makeup")}
          >
            About
          </p>
          <p
            className="text-[20px] uppercase cursor-pointer text-white   myfont ml-[75px]"
            onClick={() => navigate("/makeup")}
          >
            Contact
          </p>
        </div>
        <img src="/Vector (3).png" alt="" className="h-fit md:hidden" />
      </div>
    </div>
  );
}
