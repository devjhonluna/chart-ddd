import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'

const Introduccion = () => {
  return (
    <Card className='bg-transparent text-red-500 w-[clamp(32ch,_50%,_64ch)] sm:w-[clamp(64ch,_50%,_128ch)]'>
        <CardHeader className='text-lg sm:text-2xl justify-center items-center font-bold'>
            <h1>Acerca de Nosotros</h1>
        </CardHeader>
        <CardBody className='text-sm sm:text-lg text-justify'>
            <p >Bienvenido al sitio web chart-ddd un sitio web dedicado a recopilar los datos que han Sido parte del exito del manga Dandadan del autor Yukinobu tatsu publicado en la plataforma japonesa Shonen Jump+ y en manga plus para el resto del mundo. En este sitio encontraras 3 graficos que nos muestra los diferentes aspectos del rendimiento en ventas de la serie:</p>
            <ul>
                <li><span className="font-semibold">Venta por Volumen:</span> este grafico muestra el numero de copias vendidas por cada volumen de dandadan en japon desde el primero hasta el mas reciente.</li>
                <li><span className="font-semibold">Número de circulación:</span> este grafico representa la evolucion el numero de copias estimadas que hay de dandadan por los volumenes fisicos recopilados actualmente.</li>
                <li><span className="font-semibold">Ventas Anuales:</span> este grafico representa el ingreso generado anualmente por la venta de volumenes de la serie hasta el momento.</li>
            </ul>
        </CardBody>
        <CardFooter className='text-sm sm:text-lg text-justify flex-col'>
            <p>la informacion recopilada ha sido obtenida de estos usuarios en la red social twitter:</p>
            <ul className='flex flex-col sm:flex-row gap-2'>
                <li><a href="https://twitter.com/Josu_ke" target="_blank" rel="noopener noreferrer">Josu ke</a></li>
                <li><a href="https://twitter.com/al_mavivi" target="_blank" rel="noopener noreferrer">Oricon and Shoseki Manga Sales</a></li>
                <li><a href="https://twitter.com/Dandadanverse" target="_blank" rel="noopener noreferrer">Dandadanverse</a></li>
            </ul>
        </CardFooter>
    </Card>
  )
}

export default Introduccion