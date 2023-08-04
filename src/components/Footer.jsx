import React from 'react'
import {AiOutlineFacebook,AiOutlineInstagram,AiFillGithub,AiFillTwitterSquare} from 'react-icons/ai';

export default function Footer() {
  return (
    <div className='bg-[#2699fb] p-4 md:grid grid-cols-6 '>
    <div className='col-span-2  '>
      <h1 className='text-black font-bold text-4xl mt-12 ml-16'>Nishant Pandey</h1>
      <p className='ml-16 mt-[20px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className='mt-4 ml-12 flex flex-row'>
      <AiOutlineFacebook className='mx-4 text-4xl text-white'/>
      <AiOutlineInstagram className='mx-4 text-4xl text-white'/>
      <AiFillTwitterSquare className='mx-4 text-4xl text-white'/>
      <AiFillGithub className='mx-4 text-4xl text-white'/>
      </div>
    </div>
    <div className='col-span-1  '>
      <h1 className='mt-20 font-bold text-xl ml-12 '>Solutions</h1>
      <p className='text-white text-sm  ml-12 mt-4 '>Analytics</p>
      <p className='text-white  text-sm ml-12 mt-4'>Marketing</p>
      <p className='text-white text-sm  ml-12 mt-4'>Commerce</p>
      <p className='text-white text-sm  ml-12 mt-4'>Insights</p>
    </div>
    <div className='col-span-1 '>
    <h1 className='mt-20 font-bold text-xl ml-12'>Support</h1>
      <p className='text-white text-sm  ml-12 mt-4'>Pricing</p>
      <p className='text-white text-sm  ml-12 mt-4'>Documentation</p>
      <p className='text-white text-sm  ml-12 mt-4'>Guides</p>
      <p className='text-white text-sm  ml-12 mt-4'>API Status</p>
    </div>
    <div className='col-span-1 '>
    <h1 className='mt-20 font-bold text-xl ml-12'>Company</h1>
      <p className='text-white text-sm  ml-12 mt-4'>About</p>
      <p className='text-white text-sm  ml-12 mt-4'>Blog</p>
      <p className='text-white text-sm  ml-12 mt-4'>Jobs</p>
      <p className='text-white text-sm  ml-12 mt-4'>Press</p>
      <p className='text-white  text-sm ml-12 mt-4'>Careers</p>
    </div>
    <div className='col-span-1 '>
    <h1 className='mt-20 font-bold text-xl ml-12'>Legal</h1>
      <p className='text-white text-sm  ml-12 mt-4'>Claim</p>
      <p className='text-white text-sm  ml-12 mt-4'>Policy</p>
      <p className='text-white text-sm  ml-12 mt-4'>Terms</p>
      
    </div>
    </div>
  )
}
