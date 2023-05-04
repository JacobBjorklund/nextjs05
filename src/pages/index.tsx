import Image from 'next/image'
import { Inter } from 'next/font/google'
import { use, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [number, changeNumber] = useState(0)

  return (
    <div className='bg-gray-600 h-screen flex justify-center gap-3 items-center'>
      <div>
        <h1>{number}</h1>
      </div>
      <button onClick={() => changeNumber(number + 1)} className='p-1 bg-blue-500 rounded'>Increase</button>
      <button onClick={() => changeNumber(number - 1)} className='p-1 bg-blue-500 rounded'>Decrease</button>
      <button onClick={() => changeNumber(0)} className='p-1 bg-blue-500 rounded'>Reset</button>
    </div>
  )
}
