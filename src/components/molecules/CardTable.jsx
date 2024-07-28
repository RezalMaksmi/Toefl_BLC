import React from "react";
import { Button } from "../atoms";
import { BiCheckSquare, BiEdit, BiShow } from "react-icons/bi";
import { LuDelete } from "react-icons/lu";

const CardTable = (props) => {
  const {
    NoReg,
    Name,
    Gender,
    Alamat,
    Email,
    NoHp,
    Instansi,
    ActShow,
    ActActiveTest,
    ActDelete,
    onClickEdit,
  } = props;
  return (
    <tr className="border border-[#929292] ">
      <td className="border py-3 border-[#929292] px-2">{NoReg}</td>
      <td className="border border-[#929292] px-2">{Name}</td>
      <td className="border border-[#929292] px-2">{Gender}</td>
      <td className="border border-[#929292] px-2">{Alamat}</td>
      <td className="border border-[#929292] px-2">{Email}</td>
      <td className="border border-[#929292] px-2">{NoHp}</td>
      <td className="border border-[#929292] px-2">{Instansi}</td>
      <td className="border border-[#929292] px-2"></td>
      <td className="flex md:flex-row gap-2 w-fit flex-col text-center mx-auto my-2">
        <Button
          type="ButtonIconCS"
          className="bg-[#58b4ad] items-center text-white "
          onClick={ActActiveTest}
          icon={<BiCheckSquare />}
        />
        <Button
          type="ButtonIconCS"
          className="bg-[#4BABD6] items-center text-white "
          onClick={ActShow}
          icon={<BiShow />}
        />
        <Button
          type="ButtonIconCS"
          className="bg-[#FF4E4E] items-center text-white "
          onClick={ActDelete}
          icon={<LuDelete />}
        />
      </td>
    </tr>
  );
};

export default CardTable;
