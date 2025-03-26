import React from "react";
import Card from "./Card";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import EmailForm from "./EmailForm";

export default function Contact() {
  return (
    <div
      id="contato"
      className="bg-[#6BE4FF] w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        {}
        <h2 className="text-2xl font-nerko uppercase text-center mb-8 md:text-3xl">
          Entre em Contato
        </h2>

        {}
        <p className="text-center mt-2 text-sm sm:text-base md:text-lg">
          Descubra o poder da música na Escola Musicalizar! 🎶 Entre em contato
          conosco e transforme sua paixão em melodia. Deixe-nos guiar você em
          uma jornada sonora única, onde cada nota conta uma história. Vamos
          criar harmonia juntos!
        </p>

        {}
        <div className="flex flex-col sm:flex-row justify-around items-center gap-4 my-6 sm:my-8">
          <div className="flex items-center gap-2">
            <FaWhatsapp size={20} className="sm:w-6 sm:h-6" />
            <p className="text-sm sm:text-base">(88) 49028922</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineEmail size={20} className="sm:w-6 sm:h-6" />
            <p className="text-sm sm:text-base">escolamusicalizar@gmail.com</p>
          </div>
        </div>

        {}
        <Card>
          <EmailForm />
        </Card>
      </div>
    </div>
  );
}
