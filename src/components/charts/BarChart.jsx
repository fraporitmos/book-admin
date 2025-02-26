import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Ventas 2024 vs 2025",
    },
  },
};

const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const dataBefore = [56, 130, 96, 40, 87, 140, 120];
const dataAfter = [126, 140, 160, 170, 180, 190, 200];

export const data = {
  labels,
  datasets: [
    {
      label: "2024",
      data: dataBefore.map((item) => item),
      backgroundColor: "rgba(24, 30, 43, 0.335)",
    },
    {
      label: "2025",
      data: dataAfter.map((item) => item),
      backgroundColor: "rgba(6, 85, 254, 0.567)",
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
