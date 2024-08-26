import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const DetailRow = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const Value = styled.span``;

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