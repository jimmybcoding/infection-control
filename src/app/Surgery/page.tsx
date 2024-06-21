'use client';

import Image from 'next/image';

const Surgery: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-4/5 mx-auto min-w-96">
      <div className="p-2 font-bold text-left text-2xl shadow-questions border-4 border-purple-400 font-mono">
        Surgical Site Infections - SSI
      </div>
      <p>
        A surgical site infection is an infection that occurs after surgery in the part of the body where the surgery took place. Most surgical site infections are caused by the patient's own bacterial flora. Some surgical site infections are more serious and can involve tissues under the skin, organs, or implanted material.
      </p>
      <div>
        <p className="font-bold">The risk of acquiring a surgical site infection is higher if you:</p>
        <ul className="list-disc">
          <li>Are an older adult</li>
          <li>Have a weakened immune system or other serious health problem such as diabetes</li>
          <li>Smoke</li>
          <li>Are malnourished</li>
          <li>Are very overweight</li>
        </ul>
      </div>
      
      <Image
        src="/ssi-info.jpg"
        alt="Surgical Site Infection Infographic"
        width={100}
        height={100}
        sizes="100vw"
        layout="responsive"
        className="object-contain rounded-lg min-w-24 max-w-screen-sm mx-auto"
      />

      <div className="p-2 font-bold text-left text-2xl shadow-questions border-4 border-purple-400">
        What is surgical site infection prevention?
      </div>
      <p>
        One of the ways to prevent surgical site infections is by giving patients an antibiotic within 60 minutes (for usual antibiotics) or within 120 minutes (for an antibiotic known as vancomycin) before they go into surgery. The SSI-prevention indicator will report the percentage of time the health care team gave patients antibiotics within the appropriate time period before the surgery. This will apply only to patients who are 18 years or older who are about to undergo primary hip or knee joint replacement surgery.
      </p>
      
      <div className="p-2 font-bold text-left text-2xl shadow-questions border-4 border-purple-400">
        What determines the rate?
      </div>
      <p>
        Number of hip/knee total joint replacement surgeries who received antibiotics within 60-120 minutes of incision, divided by total number of patients who had hip/knee total joint replacement surgeries, multiplied by 100.
      </p>
      
      <div className="p-2 font-bold text-left text-2xl shadow-questions border-4 border-purple-400">
        What are we doing to reduce Surgical Site Infections and improve patient safety at Hamilton Health Sciences?
      </div>
      <ul className="list-disc">
        <li>Monitoring all primary hip/knee joint replacements patients and implementing appropriate antibiotic selection and antibiotic administration within the appropriate time prior to surgery.</li>
        <li>Improving staff and visitor hand hygiene practices.</li>
      </ul>
      
      <Image
        src="/ssi.jpg"
        alt="Surgical Site Infection Classes"
        width={100}
        height={100}
        sizes="100vw"
        layout="responsive"
        className="object-contain rounded-lg min-w-24 max-w-screen-sm mx-auto"
      />
    </div>
  );
};

export default Surgery;
