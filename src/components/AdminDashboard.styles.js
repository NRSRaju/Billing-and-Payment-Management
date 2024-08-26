import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const TabButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.active ? '#007bff' : '#f8f9fa'};
  color: ${props => props.active ? 'white' : 'black'};
  border: none;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? '#0056b3' : '#e2e6ea'};
  }
`;