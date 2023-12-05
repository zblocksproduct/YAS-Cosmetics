import React, { useState } from "react";
import * as tga from "../../components/tga-verifier.js";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Modal from "../../components/modal";
export default function Brush() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

async function checkTrue() {
    if (await verify()) {
      openModal();
    }
  }

  async function verify() {
    const conf = {
      code: 'Z1701797938669669',
      id: 'a437bb08-3862-49f1-ae71-39c8451f1fa9',
    };
    const response = await tga.GatedVerifier.verify(conf);
    if (response.status) {
      // response.data.verified true means user has required NFT.
      return response.data.verified;
    } else {
      console.error(response.data.errorMessage);
      return false;
    }
  }
  
  return (
    <div>
      <div>
        <Header />
        <div
          className="max-w-[1600px] m-auto bg-no-repeat"
          style={{ backgroundImage: "url(/bg1.png)" }}
        >
          <div className="sm:pt-[90px] pt-[39px] sm:pb-0 pb-[50px] px-[25px]">
            <div className="max-w-[924px] m-auto md:h-[489px] ">
              <div className="md:flex justify-between items-center  ">
                <div className="md:block hidden">
                  <img src="brush.png" alt="" className="h-[404px] w-[500px]" />
                </div>
                <div className="lg:ml-[61px] md:ml-[25px]">
                  <p className="myfont1 sm:text-[50px] text-[40px] leading-[55px] font-[500] ">
                    30% off all makeup brushes & tools
                  </p>
                  <p className="text-[25px] font-[300] myfont1 md:mt-[48px] mt-[15px]">
                    For all YAS Cosmetics Foundation Card owners
                  </p>
                  <div
                    onClick={checkTrue}
                    className="h-[74px] sm:w-[287px] flex justify-center items-center bg-[#1C1C1C] md:mt-[48px] mt-[15px] cursor-pointer"
                  >
                    <p className="text-white text-[22px] font-medium myfont1 ml-[10px]">
                      Claim Discount
                    </p>
                  </div>
                </div>
                <div className="md:hidden flex justify-center items-center mt-[15px]">
                  <img
                    src="brush.png"
                    alt=""
                    className="sm:h-[404px]  sm:w-[500px] h-[250px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F8FFFF] md:py-[70px] py-[70px] px-[25px]">
          <p className="text-[#1C1C1C] sm:text-[50px] text-[40px] myfont1 font-medium text-center">
            See what’s on offer...
          </p>
          <div className="overflow-scroll myscroll">
            <div className="max-w-[1400px] md:w-[100%] w-[920px] m-auto flex justify-between  items-center md:px-[50px]">
              <div className="grid grid-cols-3 gap-5 md:mt-[60px] mt-[30px]">
                <img src="/Frame 214.png" alt="" className="" />
                <img src="/Frame 216.png" alt="" className="" />
                <img src="/Frame 213.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[#F8FFFF] md:py-[70px] py-[50px] px-[25px]"
          style={{ backgroundImage: "url(/bg2.png)" }}
        >
          <p className="text-[#1C1C1C] sm:text-[30px] text-[22px] myfont1 font-medium text-center max-w-[900px] m-auto">
            To get this discount, make sure you have purchased from our
            foundation range and claimed your token
          </p>
          <div className="overflow-scroll myscroll">
            <div className="max-w-[900px] md:w-[100%] w-[920px] m-auto flex justify-between  items-center">
              <div className="grid grid-cols-3 gap-5 mt-[40px]">
                <img src="/Light 3.png" alt="" className="" />
                <img src="/Dark 3.png" alt="" />
                <img src="/Mid 3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={handleCloseModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex justify-center">
          <img src="/motiv.gif" alt="" className="h-[80px] w-[80px]" />
        </div>
        <h1 className="text-2xl mb-4 font-bold text-[30px] text-center myfont1">
          Success!
        </h1>
        <p className="text-center myfont1">
          Your discounts will be{" "}
          <span className="font-semibold"> automatically applied</span> to your
          basket as you shop. Close this tab to continue shopping.
        </p>
      </Modal>
    </div>
  );
}
