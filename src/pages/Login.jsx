import { Avatar } from "antd";
import LoginForm from "../components/LoginForm";

const Login = () => {
  // console.log(import.meta.env.VITE_API_KEY);
  return (
    <div className="">
      <div className="  h-screen flex flex-col mt-10 items-center">
        <Avatar
          size={70}
          shape="square"
          src="https://i.imgur.com/jinuOfB.png"
          className=" mb-5"
        />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
