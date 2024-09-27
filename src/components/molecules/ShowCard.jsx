import React, { Children, useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { LuX } from "react-icons/lu";
import { Button, CardSoal, Input } from "../atoms";
import defaultProfile from "../../assets/img/default-profile.png";
import { BiCheck } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../api/axiosInstance";
import { setAddTypeQuizAct } from "../../redux/quiz/Quiz";
import { activateUserTestAct } from "../../redux/users/Users";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { VscFile } from "react-icons/vsc";
import Loading from "./Loading";

const ShowCard = (props) => {
  const {
    type,
    opens,
    close,
    onClickEdit,
    id,
    handleSubmit,
    nameValue,
    genderValue,
    noRegValue,
    noHpValue,
    jenisValue,
    roleValue,
    alamatValue,
    emailValue,
    dateValue,
    instansiValue,
    usernameValue,
    passwordValue,
    handleSaveAdmin,
    Children,
    closeCart,
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addTypeQuiz, setAddTypeQuiz] = useState(null);
  const [jenisP, setJenisP] = useState();
  const [roleP, setRoleP] = useState();
  const [click, setClick] = useState("");
  const [test, setTest] = useState([]);

  const dispatch = useDispatch();

  const { data, detail } = useSelector((state) => state.users);
  const { typeQuiz, valueTypeQuiz } = useSelector((state) => state.quiz);

  const handleTypeQuiz = (data) => {
    setAddTypeQuiz(data);
    setClick("click");
    close(false);
  };

  const handleActiveTestPeserta = async (e, test) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        `http://localhost:8000/peserta/active/${detail.id_peserta}`,
        { id_test: test }
      );
      close(false);
      setClick("click");
      Swal.fire("Berhasil!", "mengaktifkan peserta", "success");
    } catch (error) {
      setError(error);
    } finally {
      close(false);
      setIsLoading(false);
    }
    // dispatch(activateUserTestAct(detail.id_peserta, test));
  };

  console.log(test);
  const handleActiveTestPesertaCheckbox = async (e, test) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`peserta/active/more/peserta`, {
        id_test: test,
        peserta: id,
      });
      setClick("click");
      close(false);
      Swal.fire("Berhasil!", "mengaktifkan peserta", "success");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
    // dispatch(activateUserTestAct(detail.id_peserta, test));
  };

  const fetchTest = async () => {
    try {
      const response = await axiosInstance.get("http://localhost:8000/test");
      setTest(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const rolePeserta = async () => {
    try {
      const response = await axiosInstance.get(
        "http://localhost:8000/role_peserta"
      );
      setRoleP(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const jenisPeserta = async () => {
    try {
      const response = await axiosInstance.get(
        "http://localhost:8000/jenis_kelas"
      );
      setJenisP(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    addTypeQuiz && dispatch(setAddTypeQuizAct(addTypeQuiz));

    rolePeserta();
    fetchTest();

    jenisPeserta();
    setClick("");
  }, [addTypeQuiz, click, close]);

  // ---------------------------------
  const { dataMonth, dataIdFile, dataYear } = props;
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const location = useLocation();

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      accept: ".xlsx, .xls", // Accept specific file types
    });

  const handleUploadProgress = (progressEvent) => {
    const progress = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total
    );
    setUploadProgress(progress);
  };

  console.log(file);

  const handleSubmitFile = async (event) => {
    event.preventDefault();

    if (!file) {
      toast.error("Please select a file to upload.", {
        position: "bottom-right",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file_excel", file);
    setIsLoading(true);
    close(false);

    try {
      await axiosInstance.post(`peserta/upload/import_peserta`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: handleUploadProgress,
      });
      setIsLoading(false);
      Swal.fire("Berhasil!", "Menambahkan Peserta", "success");
    } catch (error) {
      setIsLoading(false);
      console.error("Error uploading file:", error);
      toast.error("Failed to upload file", { position: "bottom-right" });
    } finally {
      setIsLoading(false);
      handleRefresh();
    }
  };

  !isLoading && <Loading />;
  const handleRefresh = () => {
    window.location.reload();
  };
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
            fullWidth={true}
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
                    onChange={nameValue}
                  />
                  <Input
                    typeInput="InputForm"
                    name="No Reg"
                    placeholder="Masukkan NIM/NPM/NIP"
                    type="text"
                    onChange={noRegValue}
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
                          onChange={genderValue}
                        />
                        Laki-laki
                      </label>

                      <label className="flex flex-row gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value="perempuan"
                          onChange={genderValue}
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
                        onChange={jenisValue}
                      >
                        <option value="pilih" disabled>
                          Pilih Jenis Peserta
                        </option>
                        {jenisP
                          ? jenisP.map((item, i) => {
                              return (
                                <option key={i} value={item.id}>
                                  {item.nama_kelas}
                                </option>
                              );
                            })
                          : ""}
                      </select>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2 w-6xl w-full">
                    <span className="">Tanggal Lahir</span>
                    <div className="flex flex-row gap-3">
                      <Input
                        type="date"
                        className="px-2 w-[50%]"
                        onChange={dateValue}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col gap-2">
                    <span className="">Email</span>
                    <Input
                      placeholder="Masukkan Email"
                      onChange={emailValue}
                      className="px-2 py-3"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="">Alamat</span>
                    <textarea
                      placeholder="Masukkan Alamat"
                      onChange={alamatValue}
                      className="px-2 py-1 focus:outline-none focus:border-slate-600 border rounded-md"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="">No hp</span>
                    <Input
                      placeholder="Masukkan No hp"
                      onChange={noHpValue}
                      className="px-2 py-3"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="">Instansi</span>
                    <Input
                      placeholder="Masukkan Instansi"
                      onChange={instansiValue}
                      className="px-2 py-3"
                    />
                  </div>
                  <div className="flex flex-col gap-2 max-w-6xl w-full">
                    <span className="">Role Peserta</span>
                    <label>
                      <select
                        className="w-full px-2 py-3 focus:outline-none border rounded-md"
                        name="selectedRolePeserta"
                        defaultValue="pilih"
                        onChange={roleValue}
                      >
                        <option value="pilih" disabled>
                          Pilih Role Peserta
                        </option>
                        {roleP
                          ? roleP.map((item, i) => {
                              return (
                                <option key={i} value={item.id}>
                                  {item.nama_role}
                                </option>
                              );
                            })
                          : ""}
                      </select>
                    </label>
                  </div>
                </div>
              </div>
            </DialogContent>
            <DialogActions className="mr-4 mb-3">
              <Button
                type="PrimaryButton"
                text="Tambah Data"
                className="bg-[#22A5C4] hover:bg-[#287e92]"
                onClick={handleSubmit}
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
            fullWidth={true}
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
                  {test.map((item, i) => {
                    return (
                      <Button
                        key={i}
                        type="ButtonIcon"
                        text={item.jenis_test}
                        onClick={(e) => handleActiveTestPeserta(e, item.id)}
                        className="bg-[#58b4ad] text-white items-center"
                        icon={<BiCheck />}
                      />
                    );
                  })}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </React.Fragment>
      );
    case "ActiveTestCheckbox":
      return (
        <React.Fragment>
          <Dialog
            open={opens}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
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
                  {test.map((item, i) => {
                    return (
                      <Button
                        key={i}
                        type="ButtonIcon"
                        text={item.jenis_test}
                        onClick={(e) =>
                          handleActiveTestPesertaCheckbox(e, item.id)
                        }
                        className="bg-[#58b4ad] text-white items-center"
                        icon={<BiCheck />}
                      />
                    );
                  })}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </React.Fragment>
      );
    case "AddAdmin":
      return (
        <React.Fragment>
          <Dialog
            open={opens}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="md"
            fullWidth={true}
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
              <h1 className="font-bold text-2xl">{"Tambah Admin"}</h1>
            </DialogTitle>
            <DialogContent className=" w-full ">
              <div className="flex flex-row gap-9 w-[100%] px-10">
                <div className="flex flex-col gap-4 w-full">
                  <Input
                    typeInput="InputForm"
                    name="Username"
                    placeholder="Masukkan Username"
                    type="text"
                    onChange={usernameValue}
                  />
                  <Input
                    typeInput="InputForm"
                    name="Password"
                    placeholder="Masukkan Password"
                    type="text"
                    onChange={passwordValue}
                  />
                </div>
              </div>
            </DialogContent>
            <DialogActions className="mr-4 mb-3">
              <Button
                type="PrimaryButton"
                text="Simpan"
                className="bg-[#22A5C4] hover:bg-[#287e92]"
                onClick={handleSaveAdmin}
              />
            </DialogActions>
          </Dialog>
        </React.Fragment>
      );
    case "addQuiz":
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
              <h1 className="font-bold text-2xl">{"Pilih Jenis Soal"}</h1>
            </DialogTitle>
            <DialogContent className=" w-full">
              <div className="flex flex-row gap-2 w-[100%] px-2 pb-4">
                <div className="flex flex-row gap-2 w-full">
                  {typeQuiz &&
                    typeQuiz.map((item, i) => {
                      return (
                        <Button
                          key={i}
                          type="ButtonIcon"
                          text={item.type_soal}
                          className="bg-[#58b4ad] text-white items-center"
                          onClick={() => handleTypeQuiz(item)}
                          // icon={<BiCheck />}
                        />
                      );
                    })}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </React.Fragment>
      );
    case "addFile":
      return (
        <React.Fragment>
          <Dialog
            open={opens}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="relative w-full"
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
              <h1 className="font-bold text-2xl">{"Import File"}</h1>
            </DialogTitle>
            <DialogContent className=" w-full">
              <div className="flex flex-col gap-2 w-[100%] px-2 pb-4">
                {/* <h1 className="font-semibold text-xl mb-2">Update Laporan</h1> */}
                <form onSubmit={handleSubmitFile}>
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed p-20 cursor-pointer mb-5 text-center ${
                      isDragActive ? "bg-[#e0f7fa]" : "bg-[#fafafa]"
                    }`}
                  >
                    {file ? (
                      <div className="flex items-center justify-center">
                        <VscFile className="mr-2 text-2xl text-[#0087F7]" />
                        <p>{file.name}</p>
                      </div>
                    ) : (
                      <>
                        <p>
                          Drag and drop a file here, or click to select a file
                        </p>
                        <input
                          type="file"
                          className="w-[100px]"
                          onChange={handleFileChange}
                        />
                      </>
                    )}
                    <input {...getInputProps()} />
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-md bg-[#079FDB] text-white"
                    >
                      Uploud
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-md bg-[#ee3636] text-white"
                    >
                      Download Template
                    </button>
                  </div>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <Dialog
            open={opens}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="lg"
            fullWidth={true}
            className="relative w-full "
          >
            <DialogTitle
              id="alert-dialog-title"
              className="text-center font-bold "
            >
              <h1 className="font-bold text-2xl">{"Edit Soal"}</h1>
            </DialogTitle>
            <DialogContent className=" w-full">{Children}</DialogContent>
          </Dialog>
        </React.Fragment>
      );
  }
};

export default ShowCard;
