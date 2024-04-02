import React, { useState } from "react";
import { Button, Form, Input, Radio, Select } from "antd";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";

type LayoutType = Parameters<typeof Form>[0]["layout"];
const SignupNext = () => {
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

  // <Select >
  //   <Select.Option value="sample">Sample</Select.Option>
  //   <Select.Option value="Exxample">Exxample</Select.Option>
  // </Select>;
  return (
    <>
      <div className="signupnext">
        <div className="signupnext__left">
          <div className="signupnext__logo">
            <img src="src/assets/img/Ellipse 1.png" alt="" />
          </div>
          <div className="signupnext__left__heading">
            <p>Hi Master</p>
            <span>
              Please share for us your information and learn more about GTEMAS
            </span>
          </div>
          <div className="signupnext__left__img">
            <img src="src/assets/img/Group34.png" alt="" />
          </div>
        </div>
        <div className="signupnext__right">
          <div className="heading">Get in touch</div>
          <Form
            {...formItemLayout}
            layout="vertical"
            form={form}
            initialValues={{ layout: formLayout }}
            onValuesChange={onFormLayoutChange}
            style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
          >
            <Form.Item style={{ margin: "10px 0px" }} label="Role">
              <Select style={{ width: "349px", height: "42px" }}>
                <Select.Option value="Developer" seselected>
                  Developer
                </Select.Option>
                <Select.Option value="Exxample">Exxample</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item style={{ margin: "10px 0px" }} label="Level">
              <Select style={{ width: "349px", height: "42px" }}>
                <Select.Option value="Senior" seselected>
                  Senior
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item style={{ margin: "0px 0px" }} label="MessageApp">
              <Select style={{ width: "349px", height: "42px" }}>
                <Select.Option value="Senior" seselected>
                  Linkedin
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item style={{ margin: "10px 0px" }} label="MessageAppLinkAcount">
              <Select style={{ width: "349px", height: "42px" }}>
                <Select.Option value="Senior" seselected>
                Link
                </Select.Option>
              </Select>
            </Form.Item>
   
          <Form.Item style={{ margin: "10px 0px" }} label="Message">

          <TextArea
              rows={4}
              placeholder="Required, Number developers"
              className="textarea"
            />
          </Form.Item>
           
            <Form.Item style={{ margin: "10px 0px" }} {...buttonItemLayout}>
              <Link to="/signup">
                <Button className="btn-back">Back</Button>
              </Link>
              <Link to="">
                <Button className="btn-submit">Submit</Button>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignupNext;
