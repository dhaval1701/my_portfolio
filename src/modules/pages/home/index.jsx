import React, { useState, useEffect } from "react";
import { Button, Row, Col, Card } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import image1 from "../../../assets/home_icon.svg";
import cv from "../../../assets/cv.pdf";
import Wrapper from "./style";
import { skillsData } from "../../../data/skillsData";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 492);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 492);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = cv;

    // Set the download attribute and trigger a click to start the download
    link.download = "Dhaval_Panchal_CV.pdf";
    document.body.appendChild(link);
    link.click();

    // Clean up the link element
    document.body.removeChild(link);
  };

  return (
    <Wrapper>
      <div className="container-fluid">
        <Row
          justify="center"
          align="middle"
          style={{ minHeight: "100vh", marginTop: "10px" }}
        >
          <Col xs={24} md={24} lg={12}>
            <div className="text-container">
              <h1>Dhaval Panchal</h1>
              <p className="lead">Frontend Developer</p>
              <p>
                Hi there! I'm Dhaval Panchal, a passionate frontend developer
                dedicated to creating immersive and responsive web experiences.
                With a strong foundation in web technologies, I bring ideas to
                life through clean and efficient code.
              </p>
              {/* "Download CV" button */}
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                size="large"
                onClick={handleDownloadCV}
                style={{ marginTop: "20px", color: "#001529" }}
              >
                Download CV
              </Button>
            </div>
          </Col>

          {!isMobile && (
            <Col xs={24} md={24} lg={12}>
              <div className="image-container">
                <img src={image1} alt="Dhaval Panchal" className="img-fluid" />
              </div>
            </Col>
          )}
        </Row>

        {/* Skills Title */}

        <h2 style={{ textAlign: "center", marginBottom: "100px" }}>
          {"Skills </>"}
        </h2>

        {/* Skills Cards */}
        <Row
          gutter={[16, 16]}
          style={{ marginTop: "40px", marginBottom: "100px" }}
        >
          {skillsData.map((skill, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                bordered={false}
                style={{
                  height: "100%",
                  minWidth: "30%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  borderTop: "3px solid",
                }}
                hoverable
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={
                      {
                        // width: "50px",
                        // height: "50px",
                        // margin: "0 10px 0 0",
                      }
                    }
                    dangerouslySetInnerHTML={{ __html: skill.svg }}
                  />
                  <p
                    style={{
                      margin: 0,
                      marginRight: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    {skill.title}
                  </p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Wrapper>
  );
};

export default Home;
