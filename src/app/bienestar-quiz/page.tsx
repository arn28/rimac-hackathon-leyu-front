'use client'
import Steps from '@/components/Steps'
import StepCard from '@/features/StepCard'
import { StepProgressContext } from '@/store/StepProgress/StepProgressContext'
import { useContext, useEffect } from 'react'

export default function Bienestar() {
  const { stepProgress, setTotalSteps, setCurrentStep } =
    useContext(StepProgressContext)

  // useEffect(() => {
  //   setTotalSteps(3)
  //   console.log('🚀 ~ useEffect ~ stepProgress:', stepProgress)
  //   setCurrentStep(1)
  //   console.log('🚀 ~ useEffect ~ stepProgress:', stepProgress)
  // }, [])

  return (
    <section>
      <div className='pb-3 px-4'>
        <Steps
          steps={stepProgress.totalSteps}
          currentStep={stepProgress.currentStep}
        />
      </div>
      <StepCard>
        <h2>Hello</h2>
        <button
          onClick={() => {
            console.log(
              '🚀 ~ Bienestar ~ JSON.stringify(stepProgress):',
              stepProgress,
            )
          }}
        >
          click
        </button>
        <button
          onClick={() => {
            setCurrentStep(2)
            setTotalSteps(3)
            console.log(
              '🚀 ~ Bienestar ~ JSON.stringify(stepProgress):',
              stepProgress,
            )
          }}
        >
          click step
        </button>
      </StepCard>
    </section>
  )
}
