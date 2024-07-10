import React, { useState } from 'react';

const UserAccordion = ({ user, isExpanded, onToggle, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    onUpdate(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  const age = new Date().getFullYear() - new Date(user.dateOfBirth).getFullYear();

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onToggle}>
        {user.name} {isExpanded ? '-' : '+'}
      </div>
      {isExpanded && (
        <div className="accordion-body">
          {isEditing ? (
            <div>
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Gender:
                  <select
                    name="gender"
                    value={editedUser.gender}
                    onChange={handleInputChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Rather not say">Rather not say</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  Country:
                  <input
                    type="text"
                    name="country"
                    value={editedUser.country}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Description:
                  <textarea
                    name="description"
                    value={editedUser.description}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <button
                onClick={handleSave}
                disabled={
                  editedUser.name === user.name &&
                  editedUser.gender === user.gender &&
                  editedUser.country === user.country &&
                  editedUser.description === user.description
                }
              >
                Save
              </button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div>
              <div>Age: {age}</div>
              <div>Gender: {user.gender}</div>
              <div>Country: {user.country}</div>
              <div>Description: {user.description}</div>
              <button onClick={() => setIsEditing(true)} disabled={age < 18}>
                Edit
              </button>
              <button onClick={onDelete}>Delete</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserAccordion;