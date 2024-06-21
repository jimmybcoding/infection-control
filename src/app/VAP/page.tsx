import Image from 'next/image';

const VAP: React.FC = () => {
  return (
    <>
      <div className="w-2/5 min-w-96 mx-auto">
        <Image
          src="/vap.jpg"
          layout="responsive"
          alt="Vap cartoon image"
          sizes="100vw"
          width={100}
          height={100}
          className="object-contain rounded-lg animate-pulse"
        />
        <h1 className="border-2 border-blue-400 p-2 text-4xl font-bold text-center animate-pulse font-mono my-0">
          Ventilator Associated Pneumonia (VAP)
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 w-4/5 mx-auto mt-2 min-w-96 shadow-custom p-2">
        <div>
          <h1 className="text-center font-bold text-2xl">
            What is ventilator-associated pneumonia?
          </h1>
          <p>
            VAP is defined as pneumonia (a serious lung infection) that can occur in patients (specifically intensive care unit patients) who need assistance breathing with a mechanical ventilator (machine to assist breathing) for at least 48 hours.
          </p>
        </div>
        <div>
          <h1 className="text-center font-bold text-2xl">
            What are the Risk Factors for VAP?
          </h1>
          <ul className="list-disc">
            <li>Being on a ventilator for more than five days</li>
            <li>Recent hospitalization (last 90 days)</li>
            <li>Residence in a nursing home</li>
            <li>Prior antibiotic use (last 90 days)</li>
            <li>Dialysis treatment in a clinic</li>
          </ul>
        </div>
        <div>
          <h1 className="text-center font-bold text-2xl">What is a case of VAP?</h1>
          <p>A VAP case is defined as:</p>
          <ul className="list-disc p-3">
            <li>Including only intensive care unit patients 18 years and older who are on ventilators (occasionally or continuously)</li>
            <li>Pneumonia appears at least 48 hours after the patient was placed on a ventilator.</li>
          </ul>
        </div>
        <div>
          <h1 className="text-center font-bold text-2xl">
            What determines the rate?
          </h1>
          <p>
            The VAP rate is determined by the total number of newly diagnosed VAP cases in the ICU after at least 48 hours of mechanical ventilation, divided by the number of ventilator days in that month, multiplied by 1,000. Ventilator days are the number of days spent on a ventilator for all patients in the ICU 18 years and older.
          </p>
        </div>
      </div>
    </>
  );
};

export default VAP;

