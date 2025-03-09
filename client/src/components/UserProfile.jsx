import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

const UserProfile = () => {
    const {username} = useParams();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('authToken');
                if (!token) {
                    setError(true);
                    return;
                }
                const response = await api.get(`/users/getuser/${username}`, {
                    headers: {
                        Authorization: `${token}`, // Send the token in the header
                    },
                });
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user profile:", error);
                setError(true);
            }
        };

        fetchUserProfile();
    }, [username]);

    // Display 404 if no such user exists
    if (error) {
        return <div>404 - Unauthorized</div>;
    }

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>{userData.username}'s Profile</h1>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>LinkedIn:</strong> <a href={userData.linkedin} target="_blank" rel="noopener noreferrer">{userData.linkedin}</a></p>
            <p><strong>Major:</strong> {userData.major}</p>
            <p><strong>Year:</strong> {userData.year}</p>
            <p><strong>Description:</strong> {userData.description}</p>
        </div>
    );
};

export default UserProfile;