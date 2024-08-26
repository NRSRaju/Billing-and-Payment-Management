import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.color};
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

export const ButtonGroup = styled.div`
  margin-top: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  margin-top: 10px;
  padding: 5px;
  height: 100px;
`;