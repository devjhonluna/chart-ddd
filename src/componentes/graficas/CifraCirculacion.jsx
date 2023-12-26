import { circulationDate } from "../../js/ventas";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const circulacionLabel = circulationDate.map((item) => item.volumenTitulo);
const cifraRegistrada = circulationDate.map((item) => item.copias);

const CifraCirculacion = () => {
  const datacirculacion = {
    labels: circulacionLabel,
    datasets: [
      {
        label: "Cifra registrada",
        data: cifraRegistrada,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "red",
      },
    ],
  };
  const misoptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Cifra de circulacion",
        color: "rgb(239,68,68)",
        font: {
          size: 18,
          weight:'bold'
        },
      },
    },
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: "rgb(255, 99, 132)" },
      },
    },
  };
  return (
    <Line
      options={misoptions}
      data={datacirculacion}
      className="max-w-xl w-full"
    />
  );
};

export default CifraCirculacion;
