import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { RotateSpinner } from "react-spinners-kit";
import { CubeSpinner } from "react-spinners-kit";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  console.log(loading);
  const navigate = useNavigate();
  const logout = () => {
    auth.signOut();
  };

  useEffect(() => {
    if (!user && !loading) navigate("/");
  }, [user, loading, navigate]);

  if (loading)
    return (
      <div className=" h-screen flex justify-center items-center">
        <CubeSpinner frontColor="#8D7B68" backColor="#000000" />
      </div>
    );

  if (user)
    return (
      <div>
        <h2>
          <span>{user.displayName} </span>
          is a user <img src={user.photoURL}></img>
          <button
            onClick={logout}
            className="w-200px text-sm rounded-lg h-20px text-white  bg-black "
          >
            Sign Out
          </button>
        </h2>
      </div>
    );
};

export default Home;
