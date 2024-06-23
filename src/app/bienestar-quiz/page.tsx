'use client'
import Steps from '@/components/Steps'
import StepCard from '@/features/StepCard'
import { StepProgressContext } from '@/store/StepProgress/StepProgressContext'
import { StepProgress } from '@/types/StepProgress'
import { useContext, useEffect } from 'react'

export default function Bienestar() {
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
  }, [])

  const SubtepRenderStep1 = (substep: number) => {
    switch (substep) {
      case 1:
        return (
          <>
            <h1>step 1</h1>
            <h2>{substep}</h2>
          </>
        )
        break

      case 2:
        return (
          <>
            <h1>step 1</h1>
            <h2>{substep}</h2>
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
