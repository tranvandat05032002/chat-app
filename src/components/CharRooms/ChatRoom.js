import React from "react";
import { Row, Col } from "antd";
import ChatWindow from "./ChatWindow";
import Sidebar from "./Sidebar";

const ChatRoom = () => {
  return (
    <div>
      <Row>
        <Col span={6}>
          <Sidebar></Sidebar>
        </Col>
        <Col span={18}>
          <ChatWindow></ChatWindow>
        </Col>
      </Row>
    </div>
  );
};

export default ChatRoom;
