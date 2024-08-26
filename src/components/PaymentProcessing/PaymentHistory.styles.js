import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

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
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  width: 200px;
`;

export const DateRangePicker = styled(DatePicker)`
  padding: 5px;
  margin-bottom: 10px;
  width: 200px;
`;