import React, { useState } from 'react';
import { Table, TableHeader, TableRow, TableCell, Input, DateRangePicker } from './PaymentHistory.styles';
import { payments } from '../../data/dummyData';

const PaymentHistory = () => {
  const [filteredUser, setFilteredUser] = useState('');
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });

  const filteredPayments = payments.filter(payment => 
    (filteredUser === '' || payment.userId.toString() === filteredUser) &&
    (!dateRange.startDate || new Date(payment.date) >= dateRange.startDate) &&
    (!dateRange.endDate || new Date(payment.date) <= dateRange.endDate)
  );

  return (
    <div>
      <h2>Payment History</h2>
      <Input
        type="text"
        placeholder="Filter by User ID"
        value={filteredUser}
        onChange={(e) => setFilteredUser(e.target.value)}
      />
      <DateRangePicker
        startDate={dateRange.startDate}
        endDate={dateRange.endDate}
        onChange={({ startDate, endDate }) => setDateRange({ startDate, endDate })}
      />
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
          {filteredPayments.map(payment => (
            <TableRow key={payment.id}>
              <TableCell>{payment.id}</TableCell>
              <TableCell>{payment.userId}</TableCell>
              <TableCell>${payment.amount}</TableCell>
              <TableCell>{payment.status}</TableCell>
              <TableCell>{payment.date}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PaymentHistory;