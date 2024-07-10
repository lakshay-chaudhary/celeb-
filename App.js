import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch the JSON data here
    fetch('/path/to/your/celebrity-data.json')
      .then(response => response.json())
      .then(data => {
        // Calculate age and set users
        const usersWithAge = data.map(user => ({
          ...user,
          age: new Date().getFullYear() - new Date(user.dateOfBirth).getFullYear(),
        }));
        setUsers(usersWithAge);
      });
  }, []);

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <UserList users={filteredUsers} setUsers={setUsers} />
    </div>
  );
};

export default App;