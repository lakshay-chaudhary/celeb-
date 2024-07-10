import React, { useState } from 'react';
import UserAccordion from './UserAccordion';

const UserList = ({ users, setUsers }) => {
  const [expandedUserId, setExpandedUserId] = useState(null);

  const handleAccordionToggle = userId => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  const handleUserUpdate = updatedUser => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const handleUserDelete = userId => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div>
      {users.map(user => (
        <UserAccordion
          key={user.id}
          user={user}
          isExpanded={user.id === expandedUserId}
          onToggle={() => handleAccordionToggle(user.id)}
          onUpdate={handleUserUpdate}
          onDelete={() => handleUserDelete(user.id)}
        />
      ))}
    </div>
  );
};

export default UserList;