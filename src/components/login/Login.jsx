import "./Login.css";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

function Login() {
  const { loginUser, userLoginStatus, err } = useContext(userLoginContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onUserLogin(userCred) {
    loginUser(userCred);
    console.log(userLoginStatus);
  }

  useEffect(() => {
    if (userLoginStatus === true) {
      navigate("/user-profile");
    }
  }, [navigate, userLoginStatus]);

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <p className="display-3">User Login</p>
        {err.length !== 0 && <p className="text-danger">{err}</p>}
        <form className="login-form" onSubmit={handleSubmit(onUserLogin)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <FaRegUser /> Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              {...register("username", { required: true })}
            />
            {errors.username?.type === "required" && (
              <p className="text-danger">*Username is required</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <RiLockPasswordLine /> Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && (
              <p className="text-danger">*Password is required</p>
            )}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
