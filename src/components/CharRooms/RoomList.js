import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const PanelStyled = styled(Collapse.Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0px 40px;
    }
  }
`;
const LinkStyles = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
`;
const RoomList = () => {
  return (
    <Collapse defaultActiveKey ghost={["1"]}>
      <PanelStyled header="Danh sách các phòng" key={"1"}>
        <LinkStyles>Room 1</LinkStyles>
        <LinkStyles>Room 2</LinkStyles>
        <LinkStyles>Room 3</LinkStyles>
        <Button
          type="text"
          icon={<PlusSquareOutlined></PlusSquareOutlined>}
          className="text-white mb-[5px] "
        >
          add room
        </Button>
      </PanelStyled>
    </Collapse>
  );
};

export default RoomList;
