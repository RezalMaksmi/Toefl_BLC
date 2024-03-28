import React, {useState, useEffect} from 'react'
import { Button, CardTable, Input, NavTop, ShowCard } from '../components';
import { Images } from '../assets';
import { BiChevronDown, BiChevronLeft, BiChevronRight, BiSliderAlt, BiSolidUserPlus } from "react-icons/bi";
import { Users } from "../data";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

const DashboardAdmin = () => {
  const submit = () => {
    confirmAlert({
      title: 'Hapus Data',
      message: 'Anda yakin inginmenghapus data?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          className:"bg-white",
          onClick: () => alert('Click No')
        }
      ]
    });
  };
  const [addData, setAddData] = React.useState(false);
  const [openDetail, setOpenDetail] = React.useState(false);
  const [openDataId, setOpenDataId] = React.useState();
  const [openActiveTest, setOpenActiveTest] = React.useState();

  console.log(Users)
  const handleAddData = () => {
    setAddData(true);
  };

  const handleOpenDetail = (i) => {
    console.log(i)
    if (i === 0) {
     return setOpenDetail(false)
      
    }else{
      setOpenDetail(true)
      setOpenDataId(i)
     return; 
    }
  };

  const handleOpenActiveTest = (i) => {
    console.log(i)
    if (i === 0) {
     return setOpenActiveTest(false)
      
    }else{
      setOpenActiveTest(true)
      setOpenDataId(i)
     return; 
    }
  };

  return (
    <div className="pl-[80px] w-full h-screen  flex justify-center ">
      <div className=" bg-white mx-auto w-full h-auto">
        <NavTop />
        <ShowCard type="AddData" opens={addData} close={()=> setAddData(false)} />
        <ShowCard type="ShowData"  opens={openDetail} close={()=> setOpenDetail(false)} id={openDataId} />
        <ShowCard type="ActiveTest"  opens={openActiveTest} close={()=> setOpenActiveTest(false)} id={openDataId} />
        <div className="w-auto h-[60px] px-10 pt-5 flex flex-row justify-between">
          <div className="flex gap-2">
            <Button type="ButtonIcon" className="bg-[#FF4E4E] items-center text-white " text="tambah" onClick={handleAddData} icon={<BiSolidUserPlus  className='text-2xl' />} />
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
              {
                Users.map((item, i) => {
                  return (
                  <CardTable 
                      key={i}
                      NoReg={item.no}
                      Role={item.role}
                      Name={item.nama}
                      JenisPeserta={item.jenis}
                      Gender={item.gender}
                      Instansi={item.instansi}
                      Nilai={item.nilai}
                      ActShow={()=>handleOpenDetail(i+1)}
                      ActActiveTest={()=> handleOpenActiveTest(i+1)}
                      ActDelete={submit}
                  />);
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
