import styled from 'styled-components';

export const SelectElement = styled.select`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e9e9e9;
  border-radius: 0.4rem;
  font-size: 1.6rem;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  color: gray;
  border: 1px solid #d1d5db;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  outline: transparent;
  cursor: pointer;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px 5rem;
  }
  /* margin-bottom: 1.4rem; */
`;
