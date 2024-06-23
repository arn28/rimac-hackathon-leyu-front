'use client'
import Steps from '@/components/Steps'
import StepCard from '@/features/StepCard'
import { StepProgressContext } from '@/store/StepProgress/StepProgressContext'
import { StepProgress } from '@/types/StepProgress'
import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'
import { Image } from '@nextui-org/image'
import { Input } from '@nextui-org/input'
import { useContext, useEffect, useState } from 'react'

export default function Bienestar() {
  const [clientName, setClientName] = useState('')
  const { stepProgress, setStepProgress } = useContext(StepProgressContext)
  const substepsPerStep: { [key: number]: number } = {
    1: 6,
    2: 2,
    3: 2,
  }

  const stepProgressInitialState: StepProgress = {
    totalSteps: Object.keys(substepsPerStep).length,
    currentStep: 1,
    totalSubsteps: substepsPerStep[1],
    currentSubstep: 1,
  }

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    // const name = evt.target.name
    setClientName(value)
  }

  const nextStep = () => {
    setStepProgress((prevState: StepProgress) => {
      if (prevState.currentSubstep < prevState.totalSubsteps) {
        return {
          ...prevState,
          currentSubstep: prevState.currentSubstep + 1,
        }
      } else if (prevState.currentStep < prevState.totalSteps) {
        return {
          ...prevState,
          currentStep: prevState.currentStep + 1,
          currentSubstep: 1,
          totalSubsteps: substepsPerStep[prevState.currentStep + 1],
        }
      }
      return prevState
    })
  }

  const backStep = () => {
    setStepProgress((prevState: StepProgress) => {
      if (prevState.currentSubstep > 1) {
        return {
          ...prevState,
          currentSubstep: prevState.currentSubstep - 1,
        }
      } else if (prevState.currentStep > 1) {
        return {
          ...prevState,
          currentStep: prevState.currentStep - 1,
          currentSubstep: substepsPerStep[prevState.currentStep - 1],
          totalSubsteps: substepsPerStep[prevState.currentStep - 1],
        }
      } else {
        return prevState
      }
    })
  }

  useEffect(() => {
    setStepProgress(stepProgressInitialState)
    console.log('render')
  }, [])

  const SubtepRenderStep1 = (substep: number) => {
    switch (substep) {
      case 1:
        return (
          <>
            <Image src='/bola_misteriosa.webp' alt='Descubre tu escencia' />
            <h2 className='font-semibold'>Sabemos que eres único</h2>
            <p>
              Por ello creamos el
              <span className='font-semibold italic'>
                {' '}
                analizador de esencia{' '}
              </span>
              para que sepas cuál es la tuya y darte la mejor manera de asegurar
              tu bienestar.
            </p>
            <Button radius='lg' fullWidth onClick={nextStep}>
              ¡Quiero saber!
            </Button>
          </>
        )
        break

      case 2:
        return (
          <>
            <Image src='/ojo_turco.webp' alt='Descubre tu escencia' />
            <h2 className='font-semibold text-center'>
              Todos los nombres tienen un significado
              <span className='bg-gradient-to-r from-[#F7052D] to-[#D2007E] inline-block text-transparent bg-clip-text'>
                {' '}
                ¿Cuál es el tuyo?{' '}
              </span>
            </h2>
            <div className='flex flex-col w-full gap-4'>
              <input
                className='border-2 rounded-lg p-2 w-full border-input'
                type='text'
                name='nombres'
                placeholder='Nombres'
                defaultValue={clientName}
                onInput={onChange}
              />
              <div className='flex flex-row gap-4'>
                <Input
                  className='basis-1/2'
                  variant='faded'
                  color='primary'
                  type='text'
                  label='Apellido Materno'
                />
                <Input
                  className='basis-1/2'
                  variant='faded'
                  color='primary'
                  type='text'
                  label='Apellido Materno'
                />
              </div>

              <Input
                variant='faded'
                color='primary'
                type='email'
                label='Correo'
              />
            </div>
            <div className='w-full flex flex-col '>
              <Checkbox>
                <span className='text-[12px]'>
                  Acepto los términos y condiciones
                </span>
              </Checkbox>
              <Checkbox className=''>
                <span className='text-[12px]'>
                  Acepto el uso de tratamientos de datos
                </span>
              </Checkbox>
            </div>
            <Button radius='lg' fullWidth onClick={nextStep}>
              Siguiente
            </Button>
          </>
        )
        break
      case 3:
        return (
          <>
            <h1>step 1</h1>
            <h2>{substep}</h2>
          </>
        )
        break

      case 4:
        return (
          <>
            <h1>step 1</h1>
            <h2>{substep}</h2>
          </>
        )
        break
      case 5:
        return (
          <>
            <h1>step 1</h1>
            <h2>{substep}</h2>
          </>
        )
        break

      case 6:
        return (
          <>
            <h1>step 1</h1>
            <h2>{substep}</h2>
          </>
        )
        break

      default:
        return <></>
        break
    }
  }

  const StepRender = ({ step, substep }: { step: number; substep: number }) => {
    switch (step) {
      case 1:
        return SubtepRenderStep1(substep)
        break

      default:
        return <></>
        break
    }
  }

  return (
    <section>
      <div className='pb-3 px-4'>
        <Steps
          steps={stepProgress.totalSteps}
          currentStep={stepProgress.currentStep}
        />
      </div>
      <StepCard onClick={backStep}>
        <StepRender
          step={stepProgress.currentStep}
          substep={stepProgress.currentSubstep}
        />
      </StepCard>
      <button onClick={nextStep}>click step</button>
    </section>
  )
}
