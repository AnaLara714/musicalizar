import React from 'react';
import Card from './Card';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import EmailForm from './EmailForm';

export default function Contact() {
  return (
    <div className="w-[850px] h-[428px] flex flex-col items-center gap-6 p-4">
      {}
      <h1 className="font-nerko text-4xl uppercase text-center">
        Entre em contato
      </h1>

      {}
      <p className="text-center text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae sunt aliquid cum, nam quo minima nostrum corporis expedita nihil, voluptatibus maxime dolores, aut modi error amet! Illum quibusdam adipisci molestias?
      </p>

      {}
      <div className="w-full flex flex-row justify-around items-center gap-4">
        <div className="flex items-center gap-2">
          <FaWhatsapp className="" size={24} />
          <p>(88) 49028922</p>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineEmail className="" size={24} />
          <p>escolamusicalizar@gmail.com</p>
        </div>
      </div>

      {/* Formulário de contato */}
      <Card>
        <EmailForm />
      </Card>
    </div>
  );
}