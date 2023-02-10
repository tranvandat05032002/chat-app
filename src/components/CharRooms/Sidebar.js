import { Col, Row } from "antd";
import React from "react";
import RoomList from "./RoomList";
import UserInfo from "./UserInfo";
import styled from "styled-components";
const SidebarStyles = styled.div`
  height: 100vh;
  background-color: #3f0e40;
`;

const Sidebar = () => {
  return (
    <SidebarStyles>
      <Row>
        <Col span={24}>
          <UserInfo></UserInfo>
        </Col>
        <Col span={24}>
          <RoomList></RoomList>
        </Col>
      </Row>
    </SidebarStyles>
  );
};

export default Sidebar;
