import { Card } from "antd";
import { FacebookFilled, GoogleCircleFilled } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
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
  //SIGN IN WITH GOOGLE
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

  //SIGN IN WITH FACEBOOK
  const fbProvider = new FacebookAuthProvider();
  const FacebookLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, fbProvider);
      const credential = await FacebookAuthProvider.credentialFromResult(
        result
      );
      const token = credential.accessToken;
      let photoUrl = result.user.photoURL + "?height=500&access_token=" + token;
      await updateProfile(auth.currentUser, { photoURL: photoUrl });
      console.log(result);
      setLoading(false);
      navigate("/home");
    } catch (error) {
      setLoading(false);
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
      <h1 className="flex justify-center mb-4 text-xl ">CoffeeShip</h1>
      {/* <Form
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
        </Form.Item> */}

      {/* <Form.Item
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
        </Form.Item> */}

      {/* <Form.Item>
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
      </Form> */}
      <button
        onClick={GoogleLogin}
        className="flex flex-row justify-center w-[200px] py-2 mt-0 mb-2 space-x-2 font-semibold text-center text-gray-800 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
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
      {/* <button
        onClick={FacebookLogin}
        className="flex flex-row justify-center w-full py-2 mt-0 mb-2 space-x-2 font-semibold text-center text-gray-800 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100"
      >
        <div> Sign in with Facebook</div>

        <FacebookFilled
          // spin={true}
          style={{ fontSize: "20px", color: "#3b5998" }}
          className="mt-0.5"
        />
      </button> */}
      {/* <Link
        to="/register"
        className="flex flex-col text-[#867070] justify-center items-center"
      >
        Register to board CoffeeShip
      </Link> */}
    </Card>
  ) : (
    <div className="flex items-center justify-center mt-40 ">
      <CubeSpinner frontColor="#8D7B68" backColor="#000000" />
    </div>
  );
};

export default LoginForm;
