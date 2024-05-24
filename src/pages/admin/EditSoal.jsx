import React from "react";
import { CardSoal } from "../../components";

const EditSoal = () => {
  const [showTable, setShowTable] = React.useState(10);

  return (
    <div className="pl-[80px] w-full h-full  flex justify-center ">
      <div className=" bg-white mx-auto w-full h-auto">
        <div className="w-auto h-auto px-10 py-5 flex flex-row justify-start items-center gap-10">
          <span>Edit Soal</span>
          <label>
            <select
              className="w-[150px] px-2 py-2 focus:outline-none border rounded-md"
              name="selectedJenisPeserta"
              onChange={(e) => setShowTable(e.target.value)}
            >
              <option value={10}>Pretest</option>
              <option value={30}>Post Test 1</option>
              <option value={50}>Post Test 2</option>
            </select>
          </label>
        </div>
        <div className="w-full px-10  grid grid-cols-6 gap-5 ">
          <div className="bg-[#F3F3F3] h-[90vh] shadow-md border col-span-1 rounded-2xl px-2 py-2 relative">
            <div className="flex flex-col">
              <button className="w-full py-3 bg-white rounded-xl">
                Soal 1
              </button>
              <button className="w-full py-3  rounded-xl ">Soal 1</button>
            </div>

            <button className="absolute flex bottom-2 left-2 right-2 py-3 px-2 rounded-xl bg-slate-600 text-white ">
              Tambah Soal
            </button>
          </div>
          <div className="bg-white col-span-5 shadow-md border rounded-2xl px-2 py-2">
            <CardSoal type="listening" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSoal;
