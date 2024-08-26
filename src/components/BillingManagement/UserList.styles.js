import styled from 'styled-components';

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
  cursor: pointer;
  &:hover {
    background-color: #e2e6ea;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8em;
  background-color: ${props => {
    switch (props.status) {
      case 'Verified': return '#28a745';
      case 'Pending Verification': return '#ffc107';
      case 'Rejected': return '#dc3545';
      default: return '#6c757d';
    }
  }};
  color: white;
`;

export const SearchInput = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 300px;
`;