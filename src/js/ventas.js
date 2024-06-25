const volumeSales=[
    {id:1, title:"volumen 1", cantidad:157084, añoFiscal:2021},
    {id:2, title:"volumen 2", cantidad:141282, añoFiscal:2021},
    {id:3, title:"volumen 3", cantidad:145790, añoFiscal:2022},
    {id:4, title:"volumen 4", cantidad:154172, añoFiscal:2022},
    {id:5, title:"volumen 5", cantidad:146155, añoFiscal:2022},
    {id:6, title:"volumen 6", cantidad:136531, añoFiscal:2022},
    {id:7, title:"volumen 7", cantidad:124511, añoFiscal:2022},
    {id:8, title:"volumen 8", cantidad:111272, añoFiscal:2023},
    {id:9, title:"volumen 9", cantidad:110328, añoFiscal:2023},
    {id:10, title:"volumen 10", cantidad:96617, añoFiscal:2023},
    {id:11, title:"volumen 11", cantidad:89280, añoFiscal:2023},
    {id:12, title:"volumen 12", cantidad:84932, añoFiscal:2024},
    {id:13, title:"volumen 13", cantidad:80155, añoFiscal:2024},
    {id:14, title:"volumen 14", cantidad:69984, añoFiscal:2024},
]

const circulationDate=[
    {id:1, volumenTitulo:"vol 1",volDato:1,copias:210000},
    {id:2, volumenTitulo:"vol 2",volDato:2,copias:450000},
    {id:3, volumenTitulo:"vol 3",volDato:3,copias:750000},
    {id:4, volumenTitulo:"vol 4",volDato:4,copias:1180000},
    {id:5, volumenTitulo:"vol 5",volDato:5,copias:1400000},
    {id:6, volumenTitulo:"vol 6",volDato:6,copias:1700000},
    {id:7, volumenTitulo:"vol 9",volDato:9,copias:2550000},
    {id:8, volumenTitulo:"vol 12",volDato:12,copias:3200000},
]

let yearCounts = volumeSales.reduce((total, ventaActual) => {
    total[ventaActual.añoFiscal] = (total[ventaActual.añoFiscal] || 0) + ventaActual.cantidad;
    return total;
 }, {});


export {volumeSales, circulationDate,yearCounts}