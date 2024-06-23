"use client"
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import Link from 'next/link'

export default function WaitingView() {

  return (
    <section className='flex flex-col gap-y-2'>
      <div className='flex justify-center'>
          <Image
            alt='ojos'
            width={50}
            src='/bola_misteriosa.webp'
            radius='none'
          />
      </div>
      <p className='font-bold text-4xl'>
        Estamos analizando el mejor camino hacia tu bienestar...
      </p>
        <Link href='/resultsView'>
            <Button className='font-bold bg-black text-white'>Vamos!</Button>
        </Link>
    </section>
  )
}
