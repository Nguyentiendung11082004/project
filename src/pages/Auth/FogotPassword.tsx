import React from 'react'
import { Button, Checkbox, Form, type FormProps, Input } from "antd";
import { Link } from 'react-router-dom';
import Logo from 'src/assets/img/logo.svg'
type FieldType = {
  password?: string;
  confirmpassword?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const FogotPassword = () => {
  return (
    <div className="login">
    <div className="login__logo">
      <img src="src/assets/img/logo.svg" alt="" />
    </div>
    <div className="login__text">
      <p>A few more clicks tosign in to your account.</p>
      <span>Manage all your information in GTE-MASTER</span>
    </div>
    <div className="login__form">
      <img
        className="login__form__img"
        src="src/assets/img/fingerprint 1.svg"
        alt=""
      />
      <p className="login__form__heading">Forgot Password</p>
      <Form
        layout="vertical"
        className="login__form__form"
        name="basic"
        style={{ width: 380 }}
        initialValues={{ remember: true }}  
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
         
       

        <Form.Item
        <FieldType>
          label="Password"
          className="password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password  style={{ width: 389, height: 42 }} /> 
        </Form.Item>
        <Form.Item
        <FieldType>
          label="Confirm password"
          className="confirmpassword"
          name="confirmpassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password  style={{ width: 389, height: 42 }} /> 
        </Form.Item>
        <Form.Item 
        className="forgotpass"
        wrapperCol={{ offset: 12, span: 16 }}
        
        >
          <Link to='/login'>Back Login?</Link>
        </Form.Item>
        
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button className="btn-login" type="primary" htmlType="submit">
          Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
  )
}

export default FogotPassword
