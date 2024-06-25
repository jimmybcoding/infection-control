'use client';

import React, { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import Image from 'next/image';

const SubListItems: React.FC = () => {
  return (
    <ol className="list-disc my-3">
      <li>Reducing (Intravascular) Central Line infections</li>
      <li>Reducing Ventilator Associated Pneumonia</li>
      <li>Reducing Surgical Site Infections</li>
      <li>Reducing Central Line Infections</li>
      <li>Improving Staff and Visitor Hand Hygiene practices (Cleaning hands)</li>
      <li>Reducing Skin Breakdown</li>
    </ol>
  );
};

interface MicroDataItem {
  question: string;
  answer: string | JSX.Element;
}

const microData: MicroDataItem[] = [
  {
    question: 'What is Methicillin-resistant Staphylococcus aureus (MRSA)?',
    answer: 'Methicillin-resistant Staphylococcus aureus (MRSA) is a type of staph bacteria that has become resistant to many of the antibiotics used to treat ordinary staph infections. MRSA can live on the skin, nose or other parts of the body without causing illness, (called colonized or carrier) but it can also cause serious infections such as bacteremia (bacteria in the bloodstream). A health care associated infection with MRSA (HA-MRSA) is determined when symptoms of infection occur in people after they have been in hospital for more 72 hours.'
  },
  {
    question: 'How is MRSA Spread?',
    answer: 'MRSA in healthcare settings is spread through direct contact with contaminated hands, usually those of health care workers who acquire it from contact with patients who are colonized or infected with MRSA, or after handling contaminated material or equipment. The unrecognized colonized patient increases the risk for spread to other patients.'
  },
  {
    question: 'What are the risk factors for MRSA Bacteremia?',
    answer: 'Typical risk factors for MRSA bacteremia include severity of illness, presence of invasive medical devices such as intravenous catheter, invasive surgical procedures, and colonization with MRSA.'
  },
  {
    question: 'What are we doing to reduce healthcare associated infections at Hamilton Health Sciences?',
    answer: <SubListItems />
  }
];

const Mrsa: React.FC = () => {
  const [activePanel, setActivePanel] = useState<number[]>([]);

  const handlePanelClick = (index: number) => {
    setActivePanel((prevActivePanel) =>
      prevActivePanel.includes(index)
        ? prevActivePanel.filter((item) => item !== index)
        : [...prevActivePanel, index]
    );
  };

  const listItems = microData.map((data, index) => (
    <div key={index}>
      <li
        className="flex font-bold text-2xl my-3 border-b-2 border-red-400 cursor-pointer"
        onClick={() => handlePanelClick(index)}
      >
        {data.question}
        {activePanel.includes(index) ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </li>
      {activePanel.includes(index) && <div className="my-3">{data.answer}</div>}
    </div>
  ));

  return (
    <div className="flex gap-2 justify-center w-4/5 min-w-96 mx-auto text-gray-700">
      <div className="w-1/5 min-w-28">
        <h1 className="text-4xl font-bold">
          MRSA
        </h1>
        <Image
          src='/mrsa-infection.jpg'
          layout="responsive"
          alt="Agar plate with MRSA growing"
          sizes="100vw"
          width={100}
          height={100}
          className="object-contain rounded-lg mb-8"
        />
         <Image
            src="/caution.jpg"
            layout="responsive"
            alt="MRSA/VRE contact precautions poster"
            sizes="100vw"
            width={100}
            height={100}
            className="object-contain rounded-lg mb-8"
          /> 
            <Image
            src="/swab.jpg"
            layout="responsive"
            alt="MRSA/VRE swab"
            sizes="100vw"
            width={100}
            height={100}
            className="object-contain rounded-lg mb-8"
          /> 
      </div>
      <ul className="w-3/5">{listItems}</ul>
    </div>
  );
};

export default Mrsa;