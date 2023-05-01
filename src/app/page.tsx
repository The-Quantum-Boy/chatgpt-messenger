import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center text-white h-screen px-2'>
      <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>
      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className="h-8 w-8 text-white" />
            <h2>Example</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>"Explain something to me"</p>
            <p className='infoText'>
              "what is the difference between a dog and a cat"
            </p>
            <p className='infoText'>
              "what is the color of the sun?"
            </p>
          </div>
        </div>

        
         <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className="h-8 w-8 text-white" />
            <h2>Capabilities</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>
              Charge the ChatGPT Model to use
            </p>
            <p className='infoText'>
              Messages are sotred in Firebase's Firestore
            </p>
            <p className='infoText'>
              "what is the color of the sun?"
            </p>
          </div>
        </div>
         <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className="h-8 w-8 text-white" />
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>
                May occasionally generate incorrect information
            </p>
            <p className='infoText'>
                May occasionally produce harmful instructions or biased content
            </p>
            <p className='infoText'>
                Limited knowledge of world and event after 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage