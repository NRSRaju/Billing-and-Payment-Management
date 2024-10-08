import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
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
  cursor: pointer;
  &:hover {
    background-color: #e2e6ea;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 8px;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

