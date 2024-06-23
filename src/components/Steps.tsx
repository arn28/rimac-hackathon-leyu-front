interface IStepProps {
  steps: number
  currentStep?: number
}
export default function Steps({ steps, currentStep = 1 }: IStepProps) {
  const Step = ({ completed = false }: { completed?: boolean }) => {
    return (
      <div
        className={`${
          completed ? 'completed' : ''
        } bg-[#E4E4E4] [&.completed]:bg-gradient-to-r from-[#FF7033] to-[#F7052D] h-2 w-full rounded-full`}
      ></div>
    )
  }

  return (
    <div className='flex gap-3'>
      {Array.from({ length: steps }, (_, index) => (
        <Step key={index} completed={index < currentStep} />
      ))}
    </div>
  )
}
