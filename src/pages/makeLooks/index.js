import React, { useState } from "react";
import * as tga from "../../components/tga-verifier.js";
import Header1 from "../../components/header1";
import Footer1 from "../../components/footer1";
import Modal from "../../components/modal";

export default function MakeupLooks() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

async function checkTrue() {
    if (await verify()) {
      handleOpenModal();
    }
  }

  async function verify() {
    const conf = {
      code: 'Z1701798036209866',
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
      <Header1 />
      <div className="bg-[#f7f0e7] lg:pt-[70px] pt-[20px] lg:pb-[120px] pb-[50px] px-[25px]">
        <div className="max-w-[1159px] w-[100%] m-auto lg:flex items-center pb-[120px]">
          <img
            src="/make.png"
            alt=""
            className="lg:w-[483px] lg:block hidden "
          />
          <div className="lg:ml-[48px]">
            <p className="sm:text-[45px] text-[30px] text-[#4F2323] font-bold sm:text-start text-center">
              CREATE MAKEUP LOOKS FOR ANY MOMENT
            </p>
            <p className="text-[#4F2323]  ms:text-[16px] text-[14px] sm:mt-[30px] mt-[15px]">
              Transform your makeup skills with makeup artist John Brandy. Build
              your skincare routine, curate your makeup kit, and learn three of
              Sir John's most sought-after looks: the “No- Makeup”, the
              “Everyday”, and the “Icon” look.
            </p>
          </div>
          <img
            src="/make.png"
            alt=""
            className="lg:w-[483px] lg:hidden mt-[20px]"
          />
        </div>
        <div className="xl:px-[80px] overflow-x-scroll  myscroll">
          <div className="max-w-[1200px] lg:w-[100%] w-[1400px] m-auto flex justify-between items-center ">
            <div className="xl:w-[237px] md:w-[200px] w-[237px] bg-white">
              <img src="/Screen1.png" alt="" />
              <div className="py-[20px]">
                <p className="text-[#4F2323] text-[14px] text-center">
                  Section 1
                </p>
                <p className="font-medium text-center mt-[7px] text-[#4F2323]">
                  Your Makeup Kit: The <br /> Must Haves
                </p>
              </div>
            </div>
            <div className="xl:w-[237px] md:w-[200px] w-[237px] bg-white">
              <img src="/makeup.png" alt="" />
              <div className="py-[20px]">
                <p className="text-[#4F2323] text-[14px] text-center">
                  Section 3
                </p>
                <p className="font-medium text-center mt-[7px] text-[#4F2323]">
                  Your Makeup Kit: The <br /> Must Haves
                </p>
              </div>
            </div>
            <div className="xl:w-[237px] md:w-[200px] w-[237px] bg-white">
              <img src="/beautiful.png" alt="" />
              <div className="py-[20px]">
                <p className="text-[#4F2323] text-[14px] text-center">
                  Section 5
                </p>
                <p className="font-medium text-center mt-[7px] text-[#4F2323]">
                  The “Everyday” Look
                </p>
                <br />
              </div>
            </div>
            <div className="xl:w-[237px] md:w-[200px] w-[237px] bg-white">
              <img src="/some.png" alt="" />
              <div className="py-[20px]">
                <p className="text-[#4F2323] text-[14px] text-center">
                  Section 7
                </p>
                <p className="font-medium text-center mt-[7px] text-[#4F2323]">
                  Conclusion
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className="sm:mt-[70px] mt-[30px]">
            <div className="lg:max-w-[1000px] max-w-[800px] lg:w-[100%] w-[800px] border-b border-[#4F2323] lg:m-auto  relative  mx-[100px]">
              <div className="absolute top-[-10px] left-0 right-0">
                <div className="w-full flex justify-between">
                  <div className="w-[17px] h-[17px] rounded-full bg-[#4F2323]" />
                  <div className="w-[17px] h-[17px] rounded-full bg-[#4F2323]" />
                  <div className="w-[17px] h-[17px] rounded-full bg-[#4F2323]" />
                  <div className="w-[17px] h-[17px] rounded-full bg-[#4F2323]" />
                  <div className="w-[17px] h-[17px] rounded-full bg-[#4F2323]" />
                  <div className="w-[17px] h-[17px] rounded-full bg-[#4F2323]" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-[850px] max-w-[1000px] lg:w-[100%] w-[1000px] flex  justify-between lg:m-auto sm:pt-[60px] pt-[30px] mx-[200px]">
            <div className="w-[237px] bg-white">
              <img src="/Screenshot.png" alt="" />
              <div className="py-[20px]">
                <p className="text-[#4F2323] text-[14px] text-center">
                  Section 2
                </p>
                <p className="font-medium text-center mt-[7px] text-[#4F2323]">
                  Your Skincare Routine:
                  <br />
                  Loving the Skin You’re In
                </p>
              </div>
            </div>
            <div className="w-[237px] bg-white">
              <img src="/appealing.png" alt="" />
              <div className="py-[20px]">
                <p className="text-[#4F2323] text-[14px] text-center">
                  Section 4
                </p>
                <p className="font-medium text-center mt-[7px] text-[#4F2323]">
                  The “No-Makeup” Look
                </p>
              </div>
            </div>
            <div className="w-[237px] bg-white">
              <img src="/beauty.png" alt="" />
              <div className="py-[20px]">
                <p className="text-[#4F2323] text-[14px] text-center">
                  Section 6
                </p>
                <p className="font-medium text-center mt-[7px] text-[#4F2323]">
                  The “Icon” Look
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
      <div className="bg-[#f7f0e7] sm:py-[80px] py-[60px] px-[25px]">
        <p className="sm:text-[40px] text-[30px] font-bold text-[#4F2323] text-center">
          Ready to get started?
        </p>
        <div
          onClick={checkTrue}
          className="cursor-pointer bg-[#4F2323] font-medium max-w-[412px] w-[100%] m-auto h-[71px] rounded-full sm:text-[20px] text-[16px] flex justify-center items-center text-white mt-[20px]"
        >
          Claim using my YAS Foundation Card
        </div>
        <div className="max-w-[412px] text-[10px] m-auto text-center mt-[20px]">
          By continuing, you accept the zblocks platform{" "}
          <span className="text-[#F47133]"> Terms and Conditions</span> and
          agree to be contacted via email.
        </div>
        <div className="max-w-[1164px] w-[100%] flex items-center m-auto mt-[57px]">
          <div className="grid grid-cols-3">
            <img src="/Figure.png" alt="" />
            <img src="/Figure1.png" alt="" />
            <img src="/Figure2.png" alt="" />
          </div>
        </div>
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
          You now have access to the{" "}
          <span className="font-semibold"> free online course</span>.
          Close this tab to continue shopping.
        </p>
      </Modal>
    </div>
  );
}
