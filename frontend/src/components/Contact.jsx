import React from 'react';
import Card from './Card';
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import EmailForm from './EmailForm';

export default function Contact() {
  return (
    <div className=" bg-[#6BE4FF] flex flex-col items-center gap-6 p-4">
      {}
      <h1 className="font-nerko text-4xl uppercase text-center">
        Entre em contato
      </h1>

      {}
      <p className="w-[850px] text-center text-gray-600">"Descubra o poder da música na Escola Musicalizar! 🎶 Entre em contato conosco e transforme sua paixão em melodia. Deixe-nos guiar você em uma jornada sonora única, onde cada nota conta uma história. Vamos criar harmonia juntos!"?
      </p>

      {}
      <div className="flex flex-row justify-around items-center gap-4">
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