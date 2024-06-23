import { Client } from '@/app/FormView/services/addClient.service'
import { StepProgress } from '@/types/StepProgress'
import { createContext } from 'react'

interface IStepProgressContext {
  stepProgress: StepProgress
  setTotalSteps: (totalSteps: number) => void
  setCurrentStep: (currentStep: number) => void
  setTotalSubsteps: (totalSubsteps: number) => void
  setCurrentSubstep: (currentSubstep: number) => void
  setStepProgress: React.Dispatch<React.SetStateAction<StepProgress>>
  clientData: Client,
  setClientData: (data:Client) => void
}

export const StepProgressContext = createContext<IStepProgressContext>({
  stepProgress: {
    totalSteps: 0,
    currentStep: 0,
    totalSubsteps: 0,
    currentSubstep: 0,
  },
  setTotalSteps: () => {},
  setCurrentStep: () => {},
  setTotalSubsteps: () => {},
  setCurrentSubstep: () => {},
  setStepProgress: () => {},
  clientData:{
    email: '',
    dni: '',
    telf: '',
    nombres: '',
    primerApl: '',
    segundoApl: '',
    countryState: '',
    city: ''
  },
  setClientData: () => {}
})
