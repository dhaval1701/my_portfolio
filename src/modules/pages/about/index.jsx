import React from "react";
import { Row, Col, Typography, Timeline } from "antd";
import { EnvironmentOutlined, IdcardOutlined } from "@ant-design/icons";
import { educationData } from "../../../data/educationData";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div>
      {/* <Title level={2}>About Me</Title> */}

      {/* Educational Background */}
      <Title level={3}>Educational Background</Title>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Timeline mode="alternate">
            {educationData.map((item, index) => (
              <Timeline.Item key={index} label={`${item.duration}`}>
                <Title level={4}>{`${item.title} - ${item.name}`}</Title>
                <Paragraph>{`${item.details}`}</Paragraph>
                {item.grade !== undefined ? (
                  <>
                    <Paragraph>
                      <IdcardOutlined /> {`${item?.grade}`}
                    </Paragraph>
                  </>
                ) : null}
                <Paragraph>
                  <EnvironmentOutlined /> {`${item.location}`}
                </Paragraph>
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
      </Row>
    </div>
  );
};

export default About;
