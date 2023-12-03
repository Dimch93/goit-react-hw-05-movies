import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 40px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  border: 1px solid #0d57aa;
  border-radius: 6px;
  background-color: #ffffff;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #000000;
    color: #ffffff;
  }
`;
