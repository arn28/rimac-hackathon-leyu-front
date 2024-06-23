'use client'
import SimpleCard from '@/components/SimpleCard'
import { ArrowLefttOutline } from '@/components/icons/ArrowLefttOutline'
import { Button } from '@nextui-org/button'
import React from 'react'
interface IStepCardProps {
  customClass?: string
  children: React.ReactNode
  onClick?: () => void
}

export default function StepCard({
  customClass = '',
  children,
  onClick = () => {},
}: IStepCardProps) {
  return (
    <SimpleCard className={`relative ${customClass} w-full md:w-[380px]`}>
      <Button
        isIconOnly
        radius='full'
        className='bg-[#EDF0FF] text-[#777880] absolute left-3 top-3'
        onClick={onClick}
      >
        <ArrowLefttOutline />
      </Button>
      {children}
    </SimpleCard>
  )
}
