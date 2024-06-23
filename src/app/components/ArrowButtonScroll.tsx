'use client'
import { ArrowDownOutline } from './Icon/ArrowDownOutline'
interface IArrowButtonScrollProp {
  scrollToId: string
}
export default function ArrowButtonScroll({
  scrollToId,
}: IArrowButtonScrollProp) {
  const handleScroll = (e: any) => {
    e.preventDefault()

    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')

    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  return (
    <a
      className='cursor-pointer animate-bounce'
      href={scrollToId}
      onClick={handleScroll}
    >
      <ArrowDownOutline strokeColor='#959BBE' size={42} />
    </a>
  )
}
