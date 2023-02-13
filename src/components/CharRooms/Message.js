import { Avatar, Typography } from "antd";
import { formatRelative } from "date-fns";
import React from "react";

function formatDate(seconds) {
  let formattedDate = "";
  if (seconds) {
    formattedDate = formatRelative(new Date(seconds * 1000), new Date());
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
}
const Message = ({
  text = "",
  displayName = "",
  createdAt = "",
  photoURL = "",
}) => {
  return (
    <div>
      <div className="">
        <Avatar size={"small"} src={photoURL}>
          {photoURL ? "" : displayName?.charAt(0).toUpperCase()}
        </Avatar>
        <Typography.Text className="ml-[5px] font-bold">
          {displayName}
        </Typography.Text>
        <Typography.Text className="ml-[10px] text-[11px] text-[#a7a7a7]">
          {formatDate(createdAt?.seconds)}
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
