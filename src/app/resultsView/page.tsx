import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'

import Footer from '@/features/Footer'
import SimpleCard from '@/components/SimpleCard'

export default function ResultsView() {
  return (
    <div className='scroll-smooth'>
      <section
        className={`p-8 min-h-svh flex flex-col items-center justify-evenly gap-8 bg-[url('../assets/img/bg_light.svg')] bg-cover`}
      >  
        <div className='w-full'>
          <Image
            alt='mental_health'
            width={64}
            src='/mental_health_light.svg'
            radius='none'
          />
        </div>
        <h1 className='font-bold text-3xl'>Visionario</h1>
        <p className='text-justify sm:text-center max-w-[340px] leading-none'>
          Le sonríes al futuro. Eres un alma libre y te gusta las cosas a tu manera,que es la mejor.
        </p>
      </section>
      <section className='p-8 flex flex-col items-center justify-center gap-8 max-w-[100%] md:max-w-[80%] m-auto'>
        <div className='text-center'>
          <strong className='text-xl'>Por ello hemos preparado todo esto para ti</strong>
          <p>sin necesidad de ser cliente y sin costo</p>
        </div>
        <div className='flex gap-x-1 md:gap-x-3'>
          <div className='flex flex-col w-1/2 text-white justify-between bg-rose-400 p-2 rounded-[10px]'>
            <Image src='/chancho_blanco.png' alt='ahorros'/>
            <div className='flex flex-col text-center gap-y-0 md:gap-y-3'>
              <strong>Ahorrar para tu depa</strong>
              <p>Clases reales ajustados a tu verdaderos planes</p>
              <Button className='self-center bg-white text-black font-bold w-full md:w-1/2'>Inscribete</Button>
            </div>
          </div>
          <div className='flex flex-col w-1/2 text-white justify-between bg-rose-400 p-2 rounded-[10px]'>
            <Image src='/perro_corazon_blanco.png' alt='mascotas'/>
            <div className='flex flex-col text-center gap-y-0 md:gap-y-3'>
              <strong>Adiestramiento de mascotas</strong>
              <p>La mejor cara de tu perrihijo. Clases presenciales</p>
              <Button className='self-center bg-white text-black font-bold w-full md:w-1/2'>Inscribete</Button>
            </div>
          </div>
        </div>
      </section>
      <section className='p-8 flex flex-col items-center justify-center gap-8 max-w-[100%] md:max-w-[80%] m-auto'>
        <div>
          <p>En RIMAC valoramos a visionarios como tu</p>  
          <p>¡Siempre un paso adelante y nunca atras!</p>
          <p>Por eso, para proteger tu futuro tenemos las siguientes opciones</p>  
        </div>    
        <div className='flex gap-x-2'>
          <Image src='/chico_con_celular.webp' alt='salud'/>
          <div className='bg-lila rounded-lg p-2'>
            <strong>Salud flexible</strong>
            <p>Tú eliges el costo y tus coberturas en tus atenciones médicas</p>
          </div>
        </div>
        <div className='flex gap-x-2'>
          <Image src='/chica_con_dinero.webp' alt='seguro'/>
          <div className='bg-lila rounded-lg p-2'>
            <strong>Vida con devolución</strong>
            <p>Cúbrete ante cualquier situacion desde S/.35 con devolución al 100%</p>
          </div>
        </div> 
        <div className='flex gap-x-2'>
          <Image src='/chica_tomadose_foto_con_padres.webp' alt='familia'/>  
          <div className='bg-lila rounded-lg p-2'>
            <strong>Plan vida flexible</strong>
            <p>Construye un ahorro, progete a tu familia y obtén tranquilidad para ti.</p>
          </div>
        </div>
      </section>

      <section className='p-8 flex flex-col items-center justify-center gap-8 max-w-[100%] md:max-w-[80%] m-auto'>
        <p className='font-bold text-center'>Cerca de tí hay bienestar, solo tienes que mirar con atención</p>
        <Image src='/mapa.webp' alt='mapa'/>
        <div className='text-center'>
          <p>Encontramos 5 centros de salud cercanos, 2 parques y 4 gimnasio.</p>
          <p>Unete a <strong>Estar Bien y descubre maneras de aprovechar tus recursos.</strong></p>
        </div>
        <div>
          
        </div>
      </section>
      <Footer />
    </div>
  )
}
