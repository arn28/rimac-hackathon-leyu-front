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
import HealthFirst from '../healthFirst/HealthFirst'
import NerbyBenef from '../nerbyBenef/NerbyBenef'
import CurrentLives from '../currentLives/CurrentLives'
import FormView from '../FormView/FormView'
import ReadyView from '../readyView/ReadyView'
import ResultsView from '../resultsView/ResultsView'
import { clientData } from '@/utils/clientData'
import SimpleCard from '@/components/SimpleCard'

export default function Bienestar() {
  const [clientName, setClientName] = useState('')
  const { stepProgress, setStepProgress } = useContext(StepProgressContext)
  const substepsPerStep: { [key: number]: number } = {
    1: 6,
    2: 7,
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
    clientData.nombres = value
    // setClientName(value)
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
              <Input
                variant='faded'
                color='primary'
                type='text'
                label='Nombre'
                onChange={onChange}
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
            <h2 className='font-semibold text-center'>{clientData.nombres},</h2>
            <Image src='/cara_misteriosa.webp' alt='Descubre tu escencia' />

            <h2 className='font-semibold text-center'>Consideras ser...</h2>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex w-full gap-1'>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/woman_star.webp' alt='Descubre tu escencia' />
                  <h3 className='text-[16px] font-semibold'> Joven Flexible</h3>
                  <p className='text-[12px]'>
                    Solo o con pareja. Independiente o buscando crecer
                  </p>
                </div>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/money_man.webp' alt='Descubre tu escencia' />
                  <h3 className='text-[16px] font-semibold'>Adulto en casa</h3>
                  <p className='text-[12px]'>
                    Solo o con pareja. Independiente o buscando crecer
                  </p>
                </div>
              </div>
              <div className='flex w-full gap-1'>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/familia.webp' alt='Descubre tu escencia' />
                  <h3 className='text-[16px] font-semibold'>
                    {' '}
                    Formando Familia
                  </h3>
                  <p className='text-[12px]'>
                    Solo o con pareja. Independiente o buscando crecer
                  </p>
                </div>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/mama_bebe.webp' alt='Descubre tu escencia' />
                  <h3 className='text-[16px] font-semibold'> Resiliente</h3>
                  <p className='text-[12px]'>
                    Solo o con pareja. Independiente o buscando crecer
                  </p>
                </div>
              </div>
            </div>
            <Button radius='lg' fullWidth onClick={nextStep}>
              Siguiente
            </Button>
          </>
        )
        break

      case 4:
        return (
          <>
            <Image src='/Varita_magica.webp' alt='Descubre tu escencia' />

            <h2 className='font-semibold text-center'>
              ¿Qué intereses tienes?
            </h2>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex w-full gap-1'>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/cine.webp' alt='Descubre tu escencia' />
                  <p className='text-[12px]'>
                    Explorar nuevas actividades y hobbies
                  </p>
                </div>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/familia.webp' alt='Descubre tu escencia' />
                  <p className='text-[12px]'>Hacer planes con los mios</p>
                </div>
              </div>
              <div className='flex w-full gap-1'>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/woman_star.webp' alt='Descubre tu escencia' />

                  <p className='text-[12px]'>
                    Aprender y crecer profesionalmente
                  </p>
                </div>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/chanchito.webp' alt='Descubre tu escencia' />
                  <p className='text-[12px]'>Pasar tiempo con mis mascotas</p>
                </div>
              </div>
            </div>
            <Button radius='lg' fullWidth onClick={nextStep}>
              Siguiente
            </Button>
          </>
        )
        break
      case 5:
        return (
          <>
            <Image src='/brazo_musculo.webp' alt='Descubre tu escencia' />

            <h2 className='font-semibold text-center'>
              ¿Cuál es tu motivación?
            </h2>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex w-full gap-1'>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/familia.webp' alt='Descubre tu escencia' />
                  <p className='text-[12px] font-semibold'>
                    Proteger a mi familia
                  </p>
                </div>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/woman_star.webp' alt='Descubre tu escencia' />
                  <p className='text-[12px] font-semibold'>
                    Crecimiento personal
                  </p>
                </div>
              </div>
              <div className='flex w-full gap-1'>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/chanchito.webp' alt='Descubre tu escencia' />

                  <p className='text-[12px] font-semibold'>
                    Seguridad Financiera
                  </p>
                </div>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/casa_estrella.webp' alt='Descubre tu escencia' />
                  <p className='text-[12px] font-semibold'>
                    Proteger mis bienes
                  </p>
                </div>
              </div>
            </div>
            <Button radius='lg' fullWidth onClick={nextStep}>
              Siguiente
            </Button>
          </>
        )
        break

      case 6:
        return (
          <>
            <Image src='/wink_face.webp' alt='Descubre tu escencia' />

            <h3 className='text-center'>
              Si pudieras elegir una cobertura que te brinde mayor tranquilidad{' '}
            </h3>
            <h2 className='font-semibold text-center'>¿Cuál sería?</h2>
            <div className='flex flex-col w-full gap-1'>
              <div className='flex w-full gap-1'>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/chanchito.webp' alt='Descubre tu escencia' />
                  <p className='text-[12px] font-semibold'>
                    Plan para proteger tu futuro financiero
                  </p>
                </div>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image
                    src='/persona_corazon.webp'
                    alt='Descubre tu escencia'
                  />
                  <p className='text-[12px] font-semibold'>
                    Cuidado y bienestar personal
                  </p>
                </div>
              </div>
              <div className='flex w-full gap-1'>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/carro.webp' alt='Descubre tu escencia' />

                  <p className='text-[12px] font-semibold'>
                    Protección para tu vehículo
                  </p>
                </div>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/perro_corazon.webp' alt='Descubre tu escencia' />
                  <p className='text-[12px] font-semibold'>
                    Seguridad y bienestar de tu mascota
                  </p>
                </div>
              </div>
              <div className='flex w-full gap-1'>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image
                    src='/beneficios_tag.webp'
                    alt='Descubre tu escencia'
                  />

                  <p className='text-[12px] font-semibold'>
                    Beneficios y ventajas inmediatas
                  </p>
                </div>
                <div className='flex flex-col items-center rounded-[24px] basis-1/2 bg-slate-200 min-w-min text-center gap-0 p-1 justify-center cursor-pointer'>
                  <Image src='/satelite.webp' alt='Descubre tu escencia' />
                  <p className='text-[12px] font-semibold'>
                    Atención fuera del país
                  </p>
                </div>
              </div>
            </div>
            <Button radius='lg' fullWidth onClick={nextStep}>
              Siguiente
            </Button>
          </>
        )
        break

      default:
        return <></>
        break
    }
  }

  const SubtepRenderStep2 = (substep: number) => {
    switch (substep) {
      case 1:
        return <HealthFirst onNext={nextStep} />
        break

      case 2:
        return <NerbyBenef onNext={nextStep} />
        break
      case 3:
        return <CurrentLives onNext={nextStep} />
        break

      case 4:
        return <ReadyView onNext={nextStep} />
        break
      case 5:
        return <FormView onNext={nextStep} />
        break

      case 6:
        return <ResultsView />
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
        return SubtepRenderStep2(substep)
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
    </section>
  )
}
