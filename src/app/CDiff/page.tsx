import Image from "next/image"

const Cdiff: React.FC = () => {
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
    <section className="grid grid-cols-2 text-center bg-yellow-900 rounded-lg text-slate-200 w-4/5 min-w-96 mx-auto p-2 shadow-2xl shadow-yellow-400">
      <div className="relative flex flex-col">
        <Image
        src="/cdiff2.jpg"
        alt="c diff in the GI"
        fill className="object-contain"
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
  </>
  )
}

export default Cdiff
