import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Table, TableHeader, TableRow, TableCell, Button } from './PaymentList.styles';
import { payments } from '../../data/dummyData';
import PaymentDetails from './PaymentDetails';

const PaymentList = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const processPayments = () => {
    toast.info('Processing payments...');
    // In a real application, this would trigger the payment process
  };

  return (
    <div>
      <h2>Payment Processing</h2>
      <Button onClick={processPayments}>Process Monthly Payments</Button>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Payment ID</TableHeader>
            <TableHeader>User ID</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Date</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {payments.map(payment => (
            <TableRow key={payment.id} onClick={() => setSelectedPayment(payment)}>
              <TableCell>{payment.id}</TableCell>
              <TableCell>{payment.userId}</TableCell>
              <TableCell>${payment.amount}</TableCell>
              <TableCell>{payment.status}</TableCell>
              <TableCell>{payment.date}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {selectedPayment && (
        <PaymentDetails 
          payment={selectedPayment} 
          onClose={() => setSelectedPayment(null)} 
        />
      )}
    </div>
  );
};

export default PaymentList;