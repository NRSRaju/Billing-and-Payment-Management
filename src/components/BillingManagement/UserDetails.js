import React from 'react';
import { Modal, ModalContent, CloseButton, DetailRow, Label, Value } from './UserDetails.styles';
import PANVerification from './PANVerification';

const UserDetails = ({ user, onClose }) => {
  return (
    <Modal>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>User Details</h2>
        <DetailRow>
          <Label>Name:</Label>
          <Value>{user.name}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Occupation:</Label>
          <Value>{user.occupation}</Value>
        </DetailRow>
        <DetailRow>
          <Label>PAN Card:</Label>
          <Value>{user.panCard}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Bank Account:</Label>
          <Value>{user.bankAccount}</Value>
        </DetailRow>
        <PANVerification user={user} />
      </ModalContent>
    </Modal>
  );
};

export default UserDetails;