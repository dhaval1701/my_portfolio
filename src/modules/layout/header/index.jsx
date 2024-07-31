import React from "react";
import { Layout, Menu } from "antd";
import { Wrapper } from "./style";
import { routes } from "../../../routes";
import MenuItemsWithDarkThemeSwitch from "./lib/menuItems";
import { useLocation } from "react-router-dom";

const { Header } = Layout;

const MyHeader = () => {
  const location = useLocation(); // Get the current location
  const menuItems = MenuItemsWithDarkThemeSwitch();

  const selectedMenu = () => {
    const tabSelected = routes?.filter((d) => d?.path === location?.pathname);
    console.log(location.pathname);
    console.log(tabSelected);
    if (tabSelected?.length > 0) {
      return tabSelected?.[0]?.root || tabSelected?.[0]?.path;
    }
    // return "/";
  };

  return (
    <Wrapper>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          items={menuItems}
          defaultSelectedKeys={"/"}
          selectedKeys={selectedMenu()}
        />
      </Header>
    </Wrapper>
  );
};

export default MyHeader;
