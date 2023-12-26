import { Tabs, Tab } from "@nextui-org/tabs";
import VentasPorVolumen from "./graficas/VentasPorVolumen";
import CifraCirculacion from "./graficas/CifraCirculacion";
import VentasAnuales from "./graficas/VentasAnuales";
import { useState } from "react";
import Introduccion from "./Introduccion";

let tabItems = [
  {
    id: 1,
    label: "Introduccion",
    content: <Introduccion/>     
  },
  {
    id: 2,
    label: "Ventas por volumen",
    content: <VentasPorVolumen />,
  },
  {
    id: 3,
    label: "Cifras de Circulacion",
    content: <CifraCirculacion />,
  },
  {
    id: 4,
    label: "Ventas anuales",
    content: <VentasAnuales />,
  },
];
const TabNav = () => {
  const [selected, setSelected] = useState(1);
  return (
    <main className="flex flex-col w-full bg-[#0d1717] rounded-md  min-w-40 max-w-80 sm:min-w-80 sm:max-w-xl mx-auto  shadow-sm shadow-red-500 ">
      <Tabs
        aria-label="Dynamic tabs"
        items={tabItems}
        selectedKey={selected}
        onSelectionChange={setSelected}
        color="danger"
       
        classNames={{
          base:"gap-2 mx-auto",
          tabList:"bg-transparent flex-wrap sm:flex-nowrap",
          tabContent:"text-red-500 hover:text-white",
          cursor:"bg-red-500",
          tab:"data-[hover-unselected]:opacity-100"
        }}
      >
        {(item) => (
          <Tab key={item.id} title={item.label} className="mx-auto w-full grid place-items-center">
            {item.content}
          </Tab>
        )}
      </Tabs>
    </main>
  );
};

export default TabNav;
