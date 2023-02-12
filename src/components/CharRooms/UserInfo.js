import { Avatar, Button, Typography } from "antd";
import { signOut } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthProvider";
import { auth } from "../firebase/config";
const WrapperStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);
  color: white;
`;
const { Text } = Typography;
const UserInfo = () => {
  const { displayName, photoURL } = React.useContext(AuthContext);
  return (
    <WrapperStyles>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? "" : displayName?.chartAt(0)?.toUpperCase()}
        </Avatar>
        <Text className="text-white ml-[5px]">{displayName}</Text>
      </div>
      <Button
        ghost
        onClick={() => {
          signOut(auth);
        }}
      >
        Đăng xuất
      </Button>
    </WrapperStyles>
  );
};

export default UserInfo;
