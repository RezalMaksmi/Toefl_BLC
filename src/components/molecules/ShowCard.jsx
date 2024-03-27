import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { LuAlignRight,LuX } from "react-icons/lu";
import { Button, Input } from '../atoms';

const ShowCard = (props) => {
  const { opens, close } = props; 

    return (
      <React.Fragment >
        
        <Dialog
          open={opens}
          onClose={close}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="lg"
          fullWidth="true"

          className='relative w-full '
        >
            <span className='absolute top-0 right-0 px-2 py-2 text-2xl' onClick={close}><LuX /></span>

          <DialogTitle id="alert-dialog-title" className='text-center'>
            {"Tambah Data Peserta"}
          </DialogTitle>
          <DialogContent  className=' w-full '>
            <div className="flex flex-row gap-9 w-[100%] px-10">

                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-2 max-w-6xl w-full">
                        <span className=''>Nama</span>
                        <Input placeholder="Masukkan Nama" className="px-2 py-3 "/>
                    </div>
                    <div className="flex flex-col gap-2 max-w-6xl w-full">
                        <span className=''>No Reg</span>
                        <Input placeholder="Masukkan No Reg" className="px-2 py-3"/>
                    </div>
                    <div className="flex flex-col gap-2 max-w-6xl w-full">
                        <span className=''>Jenis Kelamin</span>
                        <Input placeholder="Masukkan Jenis Kelamin" className="px-2 py-3"/>
                    </div>
                    <div className="flex flex-col gap-2 max-w-6xl w-full">
                        <span className=''>Jenis Peserta</span>
                        <Input placeholder="Masukkan Jenis Peserta" className="px-2 py-3"/>
                    </div>
                    <div className="flex flex-col gap-2 w-6xl w-full">
                        <span className=''>Tempat Tanggal Lahir</span>
                        <Input placeholder="Masukkan Kota" className="px-2 py-3"/>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-2">
                        <span className=''>Alamat</span>
                        <Input placeholder="Masukkan Alamat" className="px-2 py-3"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className=''>Instansi</span>
                        <Input placeholder="Masukkan Instansi" className="px-2 py-3"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className=''>Role</span>
                        <Input placeholder="Masukkan Role" className="px-2 py-3"/>
                    </div>
                </div>
               
            </div>
          </DialogContent>
          <DialogActions className='mr-4 mb-3'>
            <Button type="PrimaryButton" text="Tambah Data" className="bg-[#22A5C4] " />
          </DialogActions>
        </Dialog>
      </React.Fragment>
  )
}

export default ShowCard
