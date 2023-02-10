import "./App.css";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import ChatRoom from "./components/CharRooms/ChatRoom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<ChatRoom></ChatRoom>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
