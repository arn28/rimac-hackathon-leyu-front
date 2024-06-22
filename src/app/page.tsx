import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import { ArrowRightOutline } from './components/Icon/ArrowRightOutline'
import { ArrowDownOutline } from './components/Icon/ArrowDownOutline'
// import ArrowRightOutline from '../../public/arrow_forward_outline.svg'

export default function Home() {
  return (
    <main className=''>
      <div
        className={`p-8 min-h-screen flex flex-col items-center justify-between gap-8 bg-[url('../img/bg_light.svg')] bg-cover`}
      >
        <Image
          alt='Rimac'
          width={78}
          src='/rimac_logo_white.svg'
          radius='none'
        />
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
        <ArrowDownOutline strokeColor='#959BBE' size={42} />
      </div>
      <p>Hello</p>
    </main>
  )
}
