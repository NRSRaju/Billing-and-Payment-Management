import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Modal, ModalContent, CloseButton, DetailRow, Label, Value, Form, TextArea, Button } from './PaymentDetails.styles';

const PaymentDetails = ({ payment, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Payment flagged:', { ...payment, ...data });
    toast.warning(`Payment ${payment.id} flagged for review`);
    onClose();
  };

  return (
    <Modal>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Payment Details</h2>
        <DetailRow>
          <Label>Payment ID:</Label>
          <Value>{payment.id}</Value>
        </DetailRow>
        <DetailRow>
          <Label>User ID:</Label>
          <Value>{payment.userId}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Amount:</Label>
          <Value>${payment.amount}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Status:</Label>
          <Value>{payment.status}</Value>
        </DetailRow>
        <DetailRow>
          <Label>Date:</Label>
          <Value>{payment.date}</Value>
        </DetailRow>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextArea 
            {...register('notes', { required: true })} 
            placeholder="Add notes for flagging..."
          />
          {errors.notes && <span>This field is required</span>}
          <Button type="submit">Flag for Review</Button>
        </Form>
      </ModalContent>
    </Modal>
  );
};

export default PaymentDetails;