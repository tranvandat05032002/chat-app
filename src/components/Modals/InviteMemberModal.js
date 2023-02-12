import { Avatar, Form, Modal, Select, Spin } from "antd";
import { debounce } from "lodash";
import React from "react";
import styled from "styled-components";
import { AppContext } from "../../context/AppProvider";
import { AuthContext } from "../../context/AuthProvider";

function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...props }) {
  const [fetching, setFetching] = React.useState(false);
  const [options, setOptions] = React.useState([]);

  const debounceFetch = React.useMemo(() => {
    const loadOptions = (value) => {
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [debounceTimeout, fetchOptions]);
  return (
    <Select
      labelInValue
      onSearch={debounceFetch}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
    >
      {options.map((opt) => (
        <Select.Option>
          <Avatar size={"small"} src={opt.photoURL}>
            {opt.photoURl ? "" : opt?.label?.charAt(0)?.toUpperCase()}
          </Avatar>
          {`${opt.label}`}
        </Select.Option>
      ))}
    </Select>
  );
}
async function fetchUserList() {}
const ModalStyled = styled(Modal)`
  &&& {
    .ant-btn-primary {
      background-color: #3399ff;
      color: white;
    }
  }
`;
const InviteMemberModal = () => {
  const { isInviteMemberVisible, setIsInviteMemberVisible } =
    React.useContext(AppContext);
  const [value, setValue] = React.useState([]);
  const { uid } = React.useContext(AuthContext);
  const [form] = Form.useForm();
  const handleOk = () => {
    form.resetFields();
    setIsInviteMemberVisible(false);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsInviteMemberVisible(false);
    console.log(isInviteMemberVisible);
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
