import React from 'react';

const Input = ({ label, type, id, name, onChange, required }) => {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block mb-2 text-gray-600 text-xs font-medium uppercase">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        required={required}
        className="w-full p-3 border border-gray-300 rounded"
      />
    </div>
  );
};

export default Input;