"use client"

import SimpleCard from '@/components/SimpleCard'
import { ArrowLefttOutline } from '@/components/icons/ArrowLefttOutline'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'

interface Props {
  onNext: () => void
}

export default function NerbyBenef({ onNext }:Props) {

  return (
    <section className='flex flex-col text-center gap-y-2'>
      <div className='flex justify-center'>
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
      <Button onClick={onNext}>Quiero conocerlos</Button>
      <div className='w-full flex justify-center'>
          <Image
            className='w-full md:w-80'
            alt='ojos'
            src='/mapa_blur.webp'
            radius='none'
          />
      </div>
    </section>
  )
}
