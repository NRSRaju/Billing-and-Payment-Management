import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
`;

export const CloseButton = styled.button`
  float: right;
  font-size: 1.5em;
  background: none;
  border: none;
  cursor: pointer;
`;

export const DetailRow = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const Value = styled.span``;