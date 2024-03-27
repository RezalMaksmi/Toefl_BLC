import React, {useState, useEffect} from 'react'
import { Button, CardTable, Input, NavTop, ShowCard } from '../components';
import Product from './Product';
import { Images } from '../assets';
import { BiChevronDown, BiChevronLeft, BiChevronRight, BiEdit, BiPlus, BiShow, BiSkipNext, BiSliderAlt } from "react-icons/bi";
import { LuDelete } from 'react-icons/lu';

const DashboardAdmin = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Peserta = [
    {
      no : "001",
      role : "Peserta",
      gender : "Laki-laki",
      nama : "Rezal Nur Syaifudin",
      jenis : "Reguler",
      instansi : "UNIKAMA",
      nilai : "100"
    },
    {
      no : "002",
      role : "Peserta",
      gender : "Perempuan",
      nama : "Siti Nur Jannah",
      jenis : "Reguler",
      instansi : "UNIKAMA",
      nilai : "100"
    },
    {
      no : "002",
      role : "Peserta",
      gender : "Perempuan",
      nama : "Siti Nur Jannah",
      jenis : "Reguler",
      instansi : "UNIKAMA",
      nilai : "100"
    },
    {
      no : "002",
      role : "Peserta",
      gender : "Perempuan",
      nama : "Siti Nur Jannah",
      jenis : "Reguler",
      instansi : "UNIKAMA",
      nilai : "100"
    },
    {
      no : "002",
      role : "Peserta",
      gender : "Perempuan",
      nama : "Siti Nur Jannah",
      jenis : "Reguler",
      instansi : "UNIKAMA",
      nilai : "100"
    },
    {
      no : "002",
      role : "Peserta",
      gender : "Perempuan",
      nama : "Siti Nur Jannah",
      jenis : "Reguler",
      instansi : "UNIKAMA",
      nilai : "100"
    }
    ,
    {
      no : "002",
      role : "Peserta",
      gender : "Perempuan",
      nama : "Siti Nur Jannah",
      jenis : "Reguler",
      instansi : "UNIKAMA",
      nilai : "100"
    }
    ,
    {
      no : "002",
      role : "Peserta",
      gender : "Perempuan",
      nama : "Siti Nur Jannah",
      jenis : "Reguler",
      instansi : "UNIKAMA",
      nilai : "100"
    }
    ,
    {
      no : "002",
      role : "Peserta",
      gender : "Perempuan",
      nama : "Siti Nur Jannah",
      jenis : "Reguler",
      instansi : "UNIKAMA",
      nilai : "100"
    }
    ,
    {
      no : "002",
      role : "Peserta",
      gender : "Perempuan",
      nama : "Siti Nur Jannah",
      jenis : "Reguler",
      instansi : "UNIKAMA",
      nilai : "100"
    }
  ]
  return (
    <div className="pl-[80px] w-full h-screen  flex justify-center ">
      <div className=" bg-white mx-auto w-full h-auto">
        <NavTop />
        <ShowCard opens={open} close={handleClose} />
        <div className="w-auto h-[60px] px-10 pt-5 flex flex-row justify-between">
          <div className="flex gap-2">
            <Button type="ButtonIcon" className="bg-[#FF4E4E] items-center text-white " text="tambah" onClick={handleClickOpen} icon={<BiPlus className='text-2xl' />} />
            <Button type="ButtonIcon" className="bg-[#58b4ad] items-center text-white " text="Filter" icon={<BiSliderAlt className='text-2xl' />} />
          </div>
          <div className="max-w-2xl w-full flex flex-row gap-4 ">
            <Input typeInput="Search" placeholder="Search..." />
            <Button type="ButtonIcon" className="bg-[#E1E1E1] items-center flex-row-reverse" text={`Show `} icon={<BiChevronDown/>} />
          </div>
        </div>
<div className="h-3"></div>
        <div className=" w-full h-[70vh] overflow-scroll px-10 overflow-x-auto flex flex-col justify-between">
          <table class=" table-fixed md:table-auto w-full max-h-max border-collapse border border-slate-500">
            <thead className='bg-[#4BABD6] text-white h-11'>
              <tr >
                <th className='border border-[#929292]'>No Reg</th>
                <th className='border border-[#929292]'>Role</th>
                <th className='border border-[#929292]'>Nama</th>
                <th className='border border-[#929292]'>Jenis Peserta</th>
                <th className='border border-[#929292]'>Gender</th>
                <th className='border border-[#929292]'>Instansi</th>
                <th className='border border-[#929292]'>Nilai</th>
                <th className='border border-[#929292] md:w-[150px] w-[60px]'>Action</th>
              </tr>
            </thead>
            
            <tbody >
              {/* <tr className='border border-[#929292]'>
                <td className='border py-4 border-[#929292] px-2'>0111</td>
                <td className='border border-[#929292] px-2'>Peserta</td>
                <td className='border border-[#929292] px-2'>Rezal Nur Syaifudin</td>
                <td className='border border-[#929292] px-2'>Reguler</td>
                <td className='border border-[#929292] px-2'>Laki-laki</td>
                <td className='border border-[#929292] px-2'>UNIKAMA</td>
                <td className='border border-[#929292] px-2'>109</td>
                <td className='flex md:flex-row gap-1 w-fit flex-col text-center mx-auto '>
                  <Button type="ButtonIconCS" className="bg-[#4BABD6] items-center text-white " icon={<BiEdit />} />
                  <Button type="ButtonIconCS" className="bg-[#58b4ad] items-center text-white " icon={<BiShow />} />
                  <Button type="ButtonIconCS" className="bg-[#FF4E4E] items-center text-white " icon={<LuDelete />} />

                </td>
              </tr> */}

              {
                Peserta.map((item) => {
                  return (
                  <CardTable 
                      NoReg={item.no}
                      Role={item.role}
                      Name={item.nama}
                      JenisPeserta={item.jenis}
                      Gender={item.gender}
                      Instansi={item.instansi}
                      Nilai={item.nilai}
                      ActShow={""}
                      ActEdit={""}
                      ActDelete={""}
                  />
                );
                })
              }
            
            </tbody>
          </table>


          
        </div>
          <div className="flex justify-between items-center px-10">
            <span className="py-4">Showing 1 to 10 of 1 entries</span>

            <div className="flex gap-3 py-3">
              <Button type="ButtonIcon" className="bg-[#F2F2F2] items-center text-[#363636] " text="Prev" icon={<BiChevronLeft className='text-2xl' />} />
              <Button type="ButtonIcon" className="bg-[#F2F2F2] items-center text-[#363636] flex-row-reverse" text="Next" icon={<BiChevronRight className='text-2xl' />} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default DashboardAdmin
