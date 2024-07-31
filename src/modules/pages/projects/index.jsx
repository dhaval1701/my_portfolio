import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { projects } from "../../../data/projects";

const { Title, Paragraph } = Typography;

const Projects = () => {
  return (
    <div>
      <Title level={3}>Projects</Title>
      <Row gutter={[16, 16]}>
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  alt={project.title}
                  src={project.image}
                  style={{ height: "200px", width: "100%", objectFit: "cover" }}
                />
              }
            >
              <Card.Meta title={project.title} description={project.subtitle} />
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Learn more
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
