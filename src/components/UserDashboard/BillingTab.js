import React from 'react';
import { Container, DetailRow, Label, Value, Table, TableHeader, TableRow, TableCell } from './BillingTab.styles';
import { users, payments } from '../../data/dummyData';

const BillingTab = () => {
  // In a real application, you would fetch the current user's data
  const user = users[0];
  const userPayments = payments.filter(payment => payment.userId === user.id);

  return (
    <Container>
      <h2>Billing Information</h2>
      <DetailRow>
        <Label>PAN Card Status:</Label>
        <Value>{user.billingStatus}</Value>
      </DetailRow>
      <DetailRow>
        <Label>Total Earnings:</Label>
        <Value>${user.totalEarnings}</Value>
      </DetailRow>
      <DetailRow>
        <Label>Total Commissions Paid:</Label>
        <Value>${user.totalCommissionsPaid}</Value>
      </DetailRow>
      <DetailRow>
        <Label>Pending Payments:</Label>
        <Value>${user.pendingPayments}</Value>
      </DetailRow>

      <h3>Payment History</h3>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Payment ID</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Date</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {userPayments.map(payment => (
            <TableRow key={payment.id}>
              <TableCell>{payment.id}</TableCell>
              <TableCell>${payment.amount}</TableCell>
              <TableCell>{payment.status}</TableCell>
              <TableCell>{payment.date}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BillingTab;