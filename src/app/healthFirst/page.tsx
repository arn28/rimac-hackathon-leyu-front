"use client"

import SimpleCard from '@/components/SimpleCard'
import { ArrowLefttOutline } from '@/components/icons/ArrowLefttOutline'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import { useState } from 'react'

export default function HealthFirst() {

  const [selected,setSeleted] = useState(false)
  const imagePosition = !selected ? 'top-[55px] md:top-0' : 'top-[215px] md:top-[30px]'

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
        <p className='font-bold text-2xl'>
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
        <Button>Continuar</Button>
      </SimpleCard>
    </section>
  )
}
