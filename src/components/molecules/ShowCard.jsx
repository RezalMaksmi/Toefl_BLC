import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { LuAlignRight, LuX } from "react-icons/lu";
import { Button, Input } from "../atoms";
import defaultProfile from "../../assets/img/default-profile.png";
import _default from "@mui/material/styles/identifier";
import { BiCheck } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getAPIActById } from "../../redux/fetch/Get";

const ShowCard = (props) => {
  const { type, opens, close, onClickEdit, id } = props;
  const [gender, setGender] = React.useState();
  const [name, setName] = React.useState();
  const [NoReg, setNoReg] = React.useState();
  const [participantType, setParticipantType] = React.useState();
  const [city, setCity] = React.useState();
  const [date, setDate] = React.useState();
  const [image, setImage] = React.useState();
  const [edit, setEdit] = React.useState(false);

  console.log(edit);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const dispatch = useDispatch();
  // dispatch(getAPIActById(`http://localhost:8000/peserta/${id}`));
  console.log(onClickEdit);
  // const { dataDetail } = useSelector((state) => state.getAPI);
  // console.log("apa isinya", dataDetail);

  const { data, detail } = useSelector((state) => state.users);

  switch (type) {
    case "AddData":
      return (
        <React.Fragment>
          <Dialog
            open={opens}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="lg"
            fullWidth="true"
            className="relative w-full "
          >
            <span
              className="absolute top-0 right-0 px-2 py-2 text-2xl"
              onClick={close}
            >
              <LuX />
            </span>

            <DialogTitle
              id="alert-dialog-title"
              className="text-center font-bold "
            >
              <h1 className="font-bold text-2xl">{"Tambah Data Peserta"}</h1>
            </DialogTitle>
            <DialogContent className=" w-full ">
              <div className="flex flex-row gap-9 w-[100%] px-10">
                <div className="flex flex-col gap-4 w-full">
                  <Input
                    typeInput="InputForm"
                    name="Nama"
                    placeholder="Masukkan Nama"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    typeInput="InputForm"
                    name="No Reg"
                    placeholder="Masukkan NIM/NPM/NIP"
                    type="text"
                    onChange={(e) => setNoReg(e.target.value)}
                  />
                  <span></span>
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
                  </div>
                  <div className="flex flex-col gap-2 w-6xl w-full">
                    <span className="">Tempat Tanggal Lahir</span>
                    <div className="flex flex-row gap-3">
                      <Input
                        placeholder="Masukkan Kota"
                        className="px-2 py-3 w-full"
                        onChange={(e) => setCity(e.target.value)}
                      />
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
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="">Instansi</span>
                    <Input
                      placeholder="Masukkan Instansi"
                      className="px-2 py-3"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="">Role</span>
                    <Input placeholder="Masukkan Role" className="px-2 py-3" />
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
                      <input
                        type="file"
                        onChange={onImageChange}
                        className="filetype"
                      />
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
              />
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
    case "ShowData":
      return (
        <React.Fragment>
          <Dialog
            open={opens}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="md"
            fullWidth="true"
            className="relative w-full "
          >
            <span
              className="absolute top-0 right-0 px-2 py-2 text-2xl"
              onClick={close}
            >
              <LuX />
            </span>
            <DialogTitle
              id="alert-dialog-title"
              className="text-center font-bold "
            >
              <h1 className="font-bold text-2xl">{"Data Peserta"}</h1>
            </DialogTitle>
            <DialogContent className=" w-full ">
              {detail ? (
                <div className="flex flex-row gap-9 w-[100%] px-10">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-row gap-5 max-w-6xl w-full">
                      <span className="">Nama</span>
                      <span>:</span>
                      <span>{detail.nama_peserta}</span>
                    </div>
                    <div className="flex flex-row gap-5 max-w-6xl w-full">
                      <span className="">No Reg</span>
                      <span>:</span>
                      <span>{detail.no_reg}</span>
                    </div>
                    <div className="flex flex-row gap-5 max-w-6xl w-full">
                      <span className="">Jenis Kelamin</span>
                      <span>:</span>
                      <span>{detail.gender}</span>
                    </div>
                    <div className="flex flex-row gap-5 max-w-6xl w-full">
                      <span className="">Jenis Peserta</span>
                      <span>:</span>
                      <span>{detail.kelas}</span>
                    </div>
                    <div className="flex flex-row gap-5 max-w-6xl w-full">
                      <span className="">Tempat Tanggal Lahir</span>
                      <span>:</span>
                      <span>{detail.tgl_lahir}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-row gap-5 max-w-6xl w-full">
                      <span className="">Alamat</span>
                      <span>:</span>
                      <span>{detail.alamat}</span>
                    </div>
                    <div className="flex flex-row gap-5 max-w-6xl w-full">
                      <span className="">Instansi</span>
                      <span>:</span>
                      <span>{detail.instansi}</span>
                    </div>
                    <div className="flex flex-row gap-5 max-w-6xl w-full">
                      <span className="">Role</span>
                      <span>:</span>
                      <span>{detail.role}</span>
                    </div>
                    <div className="flex flex-col gap-3 max-w-6xl w-full">
                      <span className="">Foto :</span>
                      <div className="w-[90px] h-[100px] overflow-hidden rounded-md border border-black flex justify-center  items-center bg-cover">
                        <img
                          alt="preview image"
                          src={
                            detail.profile_picture
                              ? detail.profile_picture
                              : defaultProfile
                          }
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                "Loading"
              )}
            </DialogContent>
            <DialogActions className="mr-4 mb-3">
              <Button
                type="PrimaryButton"
                text="Edit Data"
                className="bg-[#22A5C4] "
                onClick={onClickEdit}
              />
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );

    case "ActiveTest":
      return (
        <React.Fragment>
          <Dialog
            open={opens}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            // maxWidth="md"
            // fullWidth="true"
            className="relative w-full "
          >
            <span
              className="absolute top-0 right-0 px-2 py-2 text-2xl"
              onClick={close}
            >
              <LuX />
            </span>
            <DialogTitle
              id="alert-dialog-title"
              className="text-center font-bold "
            >
              <h1 className="font-bold text-2xl">{"Active Test"}</h1>
            </DialogTitle>
            <DialogContent className=" w-full ">
              <div className="flex flex-row gap-2 w-[100%] px-3 pb-4">
                <div className="flex flex-row gap-2 w-full">
                  <Button
                    type="ButtonIcon"
                    text="Pretest"
                    className="bg-[#58b4ad] text-white items-center"
                    icon={<BiCheck />}
                  />
                  <Button
                    type="ButtonIcon"
                    text="Post Test 1"
                    className="bg-[#58b4ad] text-white items-center"
                    icon={<BiCheck />}
                  />
                  <Button
                    type="ButtonIcon"
                    text="Post Test 2"
                    className="bg-[#58b4ad] text-white items-center"
                    icon={<BiCheck />}
                  />
                  <Button
                    type="ButtonIcon"
                    text="Equivalent"
                    className="bg-[#58b4ad] text-white items-center"
                    icon={<BiCheck />}
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </React.Fragment>
      );
    default:
      return <div className=""></div>;
  }
};

export default ShowCard;
