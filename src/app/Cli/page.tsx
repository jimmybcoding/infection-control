'use client'
import Image from "next/image";
import { useState } from "react";

const Page: React.FC = () => {
  const [newCliCases, setNewCliCases] = useState<number>(0);
  const [cliDays, setCliDays] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (newCliCases === 0) {
      alert('No dividing by zero, friend');
      return;
    }
    const ratePlaceHolder: number = cliDays / newCliCases *100
    setRate(ratePlaceHolder);
  };


  const onCaseChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = value ? parseFloat(value) : 0;
    setCliDays(numericValue);
  }

  const onDayChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = value ? parseFloat(value) : 0;
    setNewCliCases(numericValue);
  }

  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-6 w-2/3 min-w-72 font-bold gap-2 p-2">
      <div className='p-2 font-bold text-left text-2xl shadow-questions border-4 border-purple-400 font-mono'>
        Central Line-Associated Bloodstream Infection - CLI
      </div>
      <h1 className="font-bold text-2xl">
        What is a CLI?
      </h1>
      <p>
        {`CLI occurs when a central venous catheter or "line" placed into a patient's vein gets infected. This happens when bacteria grow in the line and spreads to the patient's bloodstream.`}
      </p>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <div className='p-2 font-bold text-left text-2xl shadow-questions border-4 border-purple-400 font-mono'>
          CLI Rate Calculation
        </div>
        <label htmlFor="newCases">Number of new CLI ICU cases in month:</label>
        <input 
          type="number" 
          name="newCases" 
          className="border-2 border-black rounded-md p-2" 
          onChange={onCaseChangeHandler} 
          />
        <label htmlFor="">Number of central line days in month</label>
        <input 
          type="number" 
          name="days" 
          className="border-2 border-black rounded-md p-2" 
          onChange={onDayChangeHandler}
          />
        <button type="submit" className="border-black border-2 rounded-md hover:opacity-60">
          Submit
        </button>
        <p className="font-extrabold text-2xl">
          Rate: {Math.round(rate)}%
        </p>
      </form>
      <Image
        src="/cli.jpg"
        sizes="100vw"
        fill
        alt='Central Line Diagram'
        className="-z-10 object-cover opacity-30"
      />
    </div>
  );
}

export default Page;