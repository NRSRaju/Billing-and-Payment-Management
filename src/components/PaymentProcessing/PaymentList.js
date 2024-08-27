// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { Table, TableHeader, TableRow, TableCell, Button } from './PaymentList.styles';
// import { payments } from '../../data/dummyData';
// import PaymentDetails from './PaymentDetails';

// const PaymentList = () => {
//   const [selectedPayment, setSelectedPayment] = useState(null);

//   const processPayments = () => {
//     toast.info('Processing payments...');
//     // In a real application, this would trigger the payment process
//   };

//   return (
//     <div>
//       <h2>Payment Processing</h2>
//       <Button onClick={processPayments}>Process Monthly Payments</Button>
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
//           {payments.map(payment => (
//             <TableRow key={payment.id} onClick={() => setSelectedPayment(payment)}>
//               <TableCell>{payment.id}</TableCell>
//               <TableCell>{payment.userId}</TableCell>
//               <TableCell>${payment.amount}</TableCell>
//               <TableCell>{payment.status}</TableCell>
//               <TableCell>{payment.date}</TableCell>
//             </TableRow>
//           ))}
//         </tbody>
//       </Table>
//       {selectedPayment && (
//         <PaymentDetails 
//           payment={selectedPayment} 
//           onClose={() => setSelectedPayment(null)} 
//         />
//       )}
//     </div>
//   );
// };

// export default PaymentList;
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Table, TableHeader, TableRow, TableCell, Button, Input, FilterContainer ,Label} from './PaymentList.styles';
import { payments } from '../../data/dummyData';
import PaymentDetails from './PaymentDetails';

const PaymentList = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [filteredPayments, setFilteredPayments] = useState(payments);

  const processPayments = () => {
    toast.info('Processing payments...');
    // In a real application, this would trigger the payment process
  };

  const handleDateFilterChange = () => {
    if (fromDate && toDate) {
      const filtered = payments.filter(payment => {
        const paymentDate = new Date(payment.date);
        return paymentDate >= new Date(fromDate) && paymentDate <= new Date(toDate);
      });
      setFilteredPayments(filtered);
    } else {
      setFilteredPayments(payments);
    }
  };

  return (
    <div>
      <h2>Payment Processing</h2>
      
      {/* Date Range Filter */}
      <FilterContainer>
        <Label>From Date:</Label>
        <Input 
          type="date" 
          value={fromDate} 
          onChange={(e) => setFromDate(e.target.value)} 
          onBlur={handleDateFilterChange}
        />
        <Label>To Date:</Label>
        <Input 
          type="date" 
          value={toDate} 
          onChange={(e) => setToDate(e.target.value)} 
          onBlur={handleDateFilterChange}
        />
      </FilterContainer>
      
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
          {filteredPayments.map(payment => (
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
