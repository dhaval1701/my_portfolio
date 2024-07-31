import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import MyHeader from "./header";
import MyFooter from "./footer";
import { useTheme } from "../../ThemeContext";
import PageRouter from "../../routes";

const { Content } = Layout;

const MyLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { theme1, isDarkMode, toggleTheme } = useTheme();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <MyHeader />

      {/* <Content
        style={{
          padding: "0 50px",
          marginTop: 64,
          background: theme1.background,
          color: theme1.text,
        }}
      >
        <PageRouter />
      </Content> */}
      <Content
        style={{
          padding: "20px",
          marginTop: 64,
          background: theme1.background,
          color: theme1.text,
        }}
      >
        <PageRouter />
      </Content>
      <MyFooter />
    </Layout>
  );
};

export default MyLayout;
