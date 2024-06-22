'use client'
import { Button, ButtonGroup } from '@nextui-org/button'
import { addClient } from './services/addClient.service'
export default function Person() {
  return (
    <main className='min-h-screen flex-col items-center justify-between p-24 '>
      <h1>Welcome ...</h1>
      <div className='flex gap-4'>
        <Button radius='full' color='primary' variant='solid'>
          Solid
        </Button>
        <Button color='primary'>Button</Button>
        <Button color='primary' variant='ghost' onClick={() => {addClient()}}>
          Ghost
        </Button>
      </div>
    </main>
  )
}
