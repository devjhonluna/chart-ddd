import { volumeSales } from "../../js/ventas";

import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
);

const volLabel=volumeSales.map(item=>item.title)
const cantidad=volumeSales.map(item=>item.cantidad)
const VentasPorVolumen = () => {

  const dataventas={
    labels:volLabel,
    datasets:[{
      label:'Cantidad de copias vendidas',
      data:cantidad,
      backgroundColor: 'rgb(239,68,68)',}
    ],
  }

  const misoptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
    title:{
      display:true,
      text: "Ventas por volumen",
      color: "rgb(239,68,68)",
      font: {
        size: 18,
        weight:'bold'
      },
    }},
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
        }
    }
};
  
  return (
   <>
      <Bar data={dataventas} options={misoptions} />
   </>
  )
}

export default VentasPorVolumen