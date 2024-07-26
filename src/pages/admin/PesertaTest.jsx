import React, { useState, useEffect } from "react";
import { Button, Input } from "../../components";
import { BiChevronLeft, BiChevronRight, BiSliderAlt, BiShow } from "react-icons/bi";
import { LuDelete } from "react-icons/lu";
import { LayoutAdmin } from "../../template";
import axiosInstance from "../../api/axiosInstance";
import Swal from "sweetalert2";

const PesertaTest = () => {
  //action
  const [openDetail, setOpenDetail] = useState(false);
  const [formatDate, setFormatDate] = useState();

  //data
  const [test, setTest] = useState([]);
  const [testPeserta, setTestPeserta] = useState([]);

  //action function
  const handleDelete = (id) => {
    Swal.fire({
      title: "Batal test",
      text: "Yakin ingin membatalkan test peserta?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {

    });
  };

  const handleOpenDetail = (i) => {

  };

  //fetch data
  const fetchJenisTest = async () => {
    const response = await axiosInstance.get('http://localhost:8000/test');
    setTest(response.data.data);
  }

  const fetchTestPeserta = async () => {
    const response = await axiosInstance.get('http://localhost:8000/peserta/by-test/d2626d7e-94b1-4fe1-b550-10f98447f69d');
    setTestPeserta(response.data.data);
  }

  useEffect(() => {
    fetchJenisTest();
    fetchTestPeserta();
  }, []);

  return (
    <LayoutAdmin>
      <div className=" bg-white mx-auto w-full h-auto">
        <div className="w-auto h-[60px] px-10 pt-5 flex flex-row justify-between">
          <div className="flex gap-2">
            <Button
              type="ButtonIcon"
              className="bg-[#58b4ad] items-center text-white "
              text="Filter"
              icon={<BiSliderAlt className="text-2xl" />}
            />
            <label>
              <select
                className="w-[200px] px-2 py-2 focus:outline-none border rounded-md"
                name="selectedJenisPeserta"
              // onChange={(e) => setShowTable(e.target.value)}
              >
                {test.map((item, i) => {
                  return (
                    <option value={item.id}>{item.jenis_test}</option>
                  )
                })}
              </select>
            </label>
          </div>
          <div className="max-w-2xl w-full flex flex-row gap-4 ">
            <Input typeInput="Search" placeholder="Search..." />
            <label>
              <select
                className="w-[100px] px-2 py-2 focus:outline-none border rounded-md"
                name="selectedJenisPeserta"
              // onChange={(e) => setShowTable(e.target.value)}
              >
                <option value={10}>Show 10</option>
                <option value={30}>Show 30</option>
                <option value={0}>Show All</option>
              </select>
            </label>
          </div>
        </div>
        <div className="h-3"></div>
        <div className=" w-full h-[70vh] overflow-scroll px-10 overflow-x-auto flex flex-col justify-between">
          <table class=" table-fixed md:table-auto w-full max-h-max border-collapse border border-slate-500">
            <thead className="bg-[#4BABD6] text-white h-11">
              <tr>
                <th className="border border-[#929292]">No Reg</th>
                <th className="border border-[#929292]">Nama Peserta</th>
                <th className="border border-[#929292]">Tgl. Daftar</th>
                <th className="border border-[#929292]">Status Test</th>
                <th className="border border-[#929292]">Listening</th>
                <th className="border border-[#929292]">Structure</th>
                <th className="border border-[#929292]">Reading</th>
                <th className="border border-[#929292]">Total</th>
                <th className="border border-[#929292] md:w-[150px] w-[60px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {testPeserta ? (
                testPeserta.map((item, i) => {
                  return (
                    <tr className="border border-[#929292] " key={i}>
                      <td className="border py-3 border-[#929292] px-2">{item.no_reg}</td>
                      <td className="border border-[#929292] px-2">{item.nama_peserta}</td>
                      <td className="border border-[#929292] px-2">{item.tgl_daftar}</td>
                      <td className="border border-[#929292] px-2">{item.status_test == 0 ? (<>belum test</>) : (<>sudah test</>)}</td>
                      <td className="border border-[#929292] px-2">{item.listening == null ? (<>-</>) : item.listening}</td>
                      <td className="border border-[#929292] px-2">{item.structure == null ? (<>-</>) : item.structure}</td>
                      <td className="border border-[#929292] px-2">{item.reading == null ? (<>-</>) : item.reading}</td>
                      <td className="border border-[#929292] px-2">{item.total == null ? (<>-</>) : item.total}</td>
                      <td className="flex md:flex-row gap-2 w-fit flex-col text-center mx-auto my-2">
                        <Button
                          type="ButtonIconCS"
                          className="bg-[#4BABD6] items-center text-white "
                          onClick={() => setOpenDetail(false)}
                          icon={<BiShow />}
                        />
                        <Button
                          type="ButtonIconCS"
                          className="bg-[#FF4E4E] items-center text-white "
                          onClick={() => handleDelete(i)}
                          icon={<LuDelete />}
                        />
                      </td>
                    </tr>
                  );
                })
              ) : (<>loading</>)}
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

export default PesertaTest;
