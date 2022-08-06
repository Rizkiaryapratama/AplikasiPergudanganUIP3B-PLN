import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {QRCodeSVG} from 'qrcode.react';

function UserQRCode() {
    const [users, setUser] = useState([]);
    // eslint-disable-next-line
  const { id } = useParams();

  useEffect(() => {
    getUserById();
    // eslint-disable-next-line
  }, []);

  const getUserById = async () => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(res.data.id);
  };

  return (
    <div>
        <QRCodeSVG  value={id} size="50" />
    </div>
  )
}

export default UserQRCode