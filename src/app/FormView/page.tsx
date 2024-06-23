'use client'

import { useEffect, useState } from 'react'
import { Image } from '@nextui-org/image'
import { getClientData } from './services/getClientData'
import { getStates } from './services/getStates'
import { getCities } from './services/getCities'
import { Button } from '@nextui-org/button'
import { addClient } from './services/addClient.service'
import { isDataComplete } from './utils/isDataComplete'

export default function FormView() {

    const [state,setState] = useState({
        nombres:'asdasd',
        primerApl:'asdasd',
        segundoApl:'asdas',
        states:[],
        cities:[],
        countryState:'',
        city:'',
        email:'',
        dni:'12345678',
        telf:''
    })
    const { nombres, primerApl, segundoApl, cities, states } = state

    let temp: NodeJS.Timeout
    const onInputDni = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const dniNro = evt.target.value
        if(dniNro.length !== 8) return

        clearTimeout(temp)
        const onTimmer = async () => {
            await getClientData(dniNro,( nombres, primerApl, segundoApl )=>{
                setState({...state, nombres, primerApl, segundoApl})
            })
            
        }
        temp = setTimeout(onTimmer, 1000)
    }

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

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) =>{
        const value = evt.target.value
        const name = evt.target.name
        setState({...state, [name]:value})
    }

    const onSubmit = () =>{
        if(!isDataComplete(state)) return
        addClient({...state})
    }

    useEffect(()=>{
        getStates().then(data=>{
            setState({...state, states:data})
        })
    },[])

    return (
        <main className=''>
            <div
            className={`p-8 min-h-screen flex flex-col items-center justify-between gap-8 bg-[url('../img/bg_light.svg')] bg-cover`}>
                <div className="flex flex-col bg-white rounded-xl w-1/3 md:w-full px-10 gap-8 p-8">
                    <Image width={64} height={65} src="/assets/icons/backArrowCircle.svg" alt="backArrowCircle"/>
                    <div className='flex flex-col items-center gap-px'>
                        <p className='font-bold text-3xl'>Por ultimo...</p>
                        <p className='font-bold text-3xl'>Valida tus datos</p>
                        <p className='text-center'>No creemos que seas un robot, solo queremos tener la certeza.</p>
                    </div>
                    <form className='flex flex-col gap-y-3'>
                        <input 
                            className="border-2 border-lila rounded-lg p-2 w-3/5 border-input"
                            type="number" 
                            name='telf'
                            placeholder="Ingrese su nro de tlf." 
                            onChange={onChange}
                        />
                        <input 
                            className="border-2 border-lila rounded-lg p-2 w-3/5 border-input"
                            type="text"
                            name='dni' 
                            placeholder="Ingrese su DNI" 
                            maxLength={8}
                            onInput={onInputDni}
                        />
                        <input 
                            className="border-2 border-lila rounded-lg p-2 w-full border-input"
                            type="text" 
                            name='nombres'
                            placeholder="Nombres" 
                            defaultValue={nombres}
                            readOnly
                        />
                        <div className='flex gap-x-1'>
                            <input 
                                className="border-2 border-lila rounded-lg p-2 w-full border-input"
                                type="text" 
                                name='primerApl'
                                placeholder="Primer apellido" 
                                defaultValue={primerApl}
                                readOnly                                
                            />
                            <input 
                                className="border-2 border-lila rounded-lg p-2 w-full border-input"
                                placeholder="Segundo apellido" 
                                type="text" 
                                defaultValue={segundoApl}
                                readOnly
                            />
                        </div>
                        <input 
                            className="border-2 border-lila rounded-lg p-2 w-full border-input"
                            placeholder="Email" 
                            name='email'
                            type="email" 
                            required
                            onChange={onChange}
                        />
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
                    <Button radius='lg' fullWidth onClick={onSubmit}>
                        Siguiente
                    </Button>
                </div>
            </div>
        </main>
      )
}