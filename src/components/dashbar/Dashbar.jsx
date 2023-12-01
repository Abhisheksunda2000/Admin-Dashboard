import React, { useState } from 'react';
import "./dashbar.css";

const Dashbar = () => {
  // Sample data for entries
  const [entries, setEntries] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  ]);

 
  const handleEdit = (id) => {
    // Logic for editing an entry
    console.log(`Edit entry with ID: ${id}`);
  };

  
  const handleDelete = (id) => {
    // Logic for deleting an entry
    setEntries(entries.filter(entry => entry.id !== id));
    console.log(`Delete entry with ID: ${id}`);
  };

  return (
    <div className="dashbarContainer">
      <div className="dashbarHeader">
        <input type="checkbox"/>
        <div>Name</div>
        <div>Email</div>
        <div>Role</div>
        <div>Actions</div>
      </div>
      
      {entries.map((entry) => (
        <div key={entry.id} className="dashbarEntry">
          <div><input type="checkbox"/></div>
          <div>{entry.name}</div>
          <div>{entry.email}</div>
          <div>{entry.role}</div>
          <div>
            <button onClick={() => handleEdit(entry.id)}>Edit</button>
            <button onClick={() => handleDelete(entry.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashbar;
