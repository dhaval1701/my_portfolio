import React from "react";
import { Layout } from "antd";
import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const MyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer
      style={{ textAlign: "center", background: "#121314", color: "#fffbfb" }}
    >
      <p>Dhaval's Portfolio ©{currentYear} Created by Dhaval Panchal</p>
      <p>Connect with me:</p>
      <div>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramOutlined
            style={{ fontSize: "24px", color: "#fffbfb", marginRight: "10px" }}
          />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterOutlined
            style={{ fontSize: "24px", color: "#fffbfb", marginRight: "10px" }}
          />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookOutlined
            style={{ fontSize: "24px", color: "#fffbfb", marginRight: "10px" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined
            style={{ fontSize: "24px", color: "#fffbfb", marginRight: "10px" }}
          />
        </a>
        <a
          href="https://www.github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined style={{ fontSize: "24px", color: "#fffbfb" }} />
        </a>
      </div>
      <p>Additional description or information about your portfolio.</p>
    </Footer>
  );
};
export default MyFooter;
