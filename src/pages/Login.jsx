import { Avatar } from "antd";
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // console.log(import.meta.env.VITE_API_KEY);
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log(user);
      navigate("/home");
    } else console.log("login");
  }, [user]);
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
