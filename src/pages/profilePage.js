import React, { useContext, useState } from 'react';
import { AuthProvider } from '../contexts/authContext';
// import { logout } from '../services/authService';
import '../styles/global.css';

const ProfilePage = () => {
    const { user, setUser } = useContext(AuthProvider);
    const [editing, setEditing] = useState(false);
    const [updatedName, setUpdatedName] = useState(user?.name || '');
    const [updatedEmail, setUpdatedEmail] = useState(user?.email || '');

    const handleSave = async () => {
        // Call an API endpoint to update user details
        try {
            // Simulate API call
            const updatedUser = { ...user, name: updatedName, email: updatedEmail };
            setUser(updatedUser);
            setEditing(false);
        } catch (error) {
            console.error('Failed to update profile', error);
        }
    };

    const handleLogout = () => {
        // logout();
        window.location.href = '/login'; // Redirect to login page
    };

    return (
        <div className="profile-page">
            <h1>Profile</h1>
            {!editing ? (
                <div className="profile-details">
                    <p>
                        <strong>Name:</strong> {user?.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {user?.email}
                    </p>
                    <button onClick={() => setEditing(true)} className="profile-button">
                        Edit Profile
                    </button>
                    <button onClick={handleLogout} className="profile-button logout">
                        Log Out
                    </button>
                </div>
            ) : (
                <div className="profile-edit">
                    <label>
                        Name:
                        <input
                            type="text"
                            value={updatedName}
                            onChange={(e) => setUpdatedName(e.target.value)}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={updatedEmail}
                            onChange={(e) => setUpdatedEmail(e.target.value)}
                        />
                    </label>
                    <button onClick={handleSave} className="profile-button save">
                        Save
                    </button>
                    <button onClick={() => setEditing(false)} className="profile-button cancel">
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
