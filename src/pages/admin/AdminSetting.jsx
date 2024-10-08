import React, { useState, useEffect } from "react";
import { Button, Input, Loading, ShowCard } from "../../components";
import { BiSolidUserPlus, BiSliderAlt, BiCheckSquare } from "react-icons/bi";
import { LuDelete } from "react-icons/lu";
import { LayoutAdmin } from "../../template";
import {
  createAdminAct,
  getAdminAct,
  adminDeleteAct,
  updatePasswordAdminAct,
} from "../../redux/admin/Admin";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const AdminSetting = () => {
  const [addAdmin, setAddAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var no = 1;

  const dispatch = useDispatch();
  const { data, detail, status } = useSelector((state) => state.admin);

  const handleAddAdmin = () => {
    setAddAdmin(true);
  };

  const handleSubmitAdmin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Username dan password harus diisi!", {
        position: "top-right",
      });
      return;
    }

    const dataSubmit = {
      username: username,
      password: password,
    };

    dispatch(createAdminAct(dataSubmit));
    setAddAdmin(false);
    fetchDataAdmin();
    Swal.fire("Berhasil!", status, "success");
  };

  const handleDeleteAdmin = (id) => {
    Swal.fire({
      title: "Hapus admin",
      text: "Apakah anda yakin ingin menghapus admin ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        fetchDataAdmin();
        dispatch(adminDeleteAct(id));
        Swal.fire("Berhasil!", status, "success");
      } else if (result.isDismissed) {
        Swal.fire("Batal", "Admin tetap ada", "info");
      }
    });
  };

  const handleUpdatePassword = (id) => {
    Swal.fire({
      title: "Ganti Password (password minimal 6 karakter)",
      input: "password",
      inputPlaceholder: "Password baru",
      showCancelButton: true,
      confirmButtonText: "Simpan",
    }).then((result) => {
      if (result.isConfirmed) {
        fetchDataAdmin();
        dispatch(updatePasswordAdminAct(id, { new_password: result.value }));
        Swal.fire("Berhasil", status, "success");
      } else {
        Swal.fire("Gagal!", "Password gagal diubah", "error");
      }
    });
  };

  const fetchDataAdmin = async () => {
    dispatch(await getAdminAct("/admin"));
  };

  useEffect(() => {
    fetchDataAdmin();
  }, []);

  return (
    <LayoutAdmin>
      <div className=" bg-white mx-auto w-full h-auto">
        <h1 className="px-10 font-semibold text-xl mt-5">Admin</h1>
        <ShowCard
          type="AddAdmin"
          opens={addAdmin}
          close={() => setAddAdmin(false)}
          usernameValue={(e) => setUsername(e.target.value)}
          passwordValue={(e) => setPassword(e.target.value)}
          handleSaveAdmin={handleSubmitAdmin}
        />
        <div className="w-auto h-[60px] px-10 pt-5 flex flex-row justify-between">
          <div className="flex gap-2">
            <Button
              type="ButtonIcon"
              className="bg-[#FF4E4E] items-center text-white "
              text="tambah admin"
              onClick={handleAddAdmin}
              icon={<BiSolidUserPlus className="text-2xl" />}
            />
          </div>
        </div>
        <div className="h-3"></div>
        <div className=" w-full h-[70vh] overflow-scroll px-10 overflow-x-auto flex flex-col justify-between">
          <table className=" table-fixed md:table-auto w-full max-h-max border-collapse border border-slate-500">
            <thead className="bg-[#4BABD6] text-white h-11">
              <tr>
                <th className="border border-[#929292] w-1/12">No.</th>
                <th className="border border-[#929292] w-8/12">Username</th>
                <th className="border border-[#929292] w-2/12">Role</th>
                <th className="border border-[#929292] w-2/12">Action</th>
              </tr>
            </thead>
            <tbody>
              {data ? (
                data.map((item, i) => {
                  return (
                    <tr className="border border-[#929292] " key={i}>
                      <td className="border py-3 border-[#929292] text-center">
                        {no++}
                      </td>
                      <td className="border py-3 border-[#929292] px-2">
                        {item.username}
                      </td>
                      <td className="border py-3 border-[#929292] px-2">
                        Admin
                      </td>
                      <td className="">
                        <div className="flex md:flex-row gap-2 w-fit flex-col text-center mx-auto my-2">
                          <Button
                            type="ButtonIconCS"
                            className="bg-[#58b4ad] items-center text-white "
                            onClick={() => handleUpdatePassword(item.id)}
                            icon={<BiCheckSquare />}
                          />
                          <Button
                            type="ButtonIconCS"
                            className="bg-[#FF4E4E] items-center text-white "
                            onClick={() => handleDeleteAdmin(item.id)}
                            icon={<LuDelete />}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <Loading />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default AdminSetting;
