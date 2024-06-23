import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import Footer from '@/features/Footer'

export default function ResultsView() {
  return (
    <div className='scroll-smooth'>
      <section
        className={`p-8 flex flex-col items-center justify-evenly gap-8 bg-[url('../assets/img/bg_light.svg')] bg-cover`}
      >  
          <Image
            className='w-max'
            alt='mental_health'
            src='/visionario_medalla.webp'
            radius='none'
          />
        <div className='flex flex-col text-center gap-y-2'>
          <p className='font-bold text-5xl'>Visionario</p>
          <p className='text-justify sm:text-center max-w-[340px] leading-none'>
            Le sonríes al futuro. Eres un alma libre y te gusta las cosas a tu manera,que es la mejor.
          </p>
        </div>
      </section>
      <div className='flex justify-center items-center'>
        <hr className=" h-1.5 my-8 w-4/5 md:w-2/5 bg-sky-500 border-0 dark:bg-gray-700"/>
      </div>
      <section className='p-8 flex flex-col items-center justify-center gap-8 max-w-[100%] md:max-w-[80%] m-auto'>
        <div className='text-center'>
          <strong className='text-xl'>Por ello hemos preparado todo esto para ti</strong>
          <p>sin necesidad de ser cliente y sin costo</p>
        </div>
        <div className='flex gap-x-1 md:gap-x-3'>
          <div className='flex flex-col w-1/2 text-white justify-between items-center bg-rose-400 p-2 rounded-[10px]'>
            <Image src='/chancho_blanco.png' alt='ahorros'/>
            <div className='flex flex-col text-center gap-y-0 md:gap-y-3'>
              <strong>Ahorrar para tu depa</strong>
              <p>Clases reales ajustados a tu verdaderos planes</p>
              <Button className='self-center bg-white text-black font-bold w-full md:w-1/2'>Inscribete</Button>
            </div>
          </div>
          <div className='flex flex-col w-1/2 text-white justify-between items-center bg-rose-400 p-2 rounded-[10px]'>
            <Image src='/perro_corazon_blanco.png' alt='mascotas'/>
            <div className='flex flex-col text-center gap-y-0 md:gap-y-3'>
              <strong>Adiestramiento de mascotas</strong>
              <p>La mejor cara de tu perrihijo. Clases presenciales</p>
              <Button className='self-center bg-white text-black font-bold w-full md:w-1/2'>Inscribete</Button>
            </div>
          </div>
        </div>
      </section>
      <div className='flex justify-center items-center'>
        <hr className=" h-1.5 my-8 w-4/5 md:w-2/5 bg-sky-500 border-0 dark:bg-gray-700"/>
      </div>
      <section className='p-8 flex flex-col items-center justify-center gap-8 max-w-[100%] md:max-w-[80%] m-auto'>
        <div>
          <p className='font-bold text-xl text-center'>En RIMAC valoramos a visionarios como tu</p>  
          <p className='text-center'>¡Siempre un paso adelante y nunca atras!</p>
          <p className='text-center'>Por eso, para proteger tu futuro tenemos las siguientes opciones</p>  
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
      <div className='flex justify-center items-center'>
        <hr className=" h-1.5 my-8 w-4/5 md:w-2/5 bg-sky-500 border-0 dark:bg-gray-700"/>
      </div>
      <section className='p-8 flex flex-col items-center justify-center gap-8 max-w-[100%] md:max-w-[80%] m-auto'>
        <p className='font-bold text-center'>Cerca de tí hay bienestar, solo tienes que mirar con atención</p>
        <Image src='/mapa.webp' alt='mapa'/>
        <div className='text-center'>
          <p>Encontramos 5 centros de salud cercanos, 2 parques y 4 gimnasio.</p>
          <p>Unete a <strong>Estar Bien y descubre maneras de aprovechar tus recursos.</strong></p>
        </div>
        <div className='flex flex-col w-full md:w-[30%] justify-center items-center'>
          <Image className='w-full' src="/personas_ejercitandose_estar_bien.webp" alt="ejercicios" radius='none' />
          <div className='flex flex-col rounded-lg rounded-t-none bg-light-green text-center p-3'>
            <p className='font-bold text-2xl'>Estar bien</p>
            <p>El <strong>NetWork digital de bienestar</strong> más grande de la región. 
              Ingresa sin costo y descubre cursos, talleres y más.
            </p>
            <Button className='bg-black text-white font-bold'>Ir a la web</Button>
          </div>
        </div>
      </section>
      <div className='flex justify-center items-center'>
        <hr className=" h-1.5 my-8 w-4/5 md:w-2/5 bg-sky-500 border-0 dark:bg-gray-700"/>
      </div>
      <section className='p-8 flex flex-col items-center justify-center gap-8 max-w-[100%] md:max-w-[80%] m-auto'>
        <div className='flex justify-center gap-x-2'>
          <p className='flex bg-rose-500 text-white p-1.5 md:p-3 rounded-br-none rounded-[15px] items-center font-bold'>¿Qué quieres hacer con esta información?</p>
          <div className='flex items-end'>
            <Image className='w-[60px]' src='/cara_sonrriente_2estrella.webp' alt='estrella'/>
          </div>
        </div>
        <div className='flex flex-col text-center font-bold gap-y-2 w-4/5 md:w-60'>
          <p className='bg-black text-white rounded-[15px] p-2'>Agendar llamada</p>
          <p className='bg-black text-white rounded-[15px] p-2'>Enviar a mi correo</p>
          <p className='bg-black text-white rounded-[15px] p-2'>Compartir en</p>
        </div>
      </section>
      <div className='flex justify-center items-center'>
        <hr className=" h-1.5 my-8 w-4/5 md:w-2/5 bg-sky-500 border-0 dark:bg-gray-700"/>
      </div>
      <section className='p-8 flex flex-col items-center justify-center gap-8 max-w-[100%] md:max-w-[80%] m-auto'>
        <div className='flex justify-center gap-x-2 w-full'>
          <div className='flex items-end'>
            <Image className='w-[60px]' src='/cara_sonrriente_2estrella.webp' alt='estrella'/>
          </div>
          <p className='flex bg-rose-500 text-white p-1.5 md:p-3 rounded-bl-none rounded-[15px] items-center font-bold'>También te puede interesar:</p>
        </div>
        <div className='flex gap-x-2 border-2 rounded-[15px] border-lila w-full md:w-60'>
          <div className='flex p-2 justify-center items-center w-3/5'>
            <Image className='w-full' src='/app_rimac.webp' alt='appRimac'/>
          </div>
          <div >
            <p className='font-bold text-2xl'>WEB RIMAC</p>
            <p>Descubre todos los productos que tenemos para ti</p>
            <Button className='bg-black text-white font-bold'>
              Ir a la web
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
