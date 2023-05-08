import { Card } from "antd";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { CubeSpinner } from "react-spinners-kit";

import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const onChange = () => {
  console.log("Succcess Capcha");
};

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      setLoading(false);
      navigate("/home");
    } catch (error) {
      setLoading(false);
      // alert(error);
      console.log(error);
    }
  };

  const onFinish = (formdata) => {
    console.log(formdata);
  };

  const onFinishFailed = (values) => {
    console.log(values);
  };
  return !loading ? (
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
      <button
        onClick={GoogleLogin}
        className="flex flex-row justify-center space-x-2 bg-white mb-2 mt-0 w-full text-center hover:bg-gray-100 text-gray-800 font-semibold py-2  border border-gray-400 rounded-lg shadow"
      >
        <div> Sign in with Google</div>

        <FcGoogle
          // spin={true}
          style={{
            fontSize: "20px",
          }}
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
        to="/register"
        className="flex flex-col text-[#867070] justify-center items-center"
      >
        Register to board CoffeeShip
      </Link>
    </Card>
  ) : (
    <div className="  mt-40 flex justify-center items-center">
      <CubeSpinner frontColor="#8D7B68" backColor="#000000" />
    </div>
  );
};

export default LoginForm;
