import { Box, Card } from "@mui/material";
import React from "react";

import { Bar } from "react-chartjs-2";
import { barGraphData } from "../../Consts";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  scales,
  plugins,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Bargraph = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
        },
        border: {
          display: true,
          color: "rgba(255, 255, 255, 0.8)",
          width: 2,
        },
      },
      y: {
        grid: {
          color: "#6B7280",
        },
        ticks: {
          color: "#6B7280",
          display: true,
        },
      },
    },
  };

  return (
    <Box
      sx={{
        width: "1022px",
        height: "368px",
        border: "1px solid #374151",
        borderRadius: "8px",
        overflow: "hidden", // Ensure no overflow from the container
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "20px",
          boxSizing: "border-box", // Ensure padding is included in the box size
        }}
      >
        <Bar options={options} data={barGraphData} />
      </Box>
    </Box>
  );
};

export default Bargraph;
