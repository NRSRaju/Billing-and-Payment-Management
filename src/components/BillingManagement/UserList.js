import React, { useState } from 'react';
import { Table, TableHeader, TableRow, TableCell, StatusBadge, SearchInput } from './UserList.styles';
import UserDetails from './UserDetails';
import { users } from '../../data/dummyData';

const UserList = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.id.toString().includes(searchTerm)
  );

  return (
    <div>
      <h2>User Billing Status</h2>
      <SearchInput
        type="text"
        placeholder="Search by name or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table>
        <thead>
          <TableRow>
            <TableHeader>User ID</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Billing Status</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <TableRow key={user.id} onClick={() => setSelectedUser(user)}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>
                <StatusBadge status={user.billingStatus}>{user.billingStatus}</StatusBadge>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {selectedUser && <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  );
};

export default UserList;