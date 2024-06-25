'use client'
import Image from "next/image"
import { useState } from "react"

const Cdiff: React.FC = () => {

  const [rate, setRate] = useState<string>();
  const [cdiffCases, setCdiffCases] = useState<number>(0);
  const [cdiffDays, setCdiffDays] = useState<number>(0);
  
  const onSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    
    if (cdiffCases === 0) {
      alert('No dividing by zero, friend');
      return;
    }
    const ratePlaceHolder: number = cdiffCases / cdiffDays * 1000
    setRate(ratePlaceHolder.toFixed(2));
  }

  const onCaseChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = value ? parseFloat(value) : 0;
    setCdiffCases(numericValue);
  }

  const onDayChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = value ? parseFloat(value) : 0;
    setCdiffDays(numericValue);
  }


  return (
  <>
    <section className="grid grid-cols-2 text-center bg-yellow-900 rounded-lg text-slate-200 w-4/5 min-w-96 mx-auto my-5 p-2 shadow-2xl shadow-yellow-400">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold font-mono">
          C. diff
        </h1>
        <p>
          Clostridium difficile (C. difficile) is a spore-forming bacteria that is present in the environment and can affect up to 3-5% of adults in the community without causing symptoms. C. difficile has been a known cause of healthcare-associated diarrhea for about 30 years. C. difficile can be picked up on the hands from exposure in the environment, and can get into the stomach once the mouth is touched, or if food is handled and then swallowed.
        </p>
      </div>
      <div className="relative flex flex-col">
        <Image 
        src="/cdiff.jpg"
        alt="c diff risk factors"
        fill
        className="object-contain"
        sizes="100vw"
        >
        </Image>
      </div>
    </section>
    <section className="grid grid-cols-2 text-center bg-yellow-900 rounded-lg text-slate-200 w-4/5 min-w-96 mx-auto my-5 p-2 shadow-2xl shadow-yellow-400">
      <div className="relative flex flex-col">
        <Image
        src="/cdiff2.jpg"
        alt="c diff in the GI"
        fill 
        className="object-contain"
        sizes="100vw"
        >
        </Image>
      </div>
      <div className="flex flex-col">
      <h1 className="text-2xl font-bold font-mono">
        What is Healthcare Associated CDI?
      </h1>
      <p>
        A healthcare associated infection is determined when signs and symptoms develop
        after 72 hours of admission to the hospital OR readmission to hospital within 28 days.
        The Healthcare associated CDI rate is the number of cases per 1000 patient days per
        month. Patients under 1 year of age are not included in the patient day denominator
        data as C. difficile is part of the normal bowel flora in this age group. 
      </p>
      </div>
    </section>
    <form onSubmit={onSubmit} className="flex flex-col gap-2 bg-yellow-900 rounded-lg text-slate-200 w-4/5 min-w-96 mx-auto my-5 p-2 shadow-2xl shadow-yellow-400">
        <div className='p-2 font-bold text-center text-2xl font-mono'>
          C.diff Rate Calculation
        </div>
        <label htmlFor="newCases">Number of new C.diff cases in month:</label>
        <input 
          type="number" 
          name="newCases" 
          className="border-2 border-black rounded-md p-2 w-1/2 text-yellow-900" 
          onChange={onCaseChangeHandler} 
          />
        <label htmlFor="">Number of patient days in month</label>
        <input 
          type="number" 
          name="days" 
          className="border-2 border-black rounded-md p-2 w-1/2 text-yellow-900" 
          onChange={onDayChangeHandler}
          />
        <button type="submit" className="border-black border-2 rounded-md hover:opacity-60 mx-auto w-1/2 font-bold">
          Submit
        </button>
        <p className="font-extrabold text-2xl">
          Rate: {rate}%
        </p>
        <p className="text-xs">
          per 1000 patient days*
        </p>
      </form>
      <Image
      src='/bristol.jpg'
      alt="bristol stool rating chart"
      sizes="100vw"
      className="object-contain w-3/5 min-w-96 mx-auto"
      width={100}
      height={100}
      >   
      </Image>
  </>
  )
}

export default Cdiff
