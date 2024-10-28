import "./Register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function onUserRegister(newUser) {
    try {
      let res = await fetch("http://localhost:4000/user-api/user", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      let data = await res.json();
      if (data.message === 'user created') {
        navigate("/login");
      } else {
        setErr(data.message);
      }
    } catch (err) {
      console.log("Error:", err);
      setErr(err.message);
    }
  }

  return (
    <div className="register-container">
      <div className="form-wrapper">
        <p className="form-header display-3">User Registration</p>
        {err && <p className="text-danger">{err}</p>}
        
        <form onSubmit={handleSubmit(onUserRegister)} className="form-row">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              <FaRegUser /> Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              {...register("username", { required: true })}
            />
            {errors.username && <p className="text-danger">*Username is required</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <RiLockPasswordLine /> Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-danger">*Password is required</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <MdOutlineMail /> Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-danger">*Email is required</p>}
          </div>

          <div className="form-group">
            <label htmlFor="mobile" className="form-label">
              <FiPhoneCall /> Mobile No
            </label>
            <input
              type="number"
              id="mobile"
              className="form-control"
              {...register("mobile", { required: true })}
            />
            {errors.mobile && <p className="text-danger">*Mobile number is required</p>}
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
