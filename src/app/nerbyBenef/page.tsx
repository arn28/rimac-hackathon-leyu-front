"use client"

import SimpleCard from '@/components/SimpleCard'
import { ArrowLefttOutline } from '@/components/icons/ArrowLefttOutline'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'

export default function NerbyBenef() {

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
        <div className=''>
            <Image
              alt='ojos'
              width={50}
              src='/ojos.webp'
              radius='none'
            />
        </div>
        <p className='text-center font-bold text-xl'>
          ¡Parece que hay beneficios cerca de ti!
        </p>
        <Button>Quiero conocerlos</Button>
        <div className='w-full flex justify-center'>
            <Image
              className='w-full md:w-80'
              alt='ojos'
              src='/mapa_blur.webp'
              radius='none'
            />
        </div>
      </SimpleCard>
    </section>
  )
}
