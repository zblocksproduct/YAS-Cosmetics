import React, { useState } from "react";
import { AccordianData, FaqsData } from "../../data";
const Accordian = () => {
  const [active, setActive] = useState({
    open: false,
    indexOpen: "",
  });
  const toggleActive = (index) => {
    if (index === active.indexOpen) {
      setActive({ open: false, indexOpen: "" });
    } else {
      setActive({ open: true, indexOpen: index });
    }
  };
  return (
    <React.Fragment>
      <div className="">
        {AccordianData.map((item, index) => (
          <div
            key={index}
            className=" border-b border-[#DCDCDC] pb-[22px] mt-5 cursor-pointer"
          >
            <div
              onClick={() => toggleActive(index)}
              className="flex justify-between items-center xl:w-[737px] lg:w-[502px] "
            >
              <p className="text-white myfont1  sm:text-[25px] text-base font-[500]">
                {item.question}
              </p>
              {active.open && active.indexOpen === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              )}
            </div>
            {active.open && active.indexOpen === index ? (
              <div className=" flex mt-[22px] xl:w-[737px] lg:w-[502px]">
                <p className="border-l-  text-[16px]  text-white   font-[300]">
                  {item.ans}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Accordian;
