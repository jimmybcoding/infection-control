'use client'
import Link from "next/link"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  scales: {
    y: {
      min:100
    }
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'HHS HSMR Line Chart',
    },
  },
};

const labels = ['2014/2015', '2015/2016', '2016/2017', '2017/2018', '2018/2019'];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'HHS HSMR',
      data: [118,114,122,118,107],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Hsmr: React.FC = () => {
  return (
    <div className="w-4/5 min-w-96 mx-auto my-2 p-2 shadow-custom">
        <h1 className="font-bold text-center text-3xl mb-2">
          Hospital standardized mortality ratio (HSMR)
        </h1>
        <p>
          Hospital standardized mortality ratio (HSMR) is an overall quality indicator that compares a hospital’s mortality rate with the national average, accounting for the types of patients cared for. HSMR is calculated as the ratio of the actual number of deaths to the expected number of deaths, multiplied by 100. It has been used by many hospitals worldwide to assess and analyze mortality rates and to identify areas for improvement.
        </p>
        <Link href={'https://www.cihi.ca/en/hospital-standardized-mortality-ratio-hsmr#:~:text=The%20hospital%20standardized%20mortality%20ratio,stay%2C%20comorbidities%20and%20admission%20status.'}>
          <button className="font-bold border-2 border-black text-white bg-black rounded-lg p-2">
            Link to HSMR resource
          </button>
        </Link>
        <Line options={options} data={data} />
        <p className="mt-2">
          *HSMR compares the number of deaths in a hospital with the national average of
          100 for the baseline year. It is calculated as the ratio of the actual number of
          deaths to the expected number of deaths, multiplied by 100. 
        </p>
    </div>

  )
}

export default Hsmr

