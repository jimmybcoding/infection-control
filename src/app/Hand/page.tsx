'use client'
import { Bar } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

const Hand: React.FC  = () => {
  return (
    <div className='mx-auto p-2 w-4/5 min-w-min shadow-custom'>
      <p className='font-bold text-2xl'>
        HHS Hand Hygiene Percent Compliance Results by Site
      </p>
      <p className='leading-tight pb-2 border-b-2 border-black'>
        *Created using real HHS data
      </p>
      <section className='p-2'>
      One of the most common ways of reducing health care-associated infections in a health
      care setting is good hand hygiene practices by health care providers. Health care
      providers move from patient to patient and room to room while providing care and
      working in the patient environment. This movement provides many opportunities to
      spread organisms from patient to patient if hands are not cleaned between care.
      Monitoring hand hygiene practices is vital to improving rates and reduce health careassociated infections.
      </section>
      <h1 className='text-center font-extrabold border-b-2 border-black'>
        Percent compliance prior to initial patient contact with HCP
      </h1>
      <Bar 
      data={{
        labels: ["2016/2017","2017/2018","2018/2019","2019/2020"],
        datasets: [
          {
          label:"All Sites",
          pointStyle: 'rectRounded',
          barThickness: 15,
          data: [79,84,82,82],
          backgroundColor: ["black","black","black","black"],
          borderColor: ["black","black","black","black"],
          borderWidth: 0.5,
          },
          {
            label:"HGH",
            pointStyle: 'rectRounded',
            barThickness: 15,
            data: [76,81,82,81],
            backgroundColor: ["green","green","green","green"],
            borderColor: ["black","black","black","black"],
            borderWidth: 0.5,
          },
          {
            label:"JCC",
            pointStyle: 'rectRounded',
            barThickness: 15,
            data: [75,84,81,80],
            backgroundColor: ["purple","purple","purple","purple"],
            borderColor: ["black","black","black","black"],
            borderWidth: 0.5,
          },
          {
            label:"MUMC",
            pointStyle: 'rectRounded',
            barThickness: 15,
            data: [88,87,84,86], 
            backgroundColor: ["orange","orange","orange","orange"],
            borderColor: ["black","black","black","black"],
            borderWidth: 0.5,
          },
          {
            label:"SPH",
            pointStyle: 'rectRounded',
            barThickness: 15,
            data: [84,88,83,82], 
            backgroundColor: ["blue","blue","blue","blue"],
            borderColor: ["black","black","black","black"],
            borderWidth: 0.5,
          },
          {
            label:"WLM",
            pointStyle: 'rectRounded',
            barThickness: 15,
            data: [71,68,66,73],
            backgroundColor: ["red","red","red","red"],
            borderColor: ["black","black","black","black"],
            borderWidth: 0.5,
          }
        ]
      }}
      options={{
        maintainAspectRatio: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Year"
            }
          },
          y:
            {
              max:100,
              title: {
                display: true,
                text: "Percent Compliance"
              }
            } 
        }
      }} 
      >
      </Bar>
      <h1 className='text-center font-extrabold mt-4 border-b-2 border-black'>
        Percent compliance following patient contact with HCP
      </h1>
      <Bar 
      data={{
        labels: ["2016/2017","2017/2018","2018/2019","2019/2020"],
        datasets: [
          {
          label:"All Sites",
          pointStyle: 'rectRounded',
          barThickness: 15,
          data: [88,88,87,86],
          backgroundColor: ["black","black","black","black"],
          borderColor: ["black","black","black","black"],
          borderWidth: 0.5,
          },
          {
            label:"HGH",
            pointStyle: 'rectRounded',
            barThickness: 15,
            data: [87,88,86,85],
            backgroundColor: ["green","green","green","green"],
            borderColor: ["black","black","black","black"],
            borderWidth: 0.5,
          },
          {
            label:"JCC",
            pointStyle: 'rectRounded',
            barThickness: 15,
            data: [87,87,88,87],
            backgroundColor: ["purple","purple","purple","purple"],
            borderColor: ["black","black","black","black"],
            borderWidth: 0.5,
          },
          {
            label:"MUMC",
            pointStyle: 'rectRounded',
            barThickness: 15,
            data: [91,87,87,87], 
            backgroundColor: ["orange","orange","orange","orange"],
            borderColor: ["black","black","black","black"],
            borderWidth: 0.5,
          },
          {
            label:"SPH",
            pointStyle: 'rectRounded',
            barThickness: 15,
            data: [89,91,85,84], 
            backgroundColor: ["blue","blue","blue","blue"],
            borderColor: ["black","black","black","black"],
            borderWidth: 0.5,
          },
          {
            label:"WLM",
            pointStyle: 'rectRounded',
            barThickness: 15,
            data: [87,82,82,84],
            backgroundColor: ["red","red","red","red"],
            borderColor: ["black","black","black","black"],
            borderWidth: 0.5,
          }
        ]
      }}
      options={{
        maintainAspectRatio: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Year"
            }
          }, 
          y:
            {
              max:100,
              title: {
                display: true,
                text: "Percent Compliance"
              }
            } 
        }
      }} 
      >
      </Bar>
    </div>
  )
}

export default Hand;
              
    