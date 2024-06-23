"use client"
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'

interface Props {
  onNext: () => void
}

export default function ReadyView({ onNext }:Props) {

  return (
    <section className='flex flex-col gap-y-2'>
      <div className='flex justify-center'>
          <Image
            alt='ojos'
            width={50}
            src='/ojos.webp'
            radius='none'
          />
      </div>
      <p className='font-bold text-4xl'>
        ¡Todo listo!
      </p>
      <p className='font-bold text-4xl'>
        Esto luce muy bien
      </p>
      <div>
        <p>
          ¡Tu esencia combina con todo!
        </p>
        <p>
          Creemos que nuestras recomendaciones le gustarán
        </p>
      </div>

      <Button className='font-bold bg-black text-white' onClick={onNext}>Conocer lectura</Button>
    </section>
  )
}
