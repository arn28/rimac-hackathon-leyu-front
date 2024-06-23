import { StepProgress } from '@/types/StepProgress'
import { createContext } from 'react'

interface IStepProgressContext {
  stepProgress: StepProgress
  setTotalSteps: (totalSteps: number) => void
  setCurrentStep: (currentStep: number) => void
  setTotalSubsteps: (totalSubsteps: number) => void
  setCurrentSubstep: (currentSubstep: number) => void
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
})
