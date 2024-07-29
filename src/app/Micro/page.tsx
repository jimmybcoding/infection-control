'use client';

import { useState } from 'react';
import Image from 'next/image';
import Mrsa from './mrsa';
import Vre from './vre';
import { MdArrowDropDown } from 'react-icons/md';

const Micro: React.FC = () => {
  const [pickedBacteria, setPickedBacteria] = useState<string>("");

  const handleButtonClick = (bacteria: string) => {
    setPickedBacteria(bacteria);
  };

  return (
    <>
      <div className="w-full min-w-96 min-h-screen flex justify-center items-center mx-auto bg-red-400">
        <div className="w-2/5 text-center text-3xl font-bold text-gray-700">
          <p className="mt-10 text-gray-700 font-mono">
            Healthcare Associated
            <br />
            MRSA/VRE
          </p>
          <Image
            src="/mrsa.jpg"
            layout="responsive"
            alt="Agar plate with MRSA growing"
            sizes="100vw"
            width={100}
            height={100}
            className="object-contain rounded-lg"
          />
        </div>
      </div>
      <div className="w-screen min-w-96 mx-auto py-5 text-center bg-red-400">
        <p className="mb-2 text-xs text-gray-700 font-bold">
          Click below to learn more
        </p>
        <button
          className="flex justify-center w-1/5 min-w-max py-1 px-2 mx-auto my-1 border-2 border-gray-700 bg-gray-700 text-red-400 text-3xl rounded-md font-bold"
          onClick={() => handleButtonClick("MRSA")}
        >
          MRSA
          <MdArrowDropDown />
        </button>
        <button
          className="flex justify-center w-1/5 min-w-max py-1 px-2 mx-auto my-1 border-2 border-gray-700 bg-gray-700 text-red-400 text-3xl rounded-md font-bold"
          onClick={() => handleButtonClick("VRE")}
        >
          VRE
          <MdArrowDropDown />
        </button>
      </div>
      {pickedBacteria === "MRSA" ? <Mrsa /> : pickedBacteria === "VRE" ? <Vre /> : null}
    </>
  );
};

export default Micro;
