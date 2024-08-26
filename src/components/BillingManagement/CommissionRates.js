import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Form, Input, Button, Table, TableHeader, TableRow, TableCell } from './CommissionRates.styles';
import { occupations, users } from '../../data/dummyData';

const CommissionRates = () => {
  const [rates, setRates] = useState(occupations);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleRateChange = (occupation, newRate) => {
    setRates(prev => ({ ...prev, [occupation]: newRate }));
  };

  const onSubmit = (data) => {
    console.log('Custom rate submitted:', data);
    toast.success(`Custom rate set for User ID: ${data.userId}`);
    reset();
  };

  return (
    <div>
      <h2>Commission Rates</h2>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Occupation</TableHeader>
            <TableHeader>Rate (%)</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {Object.entries(rates).map(([occupation, rate]) => (
            <TableRow key={occupation}>
              <TableCell>{occupation}</TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={rate}
                  onChange={(e) => handleRateChange(occupation, e.target.value)}
                />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <h3>Set Custom Rate</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('userId', { required: true })}
          placeholder="User ID"
        />
        {errors.userId && <span>This field is required</span>}
        <Input
          {...register('rate', { required: true, min: 0, max: 100 })}
          type="number"
          placeholder="Custom Rate (%)"
        />
        {errors.rate && <span>Please enter a valid rate between 0 and 100</span>}
        <Button type="submit">Set Custom Rate</Button>
      </Form>
    </div>
  );
};

export default CommissionRates;