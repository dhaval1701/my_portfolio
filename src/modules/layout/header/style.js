import styled from "styled-components";

export const Wrapper = styled.div`
  .menu-link {
    text-decoration: none;
  }

  .ant-menu-dark.ant-menu-horizontal .ant-menu-item-selected {
    background-color: #001529;
    color: #dff500;
  }

  .ant-menu-dark.ant-menu-horizontal .ant-menu-submenu-selected {
    background-color: #001529;
    color: #dff500;
  }


  /* Vertical menu popup styling */
  .ant-menu-submenu .ant-menu-item-selected {
   
  }
  }

  .ant-menu-submenu-popup .ant-menu-item {
    .menu-link {
      text-decoration: none;
    }
  }

   .ant-menu-submenu-popup .ant-menu-item-selected {
    background: #001529 !important;
    .ant-menu-title-content {
      color: #dff500;
    }
  }
`;
