'use client';

import { useState } from 'react';
import Image from 'next/image';
import Mrsa from './mrsa';
import Vre from './vre';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const Micro: React.FC = () => {
  const [pickedBacteria, setPickedBacteria] = useState<string>("");

  const handleButtonClick = (bacteria: string) => {
    setPickedBacteria(bacteria);
  };

  return (
  <div className='min-h-screen container'>
    <div className="min-h-[50vh] p-3 flex flex-col justify-center items-center bg-gradient-to-r from-red-400 via-slate-300 to-slate-200">
      <div className="w-full max-w-lg text-center">
        <p className="mt-10 text-3xl font-bold text-gray-700 font-mono">
          Healthcare Associated
          <br />
          MRSA/VRE
        </p>
        <Image
          src="/mrsa.jpg"
          alt="Agar plate with MRSA growing"
          sizes="100vw"
          width={100}
          height={100}
          className="w-1/2 h-auto rounded-lg my-5 mx-auto"
        />
      </div>
      <div className="mt-5 text-center">
        <p className="text-xs text-gray-700 font-bold mb-3">
          Click below to learn more
        </p>
        <div className="space-y-2">
          <button
            className="flex items-center justify-center w-40 py-2 px-4 border-2 border-gray-700 bg-gray-700 text-red-400 text-xl rounded-md font-bold mx-auto"
            onClick={() => handleButtonClick(pickedBacteria !== "MRSA" ? "MRSA" : "")}
          >
            MRSA
            {pickedBacteria === "MRSA" ? <MdArrowDropUp className="ml-2" /> : <MdArrowDropDown className="ml-2" />}
          </button>
          <button
            className="flex items-center justify-center w-40 py-2 px-4 border-2 border-gray-700 bg-gray-700 text-red-400 text-xl rounded-md font-bold mx-auto"
            onClick={() => handleButtonClick(pickedBacteria !== "VRE" ? "VRE" : "")}
          >
            VRE
            {pickedBacteria === "VRE" ? <MdArrowDropUp className="ml-2" /> : <MdArrowDropDown className="ml-2" />}
          </button>
        </div>
      </div>
      <div className="mt-5">
        {pickedBacteria === "MRSA" && <Mrsa />}
        {pickedBacteria === "VRE" && <Vre />}
      </div>
    </div>
  </div>
  );
};

export default Micro;
