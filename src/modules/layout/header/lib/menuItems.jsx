// menuItems.js

import React from "react";
import {
  HomeOutlined,
  UserOutlined,
  ProjectOutlined,
  ContactsOutlined,
  BulbFilled,
  BulbOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Tooltip, Switch as AntSwitch } from "antd";
import { useTheme } from "../../../../ThemeContext";

const MenuItemsWithDarkThemeSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return [
    {
      key: "darkThemeSwitch",
      label: (
        <Tooltip title={isDarkMode ? "Dark Theme" : "Light Theme"}>
          <AntSwitch
            checked={isDarkMode}
            onChange={toggleTheme}
            checkedChildren={<BulbFilled />}
            unCheckedChildren={<BulbOutlined />}
          />
        </Tooltip>
      ),
      // isSwitch: true,
    },
    {
      key: "/",
      icon: <HomeOutlined />,
      label: (
        <Link to="/" className="menu-link">
          Home
        </Link>
      ),
    },
    {
      key: "/about",
      icon: <UserOutlined />,
      label: (
        <Link to="/about" className="menu-link">
          About
        </Link>
      ),
    },
    {
      key: "/projects",
      icon: <ProjectOutlined />,
      label: (
        <Link to="/projects" className="menu-link">
          Projects
        </Link>
      ),
    },
    {
      key: "/contact",
      icon: <ContactsOutlined />,
      label: (
        <Link to="/contact" className="menu-link">
          Contact
        </Link>
      ),
    },
  ];
};

export default MenuItemsWithDarkThemeSwitch;
