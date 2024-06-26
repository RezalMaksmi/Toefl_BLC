import React from "react";
import { Button, Input } from "../../components";
import { BiChevronLeft, BiChevronRight, BiSliderAlt } from "react-icons/bi";
import { LayoutAdmin } from "../../template";

const PesertaTest = () => {
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
                <option value={10}>Pretest</option>
                <option value={30}>Post Test 1</option>
                <option value={0}>Post Test 2</option>
                <option value={0}>Equivalent Test</option>
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
                <th className="border border-[#929292]">Role</th>
                <th className="border border-[#929292]">Nama</th>
                <th className="border border-[#929292]">Jenis Peserta</th>
                <th className="border border-[#929292]">Gender</th>
                <th className="border border-[#929292]">Instansi</th>
                <th className="border border-[#929292]">Nilai</th>
                <th className="border border-[#929292] md:w-[150px] w-[60px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>Data Kosong</tbody>
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
