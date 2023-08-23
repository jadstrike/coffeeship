import { Avatar } from "antd";
import CoffeeAnimate from "../../lotties/coffee_animate.json";
import Lottie from "lottie-react";
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
      <div className="flex flex-col items-center h-screen mt-24 ">
        <Lottie className=" w-72" animationData={CoffeeAnimate} />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
