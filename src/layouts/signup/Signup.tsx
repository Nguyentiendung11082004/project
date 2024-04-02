import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import { Link } from "react-router-dom";

type LayoutType = Parameters<typeof Form>[0]["layout"];
const Signup = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === "horizontal"
      ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? { wrapperCol: { span: 14, offset: 4 } }
      : null;
  return (
    <>
      <div className="signup">
        <div className="signup__left">
          <div className="signup__logo">
            <img src="src/assets/img/Rectangle 2.jpg" alt="" />
          </div>
          <div className="signup__left__heading">
            <p>Hi Master</p>
            <span>
              Please share for us your information and learn more about GTEMAS
            </span>
          </div>
          <div className="signup__left__img">
            <img src="src/assets/img/Isolation_Mode.png" alt="" />
          </div>
        </div>
        <div className="signup__right">
            <div className="heading">
                Get in touch
            </div>
          <Form
            {...formItemLayout}
            layout="vertical"
            form={form}
            initialValues={{ layout: formLayout }}
            onValuesChange={onFormLayoutChange}
            style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
          >
            <Form.Item style={{margin:'10px 0px'}} label="First name">
              <Input
              style={{width:'349px',height:'42px'}}
              placeholder="Your first name" />
            </Form.Item>
            <Form.Item style={{margin:'10px 0px'}}  label="Last name">
              <Input
               style={{width:'349px',height:'42px'}}
              placeholder="Your last name" />
            </Form.Item>
            <Form.Item style={{margin:'10px 0px'}}  label="Your email">
              <Input
               style={{width:'349px',height:'42px'}}
              placeholder="Your email@gmail.com" />
            </Form.Item>{" "}
            <Form.Item style={{margin:'10px 0px'}}  label="Phone">
              <Input
               style={{width:'349px',height:'42px'}}
              placeholder="You phone number" />
            </Form.Item>{" "}
            <Form.Item style={{margin:'10px 0px'}}  label="Linkedin url">
              <Input
               style={{width:'349px',height:'42px'}}
              placeholder="Linkedin url" />
            </Form.Item>
            <Form.Item style={{margin:'10px 0px'}}  {...buttonItemLayout}>
              <Link to='signupnext'><Button>Next</Button></Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Signup;
