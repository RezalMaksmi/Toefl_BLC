import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
import { LuX } from "react-icons/lu";
import { Button, Input } from "../atoms";
import defaultProfile from "../../assets/img/default-profile.png";
import { addData, getAPIAct } from "../../redux/fetch/Get";
import { useDispatch, useSelector } from "react-redux";

const AddDataPeserta = (props) => {
  const { opens, close } = props;
  const dispatch = useDispatch();
  const [gender, setGender] = React.useState();
  const [name, setName] = React.useState();
  const [NoReg, setNoReg] = React.useState();
  const [participantType, setParticipantType] = React.useState();
  const [role, setRole] = React.useState();
  const [date, setDate] = React.useState();
  const [image, setImage] = React.useState();
  const [email, setEmail] = React.useState();
  const [instansi, setInstansi] = React.useState();
  const [alamat, setAlamat] = React.useState();
  const [noHp, setNoHp] = React.useState();
  const [message, setMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [edit, setEdit] = React.useState(false);

  function refreshPage() {
    window.location.reload(false);
  }

  const addPeserta = () => {
    const dataPeserta = {
      no_reg: NoReg,
      role_kelas: role,
      jenis_peserta: participantType,
      nama: name,
      email: email,
      no_hp: noHp,
      gender: gender,
      tgl_lahir: date,
      instansi: instansi,
      alamat: alamat,
    };

    console.log(JSON.stringify(dataPeserta));
    try {
      close(true);
      dispatch(addData(dataPeserta));
      dispatch(getAPIAct(`http://localhost:8000/peserta`));
    } catch (error) {
      console.log(error);
    }
  };

  // const onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setImage(URL.createObjectURL(event.target.files[0]));
  //   }
  // };

  return (
    <React.Fragment>
      <Dialog open={opens} onClose={close} maxWidth="lg" fullWidth={true}>
        <span
          className="absolute top-0 right-0 px-2 py-2 text-2xl"
          onClick={close}
        >
          <LuX />
        </span>

        <DialogTitle id="alert-dialog-title" className="text-center font-bold ">
          {"Tambah Data Peserta"}
        </DialogTitle>
        <DialogContent className=" w-full ">
          <div className="flex flex-row gap-9 w-[100%] px-10">
            <div className="flex flex-col gap-4 w-full relative">
              <Input
                typeInput="InputForm"
                name="Nama"
                placeholder="Masukkan Nama"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <span
                className={`text-red-700 text-[12px] top-[-10px] left-1  ${
                  !message ? "hidden" : "relative"
                }`}
              >
                {!name ? "Isi mama lengkap" : ""}
              </span>

              <Input
                typeInput="InputForm"
                className={`${!errorMessage ? "" : "border-red-500"}`}
                name="No Reg"
                placeholder="Masukkan NIM/NPM/NIP"
                type="text"
                onChange={(e) => setNoReg(e.target.value)}
              />
              {!message ? (
                <span
                  className={`text-red-700 text-[12px] top-[-10px] left-1  ${
                    !message ? "hidden" : "relative"
                  } `}
                >
                  {!NoReg ? "Isi nomor induk mahasiswa" : ""}
                </span>
              ) : (
                <span
                  className={`text-red-700 text-[12px] top-[-10px] left-1  ${
                    !errorMessage ? "hidden" : "relative"
                  } `}
                >
                  {errorMessage}{" "}
                </span>
              )}

              <Input
                typeInput="InputForm"
                name="No Hp"
                placeholder="Masukkan No Hp"
                type="text"
                onChange={(e) => setNoHp(e.target.value)}
              />
              <span
                className={`text-red-700 text-[12px] top-[-10px] left-1  ${
                  !message ? "hidden" : "relative"
                }`}
              >
                {!noHp ? "Isi nomor Registrasi" : ""}
              </span>

              <div className="flex flex-col gap-2 max-w-6xl w-full">
                <span className="">Jenis Kelamin</span>
                <form className="flex flex-row gap-4">
                  <label className="flex flex-row gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="laki-laki"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Laki-laki
                  </label>

                  <label className="flex flex-row gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="perempuan"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    Perempuan
                  </label>
                </form>
                <span
                  className={`text-red-700 text-[12px] top-[-5px] left-1  ${
                    !message ? "hidden" : "relative"
                  }`}
                >
                  {!gender ? "Pilih gender" : ""}
                </span>
              </div>

              <div className="flex flex-col gap-2 max-w-6xl w-full">
                <span className="">Jenis Peserta</span>
                <label>
                  <select
                    className="w-full px-2 py-3 focus:outline-none border rounded-md"
                    name="selectedJenisPeserta"
                    defaultValue="pilih"
                    onChange={(e) => setParticipantType(e.target.value)}
                  >
                    <option value="pilih" disabled>
                      Pilih Jenis Peserta
                    </option>
                    <option value="Reguler">Reguler</option>
                    <option value="VIP">VIP</option>
                    <option value="Umum">Umum</option>
                  </select>
                </label>
                <span
                  className={`text-red-700 text-[12px] top-[-5px] left-1  ${
                    !message ? "hidden" : "relative"
                  }`}
                >
                  {!participantType ? "Pilih jenis peserta" : ""}
                </span>
              </div>
              <div className="flex flex-col gap-2 w-6xl w-full">
                <span className="">Tanggal Lahir</span>
                <div className="flex flex-row gap-3">
                  {/* <Input placeholder="Masukkan Kota" className="px-2 py-3 w-full"
                          onChange={e => setAlamat(e.target.value)}/> */}
                  <Input
                    type="date"
                    className="px-2 w-[50%]"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-2">
                <span className="">Alamat</span>
                <textarea
                  placeholder="Masukkan Alamat"
                  className="px-2 py-3 focus:outline-none focus:border-slate-600 border rounded-md"
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="">Email</span>
                <Input
                  placeholder="Masukkan Email"
                  className="px-2 py-3"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="">Instansi</span>
                <Input
                  placeholder="Masukkan Instansi"
                  className="px-2 py-3"
                  onChange={(e) => setInstansi(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="">Role</span>
                <Input
                  placeholder="Masukkan Role"
                  className="px-2 py-3"
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="">Foto</span>
                <div className="flex flex-row gap-2">
                  <div className="w-[90px] h-[100px] overflow-hidden rounded-md border border-black flex justify-center  items-center bg-cover">
                    <img
                      alt="preview image"
                      src={image ? image : defaultProfile}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <input type="file" onChange={onImageChange} className="filetype" /> */}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="mr-4 mb-3">
          <Button
            type="PrimaryButton"
            text="Tambah Data"
            className="bg-[#22A5C4] "
            onClick={addPeserta}
          />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AddDataPeserta;
