import { Avatar, Button, Typography } from "antd";
import { signOut } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import React from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthProvider";
import { auth, db } from "../firebase/config";
const WrapperStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83);
  color: white;
`;
const { Text } = Typography;
const UserInfo = () => {
  const handleLogout = async () => {
    auth.signOut();
  };
  return (
    <WrapperStyles>
      <div>
        <Avatar src="https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-Nhat-xinh-dep-dang-yeu.jpg"></Avatar>
        <Text className="text-white ml-[5px]">Ngọc Phượng</Text>
      </div>
      <Button ghost onClick={handleLogout}>
        Đăng xuất
      </Button>
    </WrapperStyles>
  );
};

export default UserInfo;
