import { Avatar, Typography } from "antd";
import React from "react";

const Message = ({
  text = "",
  displayName = "",
  createAt = "",
  photoURL = "",
}) => {
  return (
    <div>
      <div className="">
        <Avatar size={"small"} src={photoURL}>
          A
        </Avatar>
        <Typography.Text className="ml-[5px] font-bold">
          {displayName}
        </Typography.Text>
        <Typography.Text className="ml-[10px] text-[11px] text-[#a7a7a7]">
          {createAt}
        </Typography.Text>
      </div>
      <div className="">
        <Typography.Text className="ml-[30px] mt-[-50px]">
          {text}
        </Typography.Text>
      </div>
    </div>
  );
};

export default Message;
