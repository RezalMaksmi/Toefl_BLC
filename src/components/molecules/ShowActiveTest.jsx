import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { LuX } from "react-icons/lu";
import { Button } from '../atoms';
import { BiCheck } from 'react-icons/bi';


const ShowActiveTest = (props) => {
  const { opens, close, onClickEdit, id, setRefresh } = props; 

  return (
    <React.Fragment >
          
    <Dialog
      open={opens}
      onClose={close}
    >
        <span className='absolute top-0 right-0 px-2 py-2 text-2xl' onClick={close}><LuX /></span>
      <DialogTitle id="alert-dialog-title" className='text-center font-bold '>
        {"Active Test"}
      </DialogTitle>
      <DialogContent  className=' w-full '>
        <div className="flex flex-row gap-2 w-[100%] px-3 pb-4">

            <div className="flex flex-row gap-2 w-full">
                <Button type="ButtonIcon" text="Pretest"
                 className="bg-[#58b4ad] text-white items-center"
                 icon={<BiCheck />}
                />
                <Button type="ButtonIcon" text="Post Test 1"
                 className="bg-[#58b4ad] text-white items-center"
                 icon={<BiCheck />}
                />
                <Button type="ButtonIcon" text="Post Test 2"
                 className="bg-[#58b4ad] text-white items-center"
                 icon={<BiCheck />}
                />
                 <Button type="ButtonIcon" text="Equivalent"
                 className="bg-[#58b4ad] text-white items-center"
                 icon={<BiCheck />}
                />
            </div>
        </div>
      </DialogContent>
    </Dialog>
  </React.Fragment>
  )
}

export default ShowActiveTest
