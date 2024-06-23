"use client"

import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import { useContext, useEffect, useState } from 'react'
import { getStates } from './services/getStates'
import { getCities } from './services/getCities'
import { StepProgressContext } from '@/store/StepProgress/StepProgressContext'
import { clientData } from '../bienestar-quiz/page'

interface Props {
  onNext: () => void
}

export default function CurrentLives({ onNext }:Props) {

  const [state, setState] = useState({
    states:[],
    cities:[],
    countryState : clientData.countryState,
    city : clientData.city
  })
  
  const { states, cities, countryState, city } = state
  const isComplete = countryState !== '' && city !== ''

  const onChangeState = (evt: React.ChangeEvent<HTMLSelectElement>) =>{
    const selectState = evt.target.value
    getCities(selectState).then(data=>{
      clientData.countryState = selectState
      setState({...state, cities:data, countryState:selectState})
    })
  }

  const onChangeCity = (evt: React.ChangeEvent<HTMLSelectElement>) =>{
    const selectCity = evt.target.value
    clientData.city = selectCity
    setState({...state, city:selectCity})
  }

  useEffect(()=>{
    getStates().then(data=>{
        setState({...state, states:data})
    })
  },[])

  return (
    <section className='flex flex-col text-center gap-y-3'>
      <div className='flex justify-center'>
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
          defaultValue={countryState}
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
          defaultValue={city}
        >
          <option>Seleccione su ciudad</option>
          {cities?.map(({city_name:city},index:number)=>(
              <option key={index}>{city}</option>
          ))}
        </select>
      </form>
      <Button onClick={onNext} disabled={ !isComplete }>Quiero conocerlos</Button>
    </section>
  )
}
