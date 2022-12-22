import React from 'react';
import tw from 'styled-components';
const Input = ({
  id,
  label,
  type,
  ref,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <InputItem className="flex flex-col w-3/4 items-centre justify-between border-b-2 py-2 ">
      <label htmlFor={id}>{label}</label>
      <input
        className="w-full bg-transparent border-0 outline-none text-lg p-2 text-primaryColor font-light"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        ref={ref}
      />
    </InputItem>
  );
};
const InputItem = tw.div``;
export default Input;
