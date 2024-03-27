import React from 'react'
import { Images } from '../../assets'

const NavTop = () => {
  return (
    <div className="w-full py-4 h-[80px] bg-white flex justify-between items-center px-[50px] shadow">
          <Images type="logo" className="bg-pink h-full" />

          <div className="h-full rounded-full pr-5 gap-2 border-2 border-neutral-500  flex items-center">
            <div className="h-full p-1 ">  
            <Images type="profile" className="h-full w-max" />
            </div>
            <div className="flex flex-col ">
              <h3 className='font-semibold'>
                Rezal Nur Syaifudin
              </h3>
              <span className='text-xs'>rezalnurscc@gmail.com</span>
            </div>
          </div>
        </div>
  )
}

export default NavTop
