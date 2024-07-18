import React from "react";
import { Layout, Typography } from "antd";
import Matrix from "./components/Matrix";
import "antd/dist/reset.css";
import "./App.css";
import { FaHandHoldingHeart } from "react-icons/fa";
const { Header, Content } = Layout;
const { Title } = Typography;

/* final code and output  */

function App() {
  return (
    <Layout className="layout">
      <Header className="header">
        <Title
          style={{ color: "white", textAlign: "center", padding: ".5rem" }}
          level={3}
        >
          Conversely <FaHandHoldingHeart /> Node and React Intern 3x3 Matrix
        </Title>
      </Header>
      <Content
        style={{ padding: "50px", display: "flex", justifyContent: "center" }}
      >
        <Matrix />
      </Content>
    </Layout>
  );
}

export default App;
