import React, { useState, useEffect } from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiExport,
  BiSliderAlt,
} from "react-icons/bi";
import { Button, Input } from "../../components";
import { LayoutAdmin } from "../../template";
import axiosInstance from "../../api/axiosInstance";

const HasilTest = () => {
  //data
  const [test, setTest] = useState([]);
  const [testPeserta, setTestPeserta] = useState([]);
  const [currentTest, setCurrentTest] = useState("");

  //fetch data
  const fetchJenisTest = async () => {
    const response = await axiosInstance.get("http://localhost:8000/test");
    setTest(response.data.data);
  };

  const fetchTestPeserta = async (id_test) => {
    const response = await axiosInstance.get(
      `http://localhost:8000/peserta/by-hasil/${id_test}`
    );
    setTestPeserta(response.data.data);
  };

  useEffect(() => {
    fetchJenisTest();
    fetchTestPeserta(currentTest);
  }, [currentTest]);

  return (
    <LayoutAdmin>
      <div className=" bg-white mx-auto w-full h-auto">
        <h1 className="px-10 font-semibold text-xl mt-5">Hasil Test</h1>
        <div className="w-auto h-[60px] px-10 pt-5 flex flex-row justify-between">
          <div className="flex gap-2">
            <Button
              type="ButtonIcon"
              className="bg-[#FF4E4E] items-center text-white "
              text="Export"
              icon={<BiExport className="text-2xl" />}
              //   onClick={onDownload}
            />
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
                onChange={(e) => setCurrentTest(e.target.value)}
              >
                {test.map((item, i) => {
                  return <option value={item.id}>{item.jenis_test}</option>;
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
                <th className="border border-[#929292]">Tgl. Test</th>
                <th className="border border-[#929292]">Status Test</th>
                <th className="border border-[#929292]">Listening</th>
                <th className="border border-[#929292]">Structure</th>
                <th className="border border-[#929292]">Reading</th>
                <th className="border border-[#929292]">Total</th>
              </tr>
            </thead>
            <tbody>
              {testPeserta ? (
                testPeserta.map((item, i) => {
                  return (
                    <tr className="border border-[#929292] " key={i}>
                      <td className="border py-3 border-[#929292] px-2">
                        {item.no_reg}
                      </td>
                      <td className="border border-[#929292] px-2">
                        {item.nama_peserta}
                      </td>
                      <td className="border border-[#929292] px-2">
                        {item.tgl_test}
                      </td>
                      <td className="border border-[#929292] px-2">
                        {item.status_test == 0 ? (
                          <>belum test</>
                        ) : (
                          <>sudah test</>
                        )}
                      </td>
                      <td className="border border-[#929292] px-2">
                        {item.listening == null ? (
                          <>-</>
                        ) : (
                          item.listening + "/50"
                        )}
                      </td>
                      <td className="border border-[#929292] px-2">
                        {item.structure == null ? (
                          <>-</>
                        ) : (
                          item.structure + "/40"
                        )}
                      </td>
                      <td className="border border-[#929292] px-2">
                        {item.reading == null ? <>-</> : item.reading + "/50"}
                      </td>
                      <td className="border border-[#929292] px-2">
                        {item.total == null ? <>-</> : item.total}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="border border-[#929292] ">
                  <td
                    colSpan="10"
                    className="border py-3 border-[#929292] px-2 text-center"
                  >
                    Data Kosong
                  </td>
                </tr>
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

export default HasilTest;
