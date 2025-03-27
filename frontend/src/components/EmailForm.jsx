// components/EmailForm.jsx
import React from "react";

export default function EmailForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <form className="max-w-3xl mx-auto" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite seu email"
          required
        />
      </div>

    
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 my-2">
          Mensagem
        </label>
        <textarea
          id="message"
          rows="4"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
          placeholder="Digite sua mensagem"
          required
        ></textarea>
      </div>

      
      <div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enviar mensagem
        </button>
      </div>
    </form>
  );
}
