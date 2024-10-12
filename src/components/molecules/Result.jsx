import React from 'react';
import { Button } from '../atoms';
import { useNavigate } from 'react-router-dom';

function Result({ score }) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div className=" bg-white mx-auto w-full h-auto mt-[75px] lg:px-[70px]">
        <div className="w-auto h-full px-10 py-10 flex justify-center items-end gap-10">
          <div className="bg-[#f8f8f8] w-2/3 h-full shadow-md border col-span-1 rounded-3xl px-2 py-2 relative">
            <div className="m-5 flex-row text-gray-800">
              <h2 className='font-bold text-2xl text-center'>TEST SUDAH SELESAI</h2>
              <div className='text-center mt-10'>
                <p className='font-semibold'>Total skor anda: </p>
                <p className='font-bold text-9xl'>{score}</p>
              </div>
              <p className='font-semibold text-xl text-center mt-10'>Silahkan kembali ke beranda untuk melihat skor Test anda</p>
              <div className='flex justify-center mt-10'>
                <Button
                  type={"PrimaryButton"}
                  text={"Kembali ke Beranda"}
                  className="bg-[#1283b6]"
                  onClick={() => navigate('/dashboard-peserta')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Result;
