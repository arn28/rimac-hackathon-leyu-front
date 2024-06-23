import SimpleCard from '@/components/SimpleCard'
import { ArrowLefttOutline } from '@/components/icons/ArrowLefttOutline'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

export default function Bienestar() {
  return (
    <section>
      <SimpleCard className='relative'>
        <Button
          isIconOnly
          radius='full'
          className='bg-[#EDF0FF] text-[#777880] absolute left-3 top-3'
        >
          <ArrowLefttOutline />
        </Button>
        <div className='w-full'>
          {/* <Image
            alt='mental_health'
            width={64}
            src='/mental_health_light.svg'
            radius='none'
          /> */}
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
          <div className='bg-[#13172C] px-3 py-2 rounded-full'>promociones</div>
          <div className='bg-[#13172C] px-3 py-2 rounded-full'>
            personalizado
          </div>
          <div className='bg-[#13172C] px-3 py-2 rounded-full'>beneficios</div>
        </div>
        {/* <Link className='w-full' href={'/bienestar-quiz'}>
          <Button radius='lg' fullWidth endContent={<ArrowRightOutline />}>
            ¡Quiero saber!
          </Button>
        </Link> */}
      </SimpleCard>
    </section>
  )
}
