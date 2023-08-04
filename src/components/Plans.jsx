import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Multiple from '../assets/multiple.png'

export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
    <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-10'>
        <div className='shadow-xl my-4 h-[400px] hover:scale-105 duration-300 text-center'>
        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Web development</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>
        <div className='shadow-xl my-4 h-[400px] hover:bg-gray-100 hover:scale-105 duration-300 text-center'>
             <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="/" />
             <h2 className='text-2xl font-bold text-center py-8'>Web development</h2>
                    <p className='text-center text-4xl font-bold'>$250</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>
        <div className='shadow-xl my-4 h-[400px] hover:scale-105 duration-300 text-center'>
             <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Multiple} alt="/" />
             <h2 className='text-2xl font-bold text-center py-8'>Web development</h2>
                    <p className='text-center text-4xl font-bold'>$350</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
        </div>
    </div>

    </div>
  )
}
