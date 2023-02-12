import React from "react";
import useFireStore from "../hook/useFirebase";
import { AuthContext } from "./AuthProvider";
export const AppContext = React.createContext();
export default function AppProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isInviteMemberVisible, setIsInviteMemberVisible] = React.useState(false)
  const [selectedRoomID, setSelectedRoom] = React.useState("");
  const { uid } = React.useContext(AuthContext);
  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);
  const rooms = useFireStore("Rooms", roomsCondition);

  const selectedRoom = React.useMemo(() => {
    return rooms.find((room) => room.id === selectedRoomID) || {};
  }, [selectedRoomID, rooms]);
  const userCondition = React.useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: selectedRoom.members,
    };
  }, [selectedRoom.members]);
  const members = useFireStore("Users", userCondition);
  return (
    <AppContext.Provider
      value={{
        rooms,
        selectedRoom,
        members,
        isOpenModal,
        setIsOpenModal,
        isInviteMemberVisible, 
        setIsInviteMemberVisible,
        selectedRoomID,
        setSelectedRoom,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
