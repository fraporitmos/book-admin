import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getMonth } from "../../utils/Utils";

ChartJS.register(ArcElement, Tooltip, Legend);




export const data = {
  labels: ["Libros", "Revistas", "Comics"],
  datasets: [
    {
      label: `# Ventas en ${getMonth()} `,
      data: [650, 820, 430],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)"
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)"
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return <Pie data={data} />;
};

export default PieChart;
