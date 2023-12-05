import React from "react";
import Header from "../../components/header";
import Accordian from "../../components/accordian";
export default function CosmaticsReward() {
  return (
    <div>
      <div>
        <Header />
        <div
          className="max-w-[1600px] m-auto "
          style={{ backgroundImage: "url(/bg.png)" }}
        >
          <div className="md:py-[138px] py-[70px] px-[25px]">
            <div className="max-w-[924px] m-auto md:h-[489px]">
              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
                <div className="flex md:justify-start justify-center">
                  {" "}
                  <img src="Mid 1.png" alt="" />
                </div>
                <div>
                  <p className="myfont1 sm:text-[50px] sm:text-start text-center text-[40px] leading-[55px] font-[500]">
                    YAS Cosmetics Rewards
                  </p>
                  <p className="sm:text-[25px] text-[20px] font-[300] myfont1 sm:mt-[48px] mt-[25px]">
                    Claim your{" "}
                    <span className="italic"> Elegance Foundation Card. </span>{" "}
                    by YAS Cosmetics
                  </p>
                  <div className="h-[74px] w-[100%] flex justify-center items-center bg-[#1C1C1C] sm:mt-[48px] mt-[25px] cursor-pointer" onClick={() => {
              window.location.href =
              "https://wallettest.zblocks.io?gift=38f2e57d0e2067e1bc75f01cef47&hint=microsoft";}}>
            
                    <img src="/microsoft.png" alt="" />
                    <p className="text-white sm:text-[22px] text-[18px] font-medium myfont1 ml-[10px]">
                      Continue with Microsoft
                    </p>
                  </div>
                  <div className="h-[74px] w-[100%] flex justify-center items-center bg-[#1C1C1C] mt-[15px] cursor-pointer" onClick={() => {
              window.location.href =
              "https://wallettest.zblocks.io?gift=38f2e57d0e2067e1bc75f01cef47&hint=google";
            }}>
                    <img src="/google.png" alt="" />
                    <p className="text-white sm:text-[22px] text-[18px] font-medium myfont1 ml-[10px]">
                      Continue with Google
                    </p>
                  </div>
                  <p className=" font-medium myfont1 text-[10px] mr-[10px] mt-[17px]">
                    By continuing, you accept the zblocks Platform{" "}
                    <span className="myfont1 text-[#FFA57E] ">
                      {" "}
                      Terms and Conditions
                    </span>{" "}
                    and agree to be contacted via email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:py-[120px] py-[70px] bg-[#B28F7D] px-[25px]">
          <div className="max-w-[1162px] m-auto">
            <p className="myfont1 font-medium sm:text-[50px] text-[37px] text-center text-white">
              Why join the YAS Rewards Program?
            </p>
            <div className="md:flex mt-[59px]">
              <div className=" md:hidden">
                <div className="">
                  <Accordian />
                </div>
              </div>
              <div className="md:ml-[59px] md:block hidden">
                <div className="">
                  <Accordian />
                </div>
              </div>
              <div className="flex md:justify-start md:ml-[59px] justify-center md:mt-0 mt-[30px]">
                <img src="/creamy.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/image 5.png" alt="" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
}
