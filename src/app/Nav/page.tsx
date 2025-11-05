'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className='fixed top-5 left-5 z-50 cursor-pointer'
      >
        <Image 
          src={'/menu-icon.png'}
          alt='Hand washing menu icon'
          height={48}
          width={48}
        />
      </button>
      
      <div className={`fixed top-0 left-0 h-screen w-64 bg-red z-40 font-mono font-semibold text-white transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className='flex flex-col gap-6 py-24 px-6 bg-gradient-to-b from-cyan-900 to-emerald-900 opacity-90'>
          <Link 
          href="/"
          onClick={() => setMenuOpen(false)}
          className='border-b-2 hover:scale-105 transition-transform'
          >
            Home
          </Link>
           <Link 
          href="/Cli"
          onClick={() => setMenuOpen(false)}
          className='border-b-2 hover:scale-105 transition-transform'
          >
            CLI
          </Link>
           <Link 
          href="/CDiff"
          onClick={() => setMenuOpen(false)}
          className='border-b-2 hover:scale-105 transition-transform'
          >
            C. Difficile
          </Link>
           <Link 
          href="/Hand"
          onClick={() => setMenuOpen(false)}
          className='border-b-2 hover:scale-105 transition-transform'
          >
            Hand Hygiene
          </Link>
           <Link 
          href="/HSMR"
          onClick={() => setMenuOpen(false)}
          className='border-b-2 hover:scale-105 transition-transform'
          >
            HSMR
          </Link>
           <Link 
          href="/Micro"
          onClick={() => setMenuOpen(false)}
          className='border-b-2 hover:scale-105 transition-transform'
          >
            MRSA/VRE
          </Link>
           <Link 
          href="/Surgery"
          onClick={() => setMenuOpen(false)}
          className='border-b-2 hover:scale-105 transition-transform'
          >
            SSCL/SSI
          </Link>
           <Link 
          href="/VAP"
          onClick={() => setMenuOpen(false)}
          className='border-b-2 hover:scale-105 transition-transform'
          >
            VAP
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;

