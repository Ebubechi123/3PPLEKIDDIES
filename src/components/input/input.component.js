import React from "react";
import styled from "styled-components";


const InputStyles = styled.input`
  width: ${({ width }) => (width ? width : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  box-shadow: ${({ shadow }) => (shadow ? shadow : "")};
  background: ${({ bg }) => (bg ? bg : "none")};
  font-size: 0.8rem;
  border-radius: ${({ radius }) => (radius ? radius : "")};
  border: ${({ border }) => (border ? border : "none")};
  outline: ${({ outline }) => (outline ? outline : "none")};
  ::placeholder {
    color: #b3b3b3;
    font-weight: 500;
  }
`;
const Input = ({
  width,
  padding,
  shadow,
  radius,
  bg,
  onChange,
  placeHolder,
  border,
  outline,
  required,
  value,
  type,
  disabled,
  checked,
  readOnly
}) => {
  return (
    <InputStyles
      width={width}
      padding={padding}
      shadow={shadow}
      radius={radius}
      outline={outline}
      border={border}
      bg={bg}
      placeholder={placeHolder}
      required={required}
      onChange={onChange}
      value={value}
      type={type}
      disabled={disabled}
      checked={checked}
      readOnly={readOnly}
    />
  );
};

export default Input;
