import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getAPIAct, showData } from "../redux/fetch/Get";

import { Button, CardTable, Input, NavTop, ShowCard } from "../components";
import { BiSliderAlt, BiSolidUserPlus } from "react-icons/bi";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import ReactPaginate from "react-paginate";

const DashboardAdmin = () => {
  const { loading, data, error, detailsData } = useSelector(
    (state) => state.getAPI
  );
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);
  const [addData, setAddData] = React.useState(false);
  const [openDetail, setOpenDetail] = React.useState(false);
  const [openDataId, setOpenDataId] = React.useState("");
  const [openActiveTest, setOpenActiveTest] = React.useState(false);
  const [showTable, setShowTable] = React.useState(10);

  const perPage =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : showTable;
  const pageCount = Math.ceil(data.length / perPage);

  const offset = currentPage * perPage;
  const currentPageData = data.slice(offset, offset + perPage);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleAddData = () => {
    setAddData(true);
  };

  // const handleOpenActiveTest = (i) => {
  //   console.log(i);
  //   if (i === 0) {
  //     return setOpenActiveTest(false);
  //   } else {
  //     setOpenActiveTest(true);
  //     setOpenDataId(i);
  //     return;
  //   }
  // };

  // const fetchData = async () => {
  //   try {
  //     dispatch(getAPIAct(`http://localhost:8000/peserta`));
  //   } catch (error) {
  //     console.log("Error Fetching :", error);
  //   }
  // };

  // this.deletePost()

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getAPIAct(`http://localhost:8000/peserta`));
      } catch (error) {
        console.log("Error Fetching :", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await dispatch(deleteData(id));
    // Setelah data dihapus, panggil action refresh untuk merefresh data
    dispatch(getAPIAct(`http://localhost:8000/peserta`));
  };

  const handleDetail = async (id) => {
    await dispatch(showData(id));
  };
  console.log("detail =", detailsData);

  return (
    <div className="pl-[80px] w-full h-screen  flex justify-center ">
      <div className=" bg-white mx-auto  w-full h-auto scrollbar-thumb-white scrollbar-track-slate-300 ">
        <NavTop />
        <ShowCard
          type="AddData"
          opens={addData}
          close={() => setAddData(false)}
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
        <div className="w-auto h-[55px] px-10 pt-3 flex flex-row justify-between">
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
                <option value={data.length}>Show All</option>
              </select>
            </label>
          </div>
        </div>
        <div className="mr-5">
          <div className=" w-full h-[70vh] mt-3 overflow-scroll pl-10 overflow-x-auto flex flex-col justify-between scrollbar-thin overflow-y-scroll ">
            <table className="table-fixed md:table-auto w-full max-h-max border-collapse border border-slate-500">
              <thead className="bg-[#4BABD6] text-white h-11 sticky top-0 border border-[#929292]">
                <tr className="w-full border border-[#929292]">
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

              {error ? (
                <>Oh no, there was an error</>
              ) : loading ? (
                <>Loading...</>
              ) : (
                <tbody>
                  {currentPageData.map((item, i) => {
                    return (
                      <CardTable
                        key={item._id}
                        NoReg={item.no_reg}
                        Role={item.role_kelas}
                        Name={item.nama}
                        JenisPeserta={item.jenis_peserta}
                        Gender={item.gender}
                        Instansi={item.instansi}
                        Nilai={item.nilai}
                        ActDelete={() => handleDelete(item._id)}
                        ActShow={() => handleDetail(item._id)}
                      />
                    );
                  })}
                </tbody>
              )}
            </table>
          </div>
        </div>
        <div className="flex justify-between items-center px-10">
          <span className="pt-2">Showing 1 to 10 of 1 entries</span>
          <div className="flex gap-3 pt-3">
            <ReactPaginate
              previousLabel={"< Prev"}
              nextLabel={"Next >"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={0}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={
                "active bg-[#4BABD6] border-none text-white_color"
              }
              className="flex justify-center space-x-5 mt-0 flex-wrap w-full"
              previousClassName="flex justify-center items-center w-auto px-4 h-[35px] rounded-xl font-semibold text-text_color border-2 border-gray_color"
              nextClassName="border-2 border-gray_color border-gray-500 flex justify-center items-center w-auto px-4 h-[35px] rounded-xl font-semibold text-text_color"
              pageClassName="border-2 border-gray_color flex justify-center items-center w-[35px] h-[35px] rounded-full font-semibold text-text-black mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
