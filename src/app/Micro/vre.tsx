'use client';

import React, { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import Image from 'next/image';

const SubListItems: React.FC = () => {
  return (
    <ul className="list-disc my-3">
      <li>Reducing (Intravascular) Central Line infections</li>
      <li>Reducing Ventilator Associated Pneumonia</li>
      <li>Reducing Surgical Site Infections</li>
      <li>Reducing Central Line Infections</li>
      <li>Improving Staff and Visitor Hand Hygiene practices (Cleaning hands)</li>
      <li>Reducing Skin Breakdown</li>
    </ul>
  );
};

interface VreDataItem {
  question: string;
  answer: string | JSX.Element;
}

const vreData: VreDataItem[] = [
  {
    question: 'What is Vancomycin Resistant Enterococcus (VRE)?',
    answer: 'Vancomycin Resistant Enterococcus (VRE) is a type of enterococcus bacteria that has become resistant to vancomycin, an antibiotic that is often used to treat ordinary enterococcus infections. VRE can live in the gastrointestinal tract (bowel) of individuals without causing illness (called colonization), but it can also cause serious infections such as bacteremia (bacteria in the bloodstream). A health care associated infection with VRE (HA-VRE) is determined when symptoms of infection occur in people after they have been in hospital for more 72 hours.'
  },
  {
    question: 'How is VRE Spread?',
    answer: 'VRE in healthcare settings is spread through direct contact with contaminated hands, usually those of health care workers who acquire it from contact with patients who are colonized or infected with VRE, or after handling contaminated material or equipment. The unrecognized colonized patient increases the risk for spread to other patients.'
  },
  {
    question: 'What are the risk factors for VRE Bacteremia?',
    answer: 'Typical risk factors for VRE bacteremia include severity of illness, presence of invasive medical devices such as intravenous catheter, invasive surgical procedures, and colonization with VRE.'
  },
  {
    question: 'What are we doing to reduce healthcare associated infections at Hamilton Health Sciences?',
    answer: <SubListItems />
  }
];

const Vre: React.FC = () => {
  const [activePanel, setActivePanel] = useState<number[]>([]);

  const handlePanelClick = (index: number) => {
    setActivePanel((prevActivePanel) =>
      prevActivePanel.includes(index)
        ? prevActivePanel.filter((item) => item !== index)
        : [...prevActivePanel, index]
    );
  };

  const listItems = vreData.map((data, index) => (
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
          VRE
        </h1>
        <Image
          src='/vre.jpg'
          layout="responsive"
          alt="Agar plate with VRE growing"
          sizes="100vw"
          width={100}
          height={100}
          className="object-contain rounded-lg"
        />
      </div>
      <ul className="w-3/5">{listItems}</ul>
    </div>
  );
};

export default Vre;
