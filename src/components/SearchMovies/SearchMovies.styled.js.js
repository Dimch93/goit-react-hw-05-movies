import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-right: 15px;
  font-size: 16px;
`;

export const Button = styled.button`
  border-radius: 4px;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #000000;
    color: #ffffff;
  }
`;
