import { Form, Input, Modal } from "antd";
import React from "react";
import { AppContext } from "../../context/AppProvider";
import styled from "styled-components";
import addDocument from "../firebase/service";
import { AuthContext } from "../../context/AuthProvider";
const ModalStyled = styled(Modal)`
  &&& {
    .ant-btn-primary {
      background-color: #3399ff;
      color: white;
    }
  }
`;
const AddRoomModal = () => {
  const { isOpenModal, setIsOpenModal } = React.useContext(AppContext);
  const { uid } = React.useContext(AuthContext);
  const [form] = Form.useForm();
  const handleOk = () => {
    addDocument("Rooms", { ...form.getFieldValue(), members: [uid] });
    form.resetFields();
    setIsOpenModal(false);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsOpenModal(false);
  };
  return (
    <div>
      <ModalStyled
        title="Tạo phòng"
        open={isOpenModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical" form={form}>
          <Form.Item label="Tên phòng" name={"name"}>
            <Input placeholder="Nhập tên phòng" />
          </Form.Item>
          <Form.Item label="Mô tả" name={"description"}>
            <Input.TextArea placeholder="Nhập mô tả"></Input.TextArea>
          </Form.Item>
        </Form>
      </ModalStyled>
    </div>
  );
};

export default AddRoomModal;
