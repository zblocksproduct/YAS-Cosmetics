import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header1() {
  const navigate = useNavigate();
  return (
    <div className="h-[102px] bg-[#E8D6C8] lg:px-[80px] px-[25px] flex justify-between items-center">
      <div>
        <img
          src="/screen.png"
          alt=""
          className="h-[70px] w-[134px] cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="md:flex items-center hidden ">
        <p
          className="text-[#4F2323] text-[14px] cursor-pointer"
          onClick={() => navigate("/discount")}
        >
          Home
        </p>
        <p
          className="text-[#4F2323] text-[14px] cursor-pointer ml-[40px]"
          onClick={() => navigate("/discount")}
        >
          Platform
        </p>
        <p
          className="text-[#4F2323] text-[14px] cursor-pointer ml-[40px]"
          onClick={() => navigate("/discount")}
        >
          Use Cases
        </p>
        <p
          className="text-[#4F2323] text-[14px] cursor-pointer ml-[40px]"
          onClick={() => navigate("/brush")}
        >
          Resources
        </p>
        <p
          className="text-[#4F2323] text-[14px] cursor-pointer ml-[40px]"
          onClick={() => navigate("/brush")}
        >
          About
        </p>
      </div>
      <img src="/Vector (4).png" alt="" className="h-fit md:hidden" />
    </div>
  );
}
