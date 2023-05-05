import { Card } from "antd";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import ReCAPTCHA from "react-google-recaptcha";

import "./LoginForm.css";
import { Link } from "react-router-dom";

const onChange = () => {
  console.log("Succcess Capcha");
};

const LoginForm = () => {
  const onFinish = (formdata) => {
    console.log(formdata);
  };

  const onFinishFailed = (values) => {
    console.log(values);
  };
  return (
    <Card style={{ borderColor: "#867070" }}>
      <h1 className=" flex justify-center mb-4 text-xl">CoffeeShip</h1>
      <Form
        className="flex flex-col justify-center"
        layout="vertical"
        requiredMark={false}
        name="basic"
        labelCol={{
          span: 15,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username or Email"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          name="recaptcha"
          rules={[
            {
              required: true,
              message: "Please complete the ReCAPTCHA",
            },
          ]}
          validateTrigger="onBlur"
        >
          <ReCAPTCHA
            title="Hello"
            sitekey={import.meta.env.VITE_API_RECAPCHAKEY}
            onChange={onChange}
            // onExpired={onExpired}
          />
        </Form.Item>

        <Form.Item>
          <Button
            className="custom-button"
            type="primary"
            style={{
              backgroundColor: "black",

              width: "100%",
              textAlign: "center",
            }}
            htmlType="submit"
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
      {/* <ReCAPTCHA
        title="Hello"
        sitekey={import.meta.env.VITE_API_RECAPCHAKEY}
        onChange={onChange}
      /> */}
      <button className="flex flex-row justify-center space-x-2 bg-white mb-2 mt-0 w-full text-center hover:bg-gray-100 text-gray-800 font-semibold py-2  border border-gray-400 rounded-lg shadow">
        <div> Sign in with Google</div>

        <GoogleCircleFilled
          // spin={true}
          style={{ fontSize: "20px", color: "black" }}
          className="mt-0.5"
        />
      </button>
      <button className="flex flex-row justify-center space-x-2 bg-white mb-2 mt-0 w-full text-center hover:bg-gray-100 text-gray-800 font-semibold py-2  border border-gray-400 rounded-lg shadow">
        <div> Sign in with Facebook</div>

        <FacebookFilled
          // spin={true}
          style={{ fontSize: "20px", color: "#3b5998" }}
          className="mt-0.5"
        />
      </button>
      <Link
        to="/"
        className="flex flex-col text-[#867070] justify-center items-center"
      >
        Register to board CoffeeShip
      </Link>
    </Card>
  );
};

export default LoginForm;
