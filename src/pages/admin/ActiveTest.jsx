import React, { useState, useEffect } from "react";
import { Loading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../api/axiosInstance";
import { LayoutAdmin } from "../../template";
import { getTestAct, activeTestAct } from "../../redux/test/Test";

const ActiveTest = () => {
  const dispatch = useDispatch();
  const { data, detail, status } = useSelector((state) => state.test);

  const handleActiveTest = (id) => {
    fetchDataTest();
    dispatch(activeTestAct(id));
  };

  const fetchDataTest = async () => dispatch(await getTestAct("/test"));
  useEffect(() => {
    fetchDataTest();
  }, []);
  return (
    <LayoutAdmin>
      <div className=" bg-white mx-auto w-full h-screen">
        <div className="p-4">
          {data ? (
            data.map((item, i) => {
              return (
                <div className="flex px-4 py-2" key={i}>
                  <label className="font-semibold">{item.jenis_test}</label>
                  <label
                    className="inline-flex items-center cursor-pointer mx-4"
                    onClick={handleActiveTest(item.id)}
                  >
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onChange={() => {}}
                      checked={item.status}
                    />

                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default ActiveTest;
