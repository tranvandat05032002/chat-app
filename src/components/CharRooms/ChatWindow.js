import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, Tooltip } from "antd";
import React from "react";
import Message from "./Message";
const { Group } = Avatar;
const ChatWindow = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-[56px] py-0 px-4 items-center border-b border-[rgb(230,230,230)]">
        <div className="flex flex-col justify-center">
          <p className="m-0 font-bold">Room 1</p>
          <span className="text-[12px]">Day la room 1</span>
        </div>
        <div className="flex items-center">
          <Button type={"text"} icon={<UserAddOutlined />}>
            Mời
          </Button>

          <Group size="small" maxCount={2} className="">
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
          </Group>
        </div>
      </div>
      <div className="h-[calc(100%-56px)] flex flex-col p-[11px] justify-end">
        <div className="overflow-y-auto h-max-full" id="Message">
          <Message
            text={"123"}
            displayName="Tran Van Dat"
            photoURL={
              "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-Nhat-xinh-dep-dang-yeu.jpg"
            }
            createAt="10:10:2022AM"
          ></Message>
          <Message
            text={"12334312sds"}
            displayName="Tran Van Dat"
            photoURL={
              "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-Nhat-xinh-dep-dang-yeu.jpg"
            }
            createAt="10:10:2022AM"
          ></Message>
          <Message
            text={"1235657rfdsfs"}
            displayName="Tran Van Dat"
            photoURL={
              "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-Nhat-xinh-dep-dang-yeu.jpg"
            }
            createAt="10:10:2022AM"
          ></Message>
          <Message
            text={"123dsda2312"}
            displayName="Tran Van Dat"
            photoURL={
              "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-Nhat-xinh-dep-dang-yeu.jpg"
            }
            createAt="10:10:2022AM"
          ></Message>
          <Message
            text={"123"}
            displayName="Tran Van Dat"
            photoURL={
              "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-Nhat-xinh-dep-dang-yeu.jpg"
            }
            createAt="10:10:2022AM"
          ></Message>
        </div>
        <Form className="flex justify-between items-center py-[2px] pr-[2px] pl-[0px] border border-[rgb(230,230,230)] rounded-[2px]">
          <Form.Item className="mb-0 flex-[1]">
            <Input
              bordered={false}
              autoComplete="off"
              placeholder="ABCabc..."
            ></Input>
          </Form.Item>
          <Button className="primary">Gửi</Button>
        </Form>
      </div>
    </div>
  );
};

export default ChatWindow;
