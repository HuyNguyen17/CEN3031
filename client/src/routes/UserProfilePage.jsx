import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserHeader from '../components/UserHeader'
import UserProfile from '../components/UserProfile'
import api from "../api/api";

const UserProfilePage = () => {
    return (
        <div>
            <UserHeader />
            <UserProfile />
        </div>
      )
};

export default UserProfilePage;