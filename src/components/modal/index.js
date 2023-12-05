import React, { useState } from "react";

export default function Modal({ isOpen, onClose, children }) {
  return (
    <div className="">
      <>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-[25px]">
            <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
            <div className="bg-white p-8 rounded-[24px] z-50 max-w-[440px]  ">
              {children}
            </div>
          </div>
        )}
      </>
    </div>
  );
}
