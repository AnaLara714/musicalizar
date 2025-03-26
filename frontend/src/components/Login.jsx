import React, { useContext } from "react";
import Card from "./Card";
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { handleAuthentication } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Erro ao fazer login. Verifique suas credenciais.");
      }

      handleAuthentication();
      setEmail("");
      setPassword("");
      navigate("/manager");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="h-screen bg-[#7FE7FF] p-4 sm:p-6 md:p-8 lg:px-12 xl:px-40 flex justify-center items-center">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="block mb-2">Senha</label>
          <PasswordInput
            password={password}
            setPassword={setPassword}
          />
          <button
            className="bg-orange-600 text-white font-bold p-2 rounded-lg "
            onClick={handleLogin}
          >
            Entrar
          </button>
        </div>
      </Card>
    </div>
  );
}
