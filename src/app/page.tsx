import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import { ArrowRightOutline } from './components/Icon/ArrowRightOutline'
import { ArrowDownOutline } from './components/Icon/ArrowDownOutline'
import { PlussCircleSolid } from './components/Icon/PlussCircleSolid'
import { RimacIcon } from './components/Icon/RimacIcon'
// import ArrowRightOutline from '../../public/arrow_forward_outline.svg'

export default function Home() {
  return (
    <main className=''>
      <div
        className={`p-8 min-h-screen flex flex-col items-center justify-between gap-8 bg-[url('../img/bg_light.svg')] bg-cover`}
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
          <p className='text-center max-w-[340px] leading-none'>
            Descubre qué esencia tienes y cuál es la mejor manera de estar
            asegurado.
          </p>
          <Button radius='lg' fullWidth endContent={<ArrowRightOutline />}>
            ¡Quiero saber!
          </Button>
        </div>
        <div className='cursor-pointer'>
          <ArrowDownOutline strokeColor='#959BBE' size={42} />
        </div>
      </div>
      <div className='p-8 min flex flex-col items-center gap-8 '>
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
      </div>

      <div className='p-8 flex flex-col md:flex-row items-center justify-center gap-8 '>
        <div className='flex flex-col items-center gap-4 rounded-[24px] bg-[#EDF0FF] p-8 basis-1 md:basis-1/2'>
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
          <p className='text-center text-[20px]'>
            La mejor manera de asegurarte la eliges tú, bueno la elige tu
            esencia
          </p>
        </div>
        <div
          className={`flex flex-col items-center gap-4 rounded-[24px] bg-[url('../img/grain-texture-gradient.webp')] bg-cover p-8 basis-1 md:basis-1/2`}
        >
          <RimacIcon size={20} />
        </div>
      </div>
    </main>
  )
}
