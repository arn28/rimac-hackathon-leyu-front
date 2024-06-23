'use client'

import { useState } from 'react'
import { Image } from '@nextui-org/image'
import { getDniData } from './services/getDniData.service'
import { Button } from '@nextui-org/button'
import { addClient } from './services/addClient.service'
import { isDataComplete } from './utils/isDataComplete'
import { clientData } from '../bienestar-quiz/page'

interface Props {
    onNext: () => void
}

export default function FormView({ onNext }:Props) {

    const [state,setState] = useState({
        nombres:'asdasd',
        primerApl:'asdasd',
        segundoApl:'asdas',
        countryState:'',
        city:'',
        email:'',
        dni:'12345678',
        telf:''
    })
    const { nombres, primerApl, segundoApl } = state

    let temp: NodeJS.Timeout
    const onInputDni = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const dniNro = evt.target.value
        if(dniNro.length !== 8) return

        clearTimeout(temp)
        const onTimmer = async () => {
            await getDniData(dniNro,( nombres, primerApl, segundoApl )=>{
                setState({...state, nombres, primerApl, segundoApl})
            })
            
        }
        temp = setTimeout(onTimmer, 1000)
    }

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) =>{
        const value = evt.target.value
        const name = evt.target.name
        setState({...state, [name]:value})
    }

    const onSubmit = () =>{
        if(!isDataComplete(state)) return alert('Por favor complete todos los campos')
        addClient({...state})
    }

    return (
        <main className=''>
            <div className="flex flex-col bg-white rounded-xl w-full md:w-1/3 px-10 gap-8">
                <div className='flex flex-col items-center gap-px text-center'>
                    <p className='font-bold text-3xl '>Por ultimo...</p>
                    <p className='font-bold text-3xl '>Valida tus datos</p>
                    <p>No creemos que seas un robot, solo queremos tener la certeza.</p>
                </div>
                <form className='flex flex-col gap-y-3'>
                    <div className='flex md:gap-x-3'>
                        <input
                            className="text-center md:text-left border-2 border-lila rounded-lg p-2 w-1/5 border-input"
                            disabled
                            defaultValue={'+51'}
                        />
                        <input 
                            className="border-2 border-lila rounded-lg p-2 w-4/5 border-input"
                            type="number" 
                            name='telf'
                            placeholder="Ingrese su nro de tlf." 
                            onChange={onChange}
                        />
                    </div>
                    <div className='flex md:gap-x-3'>
                    <select                            
                            className="text-center md:text-left border-2 border-lila rounded-lg p-2 w-1/5 border-input"
                            disabled
                    >
                        <option>DNI</option>
                    </select>
                        <input 
                            className="border-2 border-lila rounded-lg p-2 w-4/5 border-input"
                            type="text"
                            name='dni' 
                            placeholder="Ingrese su DNI" 
                            maxLength={8}
                            onInput={onInputDni}
                        />
                    </div>
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
                </form>
                <Button radius='lg' fullWidth onClick={onSubmit}>
                    Siguiente
                </Button>
            </div>
        </main>
      )
}