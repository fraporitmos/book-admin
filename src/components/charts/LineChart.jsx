import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Carritos completados en 2024 y 2025 ',
    },
  },
};

const labels = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const cartAbandoned = [20, 34,25,10,40, 48,10]
const cartCompleted = [25, 23,49, 68, 73, 89,120]

export const data = {
  labels,
  datasets: [
    {
      label: '2024',
      data: cartAbandoned.map((item) => item),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '2025',
      data: cartCompleted.map((item) =>item),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



const LineChart = () => {
    return <Line options={options} data={data} />;
};

export default LineChart;
