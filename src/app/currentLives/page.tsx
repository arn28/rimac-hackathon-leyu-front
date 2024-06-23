"use client"

import SimpleCard from '@/components/SimpleCard'
import { ArrowLefttOutline } from '@/components/icons/ArrowLefttOutline'
import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import { useEffect, useState } from 'react'
import { getStates } from './services/getStates'
import { getCities } from './services/getCities'

export default function CurrentLives() {

  const [state, setState] = useState({
    states:[],
    cities:[],
    countryState:'',
    city:'',
  })

  const { states, cities } = state

  const onChangeState = (evt: React.ChangeEvent<HTMLSelectElement>) =>{
    const selectState = evt.target.value
    getCities(selectState).then(data=>{
        setState({...state, cities:data, countryState:selectState})
    })
  }

  const onChangeCity = (evt: React.ChangeEvent<HTMLSelectElement>) =>{
    const selectCity = evt.target.value
    setState({...state, city:selectCity})
  }

  useEffect(()=>{
    getStates().then(data=>{
        setState({...state, states:data})
    })
  },[])

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
              width={40}
              alt='ubicacion'
              src='/pin_location.webp'
              radius='none'
            />
        </div>
        <p className='text-center font-bold text-xl'>
          ¡Genial! ¿Dónde vives actualmente?
        </p>
        <form className='flex flex-col gap-y-3'>
          <select                            
            className="border-2 border-lila rounded-lg p-2 w-full border-input"
            onChange={(evt)=>onChangeState(evt)}
            disabled={states.length === 0}
          >
            <option>Seleccione su ciudad</option>
            {states?.map(({state_name:state},index:number)=>(
                <option key={index}>{state}</option>
            ))}
          </select>
          <select                            
            className="border-2 border-lila rounded-lg p-2 w-full border-input"
            onChange={(evt)=>onChangeCity(evt)}
            disabled={cities.length === 0}
          >
            <option>Seleccione su ciudad</option>
            {cities?.map(({city_name:city},index:number)=>(
                <option key={index}>{city}</option>
            ))}
          </select>
        </form>
        <Button>Quiero conocerlos</Button>
      </SimpleCard>
    </section>
  )
}
