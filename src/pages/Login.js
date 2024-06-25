import { useState } from "react";
import FormInput from "../components/common/FormInput";
import "./Login.css";
import SubmitButton from "../components/common/SubmitButton";
import toast from "react-hot-toast";
import axios from "axios";
import { api } from "../config";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../GlobalContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useGlobal();

  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        `${api}/auth/login`,
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );

      toast.success("Login successfully..");
      setEmail("");
      setPassword("");
      setUser(result.data);
      navigate("/admin");
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className='center-div'>
      <form className='login-container'>
        <h2>Login</h2>
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

        <SubmitButton
          text='Submit'
          onClick={handleSubmit}
          className='submit-button'
        />
      </form>
    </div>
  );
};

export default Login;
