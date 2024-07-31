// components/Contact.js
import React, { useEffect, useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  notification,
  Row,
  Col,
  message,
  Typography,
} from "antd";
import emailjs from "emailjs-com";
import image1 from "../../../assets/email_page.svg";

const { Title } = Typography;

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    message.loading("Sending Email...");
    setLoading(true);

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
      to_name: "Dhaval",
    };

    console.log(templateParams);

    try {
      const response = await emailjs.send(
        "service_87hv8d8", // Your Service ID
        "template_8e255dx", // Your Template ID
        templateParams
        // "csBfDuA3vpNFZbNHg8r9X" // Your User ID (if needed)
      );
      console.log("Email sent successfully:", response);
      message.destroy();
      notification.success({
        message: "Success",
        description: "Your message has been sent successfully.",
      });
    } catch (error) {
      console.error("Email failed to send:", error);
      message.destroy();
      notification.error({
        message: "Error",
        description: "Failed to send your message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => emailjs.init("IKAgcmySfsm_i0Zn8"), []);

  // useEffect(() => {
  //   emailjs.init({
  //     publicKey: "csBfDuA3vpNFZbNHg8r9X",
  //   });
  // }, []);

  // {
  //   /* Map */
  // }
  // <Col xs={24} sm={12} md={12} lg={12}>
  //   {/* Replace the src attribute with the embed code from your map service */}
  //   <iframe
  //     title="locationMap"
  //     width="100%"
  //     height="600px"
  //     className="absolute inset-0"
  //     frameBorder={0}
  //     marginHeight={0}
  //     marginWidth={0}
  //     style={{ filter: "opacity(0.7)" }}
  //     src="https://www.google.com/maps/embed/v1/place?q=RATNAJYOT+COMPLEX+-2,+Nirnay+Nagar+Road,+Nirnay+Nagar+Sector+I,+Nirnay+Nagar,+Ahmedabad,+Gujarat,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
  //   ></iframe>
  // </Col>;

  return (
    <div>
      <Title level={3}>Contact Us</Title>
      <Row
        gutter={[16, 16]}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "50px",
          padding: "40px",
        }}
      >
        {/* Contact Image */}
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={image1}
            alt="Contact Us"
            style={{ width: "100%", maxWidth: "400px", height: "auto" }}
          />
        </Col>

        {/* Contact Form */}
        <Col xs={24} sm={24} md={12} lg={12}>
          <Card title="Contact Us">
            <Form onFinish={onFinish} layout={"vertical"}>
              {/* Your form items go here */}
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ color: "#001529" }}
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
