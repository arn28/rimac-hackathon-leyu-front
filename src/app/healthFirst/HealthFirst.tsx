"use client"
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import { useState } from 'react'

interface Props {
  onNext: () => void
}

export default function HealthFirst({ onNext }:Props) {

  const [selected,setSeleted] = useState(false)
  const imagePosition = !selected ? 'top-[55px] md:top-0' : 'top-[215px] md:top-[30px]'

  return (
    <section className='flex flex-col gap-x-1 h'>
      <p className='text-center font-bold text-2xl'>
        Tu salud primero
      </p>
      <div className='flex'>
          <Image
            className={`trans0_5 ${imagePosition}`}
            alt='mental_health'
            width={100}
            style={{left:'-10px'}}
            src='/cara_feliz.webp'
            radius='none'
          />
        <div 
          className='flex flex-col gap-y-5'
          onClick={()=>setSeleted(true)}
        >
          <p className='bg-rose-500 text-white p-1.5 md:p-3 rounded-bl-none rounded-[15px]'>¿Tienes aguna condición médica preexistente que te gustaría cubrir?</p>
          {!selected && 
            (<p className='bg-lila p-1.5 md:p-3 rounded-br-none rounded-[10px]'><strong>Sí</strong> cuento con una o más condiciones médicas</p>)
          }
          <p className='bg-lila p-1.5 md:p-3 rounded-br-none rounded-[10px]'><strong>No</strong> pero en mi familia sí hay antecedentes</p>
          {!selected && 
            (<p className='bg-lila p-1.5 md:p-3 rounded-br-none rounded-[10px]'>No tengo conocimientos o no cuento con una condicion médica</p>)
          }
          {selected &&
            (<p className='bg-rose-500 text-white p-1.5 md:p-3 rounded-bl-none rounded-[15px]'>¡Listo!, lo tendremos en cuenta</p>)
          }       
        </div>
      </div>
      {selected && 
        (<div className='flex justify-center p-1'>
          <Button className='flex self-center' onClick={onNext}>Continuar</Button>
        </div>)
      }
    </section>
  )
}
