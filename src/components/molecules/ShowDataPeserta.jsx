import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { LuX } from "react-icons/lu";
import { Button } from "../atoms";
import defaultProfile from "../../assets/img/default-profile.png";
import { useDispatch, useSelector } from "react-redux";
import { getAPIAct } from "../../redux/fetch/Get";

const ShowDataPeserta = (props) => {
  const { opens, close, id, key } = props;
  const [image, setImage] = React.useState();

  return (
    <React.Fragment>
      <Dialog open={opens} onClose={close} maxWidth="md" fullWidth={true}>
        <span
          className="absolute top-0 right-0 px-2 py-2 text-2xl"
          onClick={close}
        >
          <LuX />
        </span>
        <DialogTitle id="alert-dialog-title" className="text-center font-bold ">
          {"Data Peserta"}
        </DialogTitle>
        <DialogContent className=" w-full ">
          <div className="flex flex-row gap-9 w-[100%] px-10">
            {/* <h1>{id}</h1> */}
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-row gap-5 max-w-6xl w-full">
                <span className="">Nama</span>
                <span>:</span>
                {/* <span>{user.nama}</span> */}
              </div>
              <div className="flex flex-row gap-5 max-w-6xl w-full">
                <span className="">No Reg</span>
                <span>:</span>
                {/* <span>{user.no_reg}</span> */}
              </div>
              <div className="flex flex-row gap-5 max-w-6xl w-full">
                <span className="">Jenis Kelamin</span>
                <span>:</span>
                {/* <span>{user.gender}</span> */}
              </div>
              <div className="flex flex-row gap-5 max-w-6xl w-full">
                <span className="">Jenis Peserta</span>
                <span>:</span>
                {/* <span>{user.jenis_peserta}</span> */}
              </div>
              <div className="flex flex-row gap-5 max-w-6xl w-full">
                <span className="">Tempat Tanggal Lahir</span>
                <span>:</span>
                {/* <span>{user.tgl_lahir}</span> */}
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-row gap-5 max-w-6xl w-full">
                <span className="">Alamat</span>
                <span>:</span>
                {/* <span>{user.alamat}</span> */}
              </div>
              <div className="flex flex-row gap-5 max-w-6xl w-full">
                <span className="">Instansi</span>
                <span>:</span>
                {/* <span>{user.instansi}</span> */}
              </div>
              <div className="flex flex-row gap-5 max-w-6xl w-full">
                <span className="">Role</span>
                <span>:</span>
                {/* <span>{user.role_kelas}</span> */}
              </div>
              <div className="flex flex-col gap-3 max-w-6xl w-full">
                <span className="">Foto :</span>
                <div className="w-[90px] h-[100px] overflow-hidden rounded-md border border-black flex justify-center  items-center bg-cover">
                  <img
                    alt="preview image"
                    src={image ? image : defaultProfile}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="mr-4 mb-3">
          <Button
            type="PrimaryButton"
            text="Edit Data"
            className="bg-[#22A5C4] "
          />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ShowDataPeserta;
