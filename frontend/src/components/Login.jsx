import React from 'react';
import Card from './Card';
import PasswordInput from './PasswordInput';


export default function Login() {
    return (
        <Card>
            <div className="w-[444px] h-[301px] flex justify-center flex-col ">
                <h1 className="font-nerko text-4xl uppercase text-[36px] mx-[180px]" >Login</h1>
                <p>Email</p>
                <input type="email" className="border bg-gray-200 border-gray-200 rounded-lg  h-[37px] mb-4 p-2" placeholder="Digite seu email" />
                    <label className="block mb-2">Senha</label>
                    <PasswordInput />
                <button className="bg-orange-600 text-white font-bold p-2 rounded-lg ">Entrar</button>
            </div>
        </Card>
    );
}

