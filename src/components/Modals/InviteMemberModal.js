import { Avatar, Form, Modal, Select, Spin } from "antd";
import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { debounce } from "lodash";
import React from "react";
import styled from "styled-components";
import { AppContext } from "../../context/AppProvider";
import { db } from "../firebase/config";

function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...props }) {
  const [fetching, setFetching] = React.useState(false);
  const [options, setOptions] = React.useState([]);

  const debounceFetch = React.useMemo(() => {
    const loadOptions = (value) => {
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        console.log(newOptions);
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [debounceTimeout, fetchOptions]);
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetch}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
    >
      {options.map((opt) => (
        <Select.Option key={opt?.value} value={opt?.value} title={opt.label}>
          <Avatar size={"small"} src={opt.photoURL}>
            {opt.photoURl ? "" : opt.label?.charAt(0)?.toUpperCase()}
          </Avatar>
          {`${opt.label}`}
        </Select.Option>
      ))}
    </Select>
  );
}
async function fetchUserList(search) {
  const searchRef = collection(db, "Users");
  const queryData = query(
    searchRef,
    where("keywords", "array-contains", search),
    limit(20)
  );
  const querySnapshot = await getDocs(queryData);
  let dataFirebase = [];
  querySnapshot.forEach((doc) => {
    dataFirebase.push({
      label: doc.data().displayName,
      value: doc.data().uid,
      photoURL: doc.data().photoURL,
    });
  });
  return dataFirebase;
}
const ModalStyled = styled(Modal)`
  &&& {
    .ant-btn-primary {
      background-color: #3399ff;
      color: white;
    }
  }
`;
const InviteMemberModal = () => {
  const {
    isInviteMemberVisible,
    setIsInviteMemberVisible,
    selectedRoom,
    selectedRoomID,
  } = React.useContext(AppContext);
  const [value, setValue] = React.useState([]);
  const [form] = Form.useForm();
  const handleOk = async () => {
    //reset form
    form.resetFields();

    //update members
    const roomRef = doc(db, "Rooms", selectedRoomID);
    await updateDoc(roomRef, {
      members: [...selectedRoom.members, ...value.map((val) => val.value)],
    });
    setIsInviteMemberVisible(false);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsInviteMemberVisible(false);
  };
  return (
    <div>
      <ModalStyled
        title="Mời thêm thành viên"
        open={isInviteMemberVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical" form={form}>
          <DebounceSelect
            mode="multiple"
            label="Tên các thành viên"
            value={value}
            placeholder="Nhập tên thành viên"
            fetchOptions={fetchUserList}
            onChange={(newValue) => setValue(newValue)}
            style={{ width: "100%" }}
          ></DebounceSelect>
        </Form>
      </ModalStyled>
    </div>
  );
};

export default InviteMemberModal;
