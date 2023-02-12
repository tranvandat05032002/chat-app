import React from "react";
import useFireStore from "../hook/useFirebase";
import { AuthContext } from "./AuthProvider";
export const AppContext = React.createContext();
export default function AppProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const { uid } = React.useContext(AuthContext);
  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  }, [uid]);
  const rooms = useFireStore("Rooms", roomsCondition);
  return (
    <AppContext.Provider value={{ rooms, isOpenModal, setIsOpenModal }}>
      {children}
    </AppContext.Provider>
  );
}
