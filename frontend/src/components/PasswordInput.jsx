import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false); 

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'} 
        className="border bg-gray-200 border-gray-200 rounded-lg h-[37px] mb-4 w-full pl-2 pr-10"
        placeholder="Digite sua senha"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)} 
        className="absolute right-2 top-2 text-gray-600 focus:outline-none"
      >
        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />} {}
      </button>
    </div>
  );
}

export default PasswordInput;