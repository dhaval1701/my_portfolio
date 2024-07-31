import "./App.css";
import { useTheme } from "./ThemeContext";
import { useState } from "react";
import { ConfigProvider, theme, Button, Card } from "antd";
import MyLayout from "./modules/layout";

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme1, isDarkMode, toggleTheme } = useTheme();

  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  return (
    <>
      {/* <button onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button> */}

      {/* <ConfigProvider theme="dark">
        <div style={{ background: theme1.background, color: theme1.text }}>
          <MyLayout></MyLayout>
        </div>
      </ConfigProvider> */}
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Poppins, sans-serif",
            colorPrimary: "#dff500",
            // colorPrimaryHover: "#dff500",
          },
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        <div style={{ background: theme1.background, color: theme1.text }}>
          <MyLayout></MyLayout>
        </div>
      </ConfigProvider>
    </>
  );
}

export default App;
