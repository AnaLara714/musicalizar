import React from "react";
import Card from "./Card";
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-[80vh] bg-[#7FE7FF] p-4 sm:p-6 md:p-8 lg:px-12 xl:px-40 flex justify-center items-center">
      <Card>
        <div className="h-[301px] flex justify-center flex-col ">
          <h1 className="font-nerko text-4xl uppercase text-[36px] text-center">
            Login
          </h1>
          <p>Email</p>
          <input
            type="email"
            className="border bg-gray-200 border-gray-200 rounded-lg  h-[37px] mb-4 p-2"
            placeholder="Digite seu email"
          />
          <label className="block mb-2">Senha</label>
          <PasswordInput />
          <button
            className="bg-orange-600 text-white font-bold p-2 rounded-lg "
            onClick={() => navigate("/manager")}
          >
            Entrar
          </button>
        </div>
      </Card>
    </div>
  );
}
