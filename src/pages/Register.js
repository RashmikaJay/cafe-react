import { useState } from "react";
import FormInput from "../components/common/FormInput";
import "./Register.css";
import SubmitButton from "../components/common/SubmitButton";
import toast from "react-hot-toast";
import axios from "axios";
import { api } from "../config";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setconfrimPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      if (password.trim() === "" && confrimPassword.trim() === "") {
        toast.error("Password cannot be null");
        return;
      }

      if (confrimPassword !== password) {
        toast.error("Password not matched");
        return;
      }

      await axios.post(`${api}/auth/register`, {
        email: email,
        password: password,
      });

      toast.success("Registration successfully..");
      setEmail("");
      setPassword("");
      setconfrimPassword("");
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className='center-div'>
      <form className='register-container'>
        <h2>Register</h2>
        <FormInput
          label='Email Address'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          label='Confirm password'
          value={confrimPassword}
          type='password'
          onChange={(e) => setconfrimPassword(e.target.value)}
        />
        <SubmitButton
          text='Submit'
          onClick={handleSubmit}
          className='submit-button'
        />
      </form>
    </div>
  );
};

export default Register;
