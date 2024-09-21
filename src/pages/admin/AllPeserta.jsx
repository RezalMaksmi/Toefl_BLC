import React, { useState, useEffect } from "react";
import { Button, CardTable, Input, Loading, ShowCard } from "../../components";
import {
  BiChevronLeft,
  BiChevronRight,
  BiSliderAlt,
  BiSolidUserPlus,
} from "react-icons/bi";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createUsersAct,
  getUsersAct,
  getUsersActDetail,
  usersDeleteAct,
} from "../../redux/users/Users";
import Swal from "sweetalert2";
import { LayoutAdmin } from "../../template";
import { toast } from "react-toastify";

const AllPeserta = () => {
  const [addData, setAddData] = useState(false);
  const [addFile, setAddFile] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [openDataId, setOpenDataId] = useState();
  const [openActiveTest, setOpenActiveTest] = useState();
  const [showTable, setShowTable] = useState(10);

  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [noReg, setNoReg] = useState("");
  const [noHp, setNoHp] = useState("");
  const [jenis, setJenis] = useState("");
  const [role, setRole] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [instansi, setInstansi] = useState("");
  const [image, setImage] = useState();
  const [edit, setEdit] = useState(false);

  // checklist
  // State untuk checkbox individual dan select all
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Fungsi untuk handle ketika select all dicentang
  const handleSelectAll = () => {
    if (!selectAll) {
      // Jika select all dicentang, tambahkan semua item
      const allIds = data && data.map((item) => item.id_peserta);
      setSelectedItems(allIds);
    } else {
      // Jika select all di-uncheck, kosongkan daftar
      setSelectedItems([]);
    }
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const dispatch = useDispatch();

  const { data, detail, status } = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !noReg ||
      !role ||
      !jenis ||
      !name ||
      !email ||
      !noHp ||
      !gender ||
      !date ||
      !instansi ||
      !alamat
    ) {
      toast.error("Data tidak boleh kosong!", {
        position: "top-right",
      });
      return;
    }

    const dataGroub = {
      no_reg: noReg,
      role_kelas: jenis,
      jenis_peserta: role,
      nama_peserta: name,
      email: email,
      no_hp: noHp,
      gender: gender,
      tgl_lahir: date,
      instansi: instansi,
      alamat: alamat,
    };
    dispatch(createUsersAct(dataGroub));
    setAddData(false);
    fetchData();
  };
  // ===================

  const handleAddData = () => {
    setAddData(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin ingin menghapus peserta?",
      text: "data yang telah dihapus tidak bisa dikembalikan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.value) {
        fetchData();
        dispatch(usersDeleteAct(id));
      }
    });
  };

  const handleOpenDetail = (i) => {
    dispatch(getUsersActDetail(i));
    if (i === 0) {
      return setOpenDetail(false);
    } else {
      setOpenDetail(true);
      setOpenDataId(i);
      return;
    }
  };

  const handleOpenActiveTest = (i) => {
    dispatch(getUsersActDetail(i));
    if (i === 0) {
      return setOpenActiveTest(false);
    } else {
      setOpenActiveTest(true);
      setOpenDataId(i);
      return;
    }
  };

  const fetchData = async () => {
    dispatch(await getUsersAct(`/peserta`));
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedItems?.length === data?.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedItems, data]);
  return (
    <LayoutAdmin>
      <div className=" bg-white mx-auto w-full h-auto">
        <h1 className="px-10 font-semibold text-xl mt-5">Semua Peserta</h1>
        <ShowCard
          type="AddData"
          opens={addData}
          close={() => setAddData(false)}
          nameValue={(e) => setName(e.target.value)}
          genderValue={(e) => setGender(e.target.value)}
          noRegValue={(e) => setNoReg(e.target.value)}
          noHpValue={(e) => setNoHp(e.target.value)}
          jenisValue={(e) => setJenis(e.target.value)}
          roleValue={(e) => setRole(e.target.value)}
          alamatValue={(e) => setAlamat(e.target.value)}
          emailValue={(e) => setEmail(e.target.value)}
          dateValue={(e) => setDate(e.target.value)}
          instansiValue={(e) => setInstansi(e.target.value)}
          handleSubmit={handleSubmit}
        />

        <ShowCard
          type="addFile"
          opens={addFile}
          close={() => setAddFile(false)}
        />

        <ShowCard
          type="ShowData"
          opens={openDetail}
          close={() => setOpenDetail(false)}
          id={openDataId}
        />
        <ShowCard
          type="ActiveTest"
          opens={openActiveTest}
          close={() => setOpenActiveTest(false)}
          id={openDataId}
        />
        <div className="w-auto h-[60px] px-10 pt-5 flex flex-row justify-between">
          <div className="flex gap-2">
            <Button
              type="ButtonIcon"
              className="bg-[#FF4E4E] items-center text-white "
              text="tambah"
              onClick={handleAddData}
              icon={<BiSolidUserPlus className="text-2xl" />}
            />
            <Button
              type="ButtonIcon"
              className="bg-[#58b4ad] items-center text-white "
              text="Filter"
              icon={<BiSliderAlt className="text-2xl" />}
            />
            <Button
              type="ButtonIcon"
              className="bg-[#21716a] items-center text-white "
              text="Import Peserta"
              onClick={() => setAddFile(true)}
              icon={<BiSliderAlt className="text-2xl" />}
            />

            <Button
              type="ButtonIcon"
              className="bg-[#346fce] items-center text-white "
              text="Aktifkan Test"
              onClick={() => setOpenActiveTest(true)}
              icon={<BiSliderAlt className="text-2xl" />}
            />
          </div>
          <div className="max-w-2xl w-full flex flex-row gap-4 ">
            <Input typeInput="Search" placeholder="Search..." />
            <label>
              <select
                className="w-[100px] px-2 py-2 focus:outline-none border rounded-md"
                name="selectedJenisPeserta"
                onChange={(e) => setShowTable(e.target.value)}
              >
                <option value={10}>Show 10</option>
                <option value={30}>Show 30</option>
                <option value={data ? data.length : ""}>Show All</option>
              </select>
            </label>
          </div>
        </div>
        <div className="h-3"></div>
        <div className=" w-full h-[70vh] overflow-scroll px-10 overflow-x-auto flex flex-col justify-between">
          <table className=" table-fixed md:table-auto w-full max-h-max border-collapse border border-slate-500">
            <thead className="bg-[#4BABD6] text-white h-11">
              <tr>
                <th className="border border-[#929292]">
                  <div className="">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </div>
                </th>
                <th className="border border-[#929292]">No Reg</th>
                <th className="border border-[#929292]">Nama Peserta</th>
                <th className="border border-[#929292]">Gender</th>
                <th className="border border-[#929292]">Alamat</th>
                <th className="border border-[#929292]">Email</th>
                <th className="border border-[#929292]">No.HP</th>
                <th className="border border-[#929292]">Instansi</th>
                <th className="border border-[#929292]">Active Test</th>
                <th className="border border-[#929292] md:w-[150px] w-[60px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data ? (
                data.map((item, i) => {
                  return (
                    <CardTable
                      key={i}
                      checked={selectedItems.includes(item.id_peserta)}
                      onChange={() => handleCheckboxChange(item.id_peserta)}
                      NoReg={item.no_reg}
                      Name={item.nama_peserta}
                      Gender={item.gender}
                      Alamat={item.alamat}
                      Email={item.email}
                      NoHp={item.no_hp}
                      Instansi={item.instansi}
                      ActiveTest={item.active_test}
                      ActShow={() => handleOpenDetail(item.id_peserta)}
                      ActActiveTest={() =>
                        handleOpenActiveTest(item.id_peserta)
                      }
                      ActDelete={() => handleDelete(item.id_peserta)}
                    />
                  );
                })
              ) : (
                <Loading />
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center px-10">
          <span className="py-4">Showing 1 to 10 of 1 entries</span>
          <div className="flex gap-3 py-3">
            <Button
              type="ButtonIcon"
              className="bg-[#F2F2F2] items-center text-[#363636] "
              text="Prev"
              icon={<BiChevronLeft className="text-2xl" />}
            />
            <Button
              type="ButtonIcon"
              className="bg-[#F2F2F2] items-center text-[#363636] flex-row-reverse"
              text="Next"
              icon={<BiChevronRight className="text-2xl" />}
            />
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default AllPeserta;
