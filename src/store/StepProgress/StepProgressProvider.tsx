'use client'
import { useState } from 'react'
import { StepProgressContext } from './StepProgressContext'
import { StepProgress } from '@/types/StepProgress'

interface IStepProgressProvider {
  children: React.ReactNode
}

export const StepProgressProvider: React.FC<IStepProgressProvider> = ({
  children,
}) => {
  const [stepProgress, setStepProgress] = useState<StepProgress>({
    totalSteps: 0,
    currentStep: 0,
    totalSubsteps: 0,
    currentSubstep: 0,
  })

  const setTotalSteps = (totalSteps: number) => {
    const updatedStepProgress = { ...stepProgress, totalSteps }
    setStepProgress(updatedStepProgress)
  }
  const setCurrentStep = (currentStep: number) => {
    const updatedStepProgress = { ...stepProgress, currentStep }
    setStepProgress(updatedStepProgress)
  }
  const setTotalSubsteps = (totalSubsteps: number) => {
    setStepProgress({ ...stepProgress, totalSubsteps })
  }
  const setCurrentSubstep = (currentSubstep: number) => {
    setStepProgress({ ...stepProgress, currentSubstep })
  }

  return (
    <StepProgressContext.Provider
      value={{
        stepProgress,
        setTotalSteps,
        setCurrentStep,
        setTotalSubsteps,
        setCurrentSubstep,
      }}
    >
      {children}
    </StepProgressContext.Provider>
  )
}
