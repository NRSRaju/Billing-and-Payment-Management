// import React, { useState } from 'react';
// import { Table, TableHeader, TableRow, TableCell, Input, DateRangePicker } from './PaymentHistory.styles';
// import { payments } from '../../data/dummyData';

// const PaymentHistory = () => {
//   const [filteredUser, setFilteredUser] = useState('');
//   const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });

//   const filteredPayments = payments.filter(payment => 
//     (filteredUser === '' || payment.userId.toString() === filteredUser) &&
//     (!dateRange.startDate || new Date(payment.date) >= dateRange.startDate) &&
//     (!dateRange.endDate || new Date(payment.date) <= dateRange.endDate)
//   );

//   return (
//     <div>
//       <h2>Payment History</h2>
//       <Input
//         type="text"
//         placeholder="Filter by User ID"
//         value={filteredUser}
//         onChange={(e) => setFilteredUser(e.target.value)}
//       />
//       <DateRangePicker
//         startDate={dateRange.startDate}
//         endDate={dateRange.endDate}
//         onChange={({ startDate, endDate }) => setDateRange({ startDate, endDate })}
//       />
//       <Table>
//         <thead>
//           <TableRow>
//             <TableHeader>Payment ID</TableHeader>
//             <TableHeader>User ID</TableHeader>
//             <TableHeader>Amount</TableHeader>
//             <TableHeader>Status</TableHeader>
//             <TableHeader>Date</TableHeader>
//           </TableRow>
//         </thead>
//         <tbody>
//           {filteredPayments.map(payment => (
//             <TableRow key={payment.id}>
//               <TableCell>{payment.id}</TableCell>
//               <TableCell>{payment.userId}</TableCell>
//               <TableCell>${payment.amount}</TableCell>
//               <TableCell>{payment.status}</TableCell>
//               <TableCell>{payment.date}</TableCell>
//             </TableRow>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default PaymentHistory;
import React, { useState } from 'react';
import { Table, TableHeader, TableRow, TableCell, Input, Select, Button } from './PaymentHistory.styles';
import { payments } from '../../data/dummyData';

const PaymentHistory = () => {
  const [filteredUser, setFilteredUser] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');

  const getFilteredPayments = () => {
    let filtered = payments;

    if (filteredUser !== '') {
      filtered = filtered.filter(payment => payment.userId.toString() === filteredUser);
    }

    const currentDate = new Date();
    let startDate;

    switch (dateFilter) {
      case 'week':
        startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7);
        break;
      case 'month':
        startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
        break;
      case 'custom':
        if (customStartDate && customEndDate) {
          return filtered.filter(payment => {
            const paymentDate = new Date(payment.date);
            return paymentDate >= new Date(customStartDate) && paymentDate <= new Date(customEndDate);
          });
        }
        return filtered;
      default:
        return filtered;
    }

    return filtered.filter(payment => new Date(payment.date) >= startDate);
  };

  const filteredPayments = getFilteredPayments();

  return (
    <div>
      <h2>Payment History</h2>
      <Input
        type="text"
        placeholder="Filter by User ID"
        value={filteredUser}
        onChange={(e) => setFilteredUser(e.target.value)}
      />
      <Select onChange={(e) => setDateFilter(e.target.value)} value={dateFilter}>
        <option value="all">All Time</option>
        <option value="week">Last Week</option>
        <option value="month">Last Month</option>
        <option value="custom">Custom Range</option>
      </Select>
      {dateFilter === 'custom' && (
        <div>
          <Input
            type="date"
            value={customStartDate}
            onChange={(e) => setCustomStartDate(e.target.value)}
          />
          <Input
            type="date"
            value={customEndDate}
            onChange={(e) => setCustomEndDate(e.target.value)}
          />
        </div>
      )}
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
