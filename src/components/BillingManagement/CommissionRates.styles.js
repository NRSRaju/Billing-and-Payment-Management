import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

export const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  background-color: #f8f9fa;
  padding: 10px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
`;