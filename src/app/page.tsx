// import { useRef } from 'react'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import { ArrowRightOutline } from '../components/icons/ArrowRightOutline'
import { PlussCircleSolid } from '../components/icons/PlussCircleSolid'
import { RimacIcon } from '../components/icons/RimacIcon'
import Link from 'next/link'
import ArrowButtonScroll from '../components/ArrowButtonScroll'
import Footer from '@/features/Footer'

export default function Home() {
  return (
    <main className='scroll-smooth'>
      <section
        className={`p-8 min-h-svh flex flex-col items-center justify-evenly gap-8 bg-[url('../assets/img/bg_light.svg')] bg-cover`}
      >
        <RimacIcon strokeColor='#fff' size={40} />
        <div className='flex flex-col items-center gap-4 rounded-[24px] bg-white p-8 min-w-[340px]'>
          <div className='w-full'>
            <Image
              alt='mental_health'
              width={64}
              src='/mental_health_light.svg'
              radius='none'
            />
          </div>
          <p className='text-[40px] max-w-[340px] font-semibold leading-none'>
            <span className='bg-gradient-to-r from-[#FF7033] to-[#F7052D] inline-block text-transparent bg-clip-text'>
              Tu esencia
            </span>{' '}
            <span className='bg-gradient-to-r from-[#34263B] to-[#13172C] inline-block text-transparent bg-clip-text'>
              marca el mejor camino a tu{' '}
            </span>
            <span className='bg-gradient-to-r from-[#F7052D] to-[#D2007E] inline-block text-transparent bg-clip-text'>
              bienestar
            </span>
          </p>
          <p className='text-justify sm:text-center max-w-[340px] leading-none'>
            Descubre qué esencia tienes y cuál es la mejor manera de estar
            asegurado.
          </p>
          <div className='flex w-full justify-between text-[12px] text-white'>
            <div className='bg-[#13172C] px-3 py-2 rounded-full'>
              promociones
            </div>
            <div className='bg-[#13172C] px-3 py-2 rounded-full'>
              personalizado
            </div>
            <div className='bg-[#13172C] px-3 py-2 rounded-full'>
              beneficios
            </div>
          </div>
          <Button radius='lg' fullWidth endContent={<ArrowRightOutline />}>
            ¡Quiero saber!
          </Button>
        </div>
        <ArrowButtonScroll scrollToId='#lectureInit' />
      </section>
      <section
        id='lectureInit'
        className='p-8 flex flex-col items-center gap-8 '
      >
        <h2 className='text-[32px] font-semibold'>
          ¿Cómo funciona la lectura?
        </h2>
        <div className=' grid grid-cols-[28px_1fr] gap-4 max-w-[600px] text-balance '>
          <PlussCircleSolid />
          <p>Nuestro sistema genera preguntas que nos ayudarán a conocerte.</p>
          <PlussCircleSolid />
          <p>
            Analizaremos tus respuestas y junto a nuestra magia (algoritmo) te
            entregamos
            <span className='font-semibold'> lo que en verdad necesitas.</span>
          </p>
          <PlussCircleSolid />
          <p>
            <span className='font-semibold'>¡Y listo! Sin presiones </span>,
            compara y elige lo mejor para tu futuro ¿Y por que no también para
            tu presente?
          </p>
        </div>
      </section>

      <section className='p-8 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-[100%] md:max-w-[80%] m-auto'>
        <div className='flex flex-col items-center gap-4 rounded-[24px] bg-[#EDF0FF] p-8 w-[100%] h-[100%] drop-shadow-xl'>
          <Image
            alt='metals'
            width={120}
            src='/metal-colors.webp'
            radius='none'
          />
          <h3 className='text-[28px] max-w-[340px] font-semibold leading-none text-center'>
            <span className='bg-gradient-to-r from-[#34263B] to-[#13172C] inline-block text-transparent bg-clip-text'>
              Tu manera de vivir
            </span>
            <span className='bg-gradient-to-r from-[#F7052D] to-[#D2007E] inline-block text-transparent bg-clip-text'>
              es el bienestar de hoy
            </span>
          </h3>
          <p className='text-center text-[20px] leading-snug'>
            La mejor manera de asegurarte{' '}
            <span className='font-semibold'>la eliges tú</span>, bueno la elige
            tu esencia
          </p>
          <Button radius='lg' fullWidth endContent={<ArrowRightOutline />}>
            ¡Quiero saber!
          </Button>
        </div>
        <div
          className={`flex flex-col items-center justify-between gap-4 rounded-[24px] bg-[url('../assets/img/grain-texture-gradient.webp')] bg-cover p-8 w-[100%] h-[100%] text-white drop-shadow-xl md:text-center`}
        >
          <div className='w-full h-full flex flex-col justify-center'>
            <h3 className='text-[28px] max-w-fit md:max-w-[340px] font-semibold mx-auto'>
              VISITA LA WEB RIMAC
            </h3>
            <p className='text-[20px] leading-snug max-w-fit md:max-w-[68%] mx-auto'>
              y revisa todos los productos que tenemos para ti.
            </p>
          </div>
          <a href='https://www.rimac.com/' target='_blank' className='w-full'>
            <Button
              radius='lg'
              fullWidth
              className='bg-white text-black font-semibold'
            >
              ir a la web
            </Button>
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
