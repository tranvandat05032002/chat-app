import { Row, Col, Button, Typography } from "antd";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/config";
import addDocument from "../firebase/service";

const { Title } = Typography;

const Login = () => {
  const handleFbLogin = async () => {
    const colRef = collection(db, "Users");
    try {
      const provider = new FacebookAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      const userNow = auth.currentUser;
      const createAt = userNow.metadata.createdAt;
      const creationTime = userNow.metadata.lastLoginAt;
      console.log(creationTime - createAt);
      if (creationTime - createAt < 10) {
        console.log(12212);
        addDocument("Users", {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          providerID: user.providerData[0].providerId,
          photoURL: user.photoURL,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Row justify="center" style={{ height: "800px" }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Fun chat
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng Google
          </Button>
          <Button style={{ width: "100%" }} onClick={handleFbLogin}>
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
