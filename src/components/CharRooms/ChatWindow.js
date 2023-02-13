import { UserAddOutlined } from "@ant-design/icons";
import { Alert, Avatar, Button, Form, Input, Tooltip } from "antd";
import React from "react";
import { AppContext } from "../../context/AppProvider";
import Message from "./Message";
import addDocument from "../firebase/service";
import { AuthContext } from "../../context/AuthProvider";
import useFireStore from "../../hook/useFirebase";
import { formatRelative } from "date-fns";
const { Group } = Avatar;
const ChatWindow = () => {
  const { selectedRoom, members, setIsInviteMemberVisible } =
    React.useContext(AppContext);
  const { uid, photoURL, displayName } = React.useContext(AuthContext);
  const [inputValue, setInputValue] = React.useState("");
  const [form] = Form.useForm();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleOnSubmit = () => {
   if(!inputValue){
    return null;
   }
   else{
    addDocument("Messages", {
      text: inputValue,
      uid,
      photoURL,
      roomID: selectedRoom.id,
      displayName,
    });

    form.resetFields(["message"]);
   }
  };
  const messageCondition = React.useMemo(
    () => ({
      fieldName: "roomID",
      operator: "==",
      compareValue: selectedRoom.id,
    }),
    [selectedRoom.id]
  );
  const messages = useFireStore("Messages", messageCondition);
  return (
    <div className="h-screen">
      {selectedRoom.id ? (
        <>
          <div className="flex justify-between h-[56px] py-0 px-4 items-center border-b border-[rgb(230,230,230)]">
            <div className="flex flex-col justify-center">
              <p className="m-0 font-bold">{selectedRoom?.name}</p>
              <span className="text-[12px]">{selectedRoom?.description}</span>
            </div>
            <div className="flex items-center">
              <Button
                className="flex items-center"
                type={"text"}
                onClick={() => {
                  setIsInviteMemberVisible(true);
                }}
                icon={<UserAddOutlined />}
              >
                Mời
              </Button>

              <Group size="small" maxCount={2} className="">
                {members.map((member) => (
                  <Tooltip title={member?.displayName} key={member.id}>
                    <Avatar src={member.photoURL}>
                      {member.photoURL
                        ? ""
                        : member?.displayName?.chatAt(0)?.toUpperCase()}
                    </Avatar>
                  </Tooltip>
                ))}
              </Group>
            </div>
          </div>
          <div className="h-[calc(100%-56px)] flex flex-col p-[11px] justify-end">
            <div className="overflow-y-auto h-max-full" id="Message">
              {messages?.map((message) => (
                <Message
                  key={message.id}
                  text={message.text}
                  displayName={message.displayName}
                  photoURL={message.photoURL}
                  createdAt={message.createdAt}
                ></Message>
              ))}
            </div>
            <Form
              form={form}
              className="flex justify-between items-center py-[2px] pr-[2px] pl-[0px] border border-[rgb(230,230,230)] rounded-[2px]"
            >
              <Form.Item className="mb-0 flex-[1]" name={"message"}>
                <Input
                  bordered={false}
                  autoComplete="off"
                  placeholder="ABCabc..."
                  onChange={handleInputChange}
                  onPressEnter={handleOnSubmit}
                ></Input>
              </Form.Item>
              <Button className="primary" onClick={handleOnSubmit}>
                Gửi
              </Button>
            </Form>
          </div>
        </>
      ) : (
        <Alert
          message="Hãy chọn phòng"
          type="info"
          showIcon
          style={{ margin: 5 }}
          closable
        ></Alert>
      )}
    </div>
  );
};

export default ChatWindow;
