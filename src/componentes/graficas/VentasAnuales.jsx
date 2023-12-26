import { yearCounts } from "../../js/ventas";
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
} from "chart.js";
import { Line } from "react-chartjs-2";
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

const VentasAnuales = () => {
  const cantidadTotal = Object.values(yearCounts);
  const añolabel = Object.keys(yearCounts);
  const dataventas = {
    labels: añolabel,
    datasets: [
      {
        fill:true,
        label: "Cantidad de copias vendidas por año",
        data: cantidadTotal,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(239,68,68,0.54)",
      },
    ],
  };

  const misoptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      title: {
        display: true,
        text: "Ventas anuales de todos los volumenes",
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
    <>
      <Line
        options={misoptions}
        data={dataventas}
        className="max-w-xl w-full"
      />
    </>
  );
};

export default VentasAnuales;
