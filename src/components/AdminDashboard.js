import React, { useState } from 'react';
import { Container, TabButton, TabContainer } from './AdminDashboard.styles';
import UserList from './BillingManagement/UserList';
import CommissionRates from './BillingManagement/CommissionRates';
import PaymentList from './PaymentProcessing/PaymentList';
import PaymentHistory from './PaymentProcessing/PaymentHistory';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  const tabs = [
    { id: 'users', label: 'User List' },
    { id: 'commission', label: 'Commission Rates' },
    { id: 'payments', label: 'Payment Processing' },
    { id: 'history', label: 'Payment History' },
  ];

  return (
    <Container>
      <h1>Admin Dashboard - Billing and Payment Management</h1>
      <TabContainer>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabContainer>
      {activeTab === 'users' && <UserList />}
      {activeTab === 'commission' && <CommissionRates />}
      {activeTab === 'payments' && <PaymentList />}
      {activeTab === 'history' && <PaymentHistory />}
    </Container>
  );
};

export default AdminDashboard;