import React from 'react'
import { Button } from '../atoms'
import { BiEdit, BiShow } from 'react-icons/bi'
import { LuDelete } from 'react-icons/lu'

const CardTable = (props) => {
    const {NoReg, Role, Name, JenisPeserta, Gender,Instansi,Nilai, ActShow, ActEdit, ActDelete} = props
  return (
    <tr className='border border-[#929292] '>
    <td className='border py-3 border-[#929292] px-2'>{NoReg}</td>
    <td className='border border-[#929292] px-2'>{Role}</td>
    <td className='border border-[#929292] px-2'>{Name}</td>
    <td className='border border-[#929292] px-2'>{JenisPeserta}</td>
    <td className='border border-[#929292] px-2'>{Gender}</td>
    <td className='border border-[#929292] px-2'>{Instansi}</td>
    <td className='border border-[#929292] px-2'>{Nilai}</td>
    <td className='flex md:flex-row gap-2 w-fit flex-col text-center mx-auto '>
      <Button type="ButtonIconCS" className="bg-[#4BABD6] items-center text-white " icon={<BiEdit />} />
      <Button type="ButtonIconCS" className="bg-[#58b4ad] items-center text-white " icon={<BiShow />} />
      <Button type="ButtonIconCS" className="bg-[#FF4E4E] items-center text-white " icon={<LuDelete />} />
    </td>
  </tr> 
  )
}

export default CardTable
