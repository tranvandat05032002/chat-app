import "./App.css";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import ChatRoom from "./components/CharRooms/ChatRoom";
import AppProvider from "./context/AppProvider";
import AddRoomModal from "./components/Modals/AddRoomModal";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/" element={<ChatRoom></ChatRoom>}></Route>
          </Routes>
          <AddRoomModal></AddRoomModal>
        </AppProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
