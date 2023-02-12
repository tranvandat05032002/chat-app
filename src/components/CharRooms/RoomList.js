import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { AppContext } from "../../context/AppProvider";
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
  const { rooms, setIsOpenModal } = React.useContext(AppContext);
  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  console.log(rooms);
  return (
    <Collapse defaultActiveKey ghost={["1"]}>
      <PanelStyled header="Danh sách các phòng" key={"1"}>
        {rooms.map((room) => (
          <LinkStyles key={room.id}>{"#" + room.name}</LinkStyles>
        ))}
        <Button
          type="text"
          icon={<PlusSquareOutlined></PlusSquareOutlined>}
          className="text-white mb-[5px] "
          onClick={handleOpenModal}
        >
          add room
        </Button>
      </PanelStyled>
    </Collapse>
  );
};

export default RoomList;
