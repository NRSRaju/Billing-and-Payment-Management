import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Button, ButtonGroup, Form, TextArea } from './PANVerification.styles';

const PANVerification = ({ user }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // In a real application, you would send this update to the backend
    console.log(`PAN Verification for ${user.name}: ${data.status}`);
    toast.success(`PAN ${data.status} for ${user.name}`);
  };

  return (
    <div>
      <h3>PAN Verification</h3>
      <p>Current Status: {user.billingStatus}</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ButtonGroup>
          <Button type="submit" onClick={() => register('status').onChange({ target: { value: 'Verified' } })} color="green">Approve</Button>
          <Button type="submit" onClick={() => register('status').onChange({ target: { value: 'Rejected' } })} color="red">Reject</Button>
        </ButtonGroup>
        <TextArea {...register('notes', { required: true })} placeholder="Add notes..." />
        {errors.notes && <span>This field is required</span>}
      </Form>
    </div>
  );
};

export default PANVerification;