'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowDropDown } from 'react-icons/md';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      {menuOpen ? (
        <div
          className="sticky flex flex-col gap-2 bg-gray-800 text-slate-200 h-screen w-1/5 min-w-max rounded-r-lg pr-5"
          onMouseLeave={() => setMenuOpen(false)}
        >
          <div className="w-24 h-24">
            <Image
              src="/icon.jpg"
              sizes="100vw"
              height={100}
              width={100}
              layout="responsive"
              className="object-contain"
              alt="menu icon"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
          <Link href="/" className="mx-auto w-full border-b-2 border-slate-200 rounded-lg hover:opacity-70 hover:border-2 font-bold p-2">
            Home
          </Link>
          <Link href="/Cli" className="mx-auto w-full border-b-2 border-slate-200 rounded-lg hover:opacity-70 hover:border-2 font-bold p-2">
            CLI
          </Link>
          <Link href="/CDiff" className="mx-auto w-full border-b-2 border-slate-200 rounded-lg hover:opacity-70 hover:border-2 font-bold p-2">
            CDI
          </Link>
          <Link href="/Hand" className="mx-auto w-full border-b-2 border-slate-200 rounded-lg hover:opacity-70 hover:border-2 font-bold p-2">
            Hand Hygiene
          </Link>
          <Link href="/HSMR" className="mx-auto w-full border-b-2 border-slate-200 rounded-lg hover:opacity-70 hover:border-2 font-bold p-2">
            HSMR
          </Link>
          <Link href="/Micro" className="mx-auto w-full border-b-2 border-slate-200 rounded-lg hover:opacity-70 hover:border-2 font-bold p-2">
            MRSA/VRE
          </Link>
          <Link href="/Surgery" className="mx-auto w-full border-b-2 border-slate-200 rounded-lg hover:opacity-70 hover:border-2 font-bold p-2">
            SSCL/SSI
          </Link>
          <Link href="/VAP" className="mx-auto w-full border-b-2 border-slate-200 rounded-lg hover:opacity-70 hover:border-2 font-bold p-2">
            VAP
          </Link>
        </div>
      ) : (
        <div className="flex justify-start w-full min-w-96">
          <div className="w-24 h-24">
            <Image
              src="/icon.jpg"
              sizes="100vw"
              height={100}
              width={100}
              layout="responsive"
              className="object-contain"
              alt="menu icon"
              onClick={() => setMenuOpen(!menuOpen)}
              onMouseEnter={() => setMenuOpen(true)}
            />
          </div>
          <MdArrowDropDown />
          <p className="mb-2 ml-2 font-lora text-3xl sm:text-5xl place-self-center">
            Infection Control Quality Indicators
          </p>
        </div>
      )}
    </>
  );
};

export default Nav;

