import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router";
import { setCookie } from "../Library/Cookies";
import { DATACONSTANT } from "../constant/data.constant";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobileNmber: "",
  });

  const Submit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(" http://localhost:3500/register", {
        name: form.name,
        email: form.email,
        password: form.password,
        mobileNmber: form.mobileNmber,
      });
      console.log(res.data);

      if (res?.status === 201) {
        setCookie(DATACONSTANT.SETCOOKIE, JSON.stringify(res?.data), 30);
      }
      return navigate("/");
    } catch (error) {}
  };
  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // console.log(form);
  return (
    <Form
      onSubmit={Submit}
      style={{
        width: "35%",
        height: "500px",
        border: "2px solid",
        marginTop: "5%",
        marginLeft: "35%",
      }}
    >
      <Form.Group className="m-3 mt-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={inputHandler}
          // value={r}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="m-3">
        <Form.Label>Enter email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={inputHandler}
          // value={r}
        />
      </Form.Group>
      <Form.Group className="m-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={inputHandler}
          // value={r}
        />
      </Form.Group>
      <Form.Group className="m-3">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Mobile Number"
          name="mobileNmber"
          onChange={inputHandler}
          // value={r}
        />
      </Form.Group>
      <Form.Group className="m-3">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <center>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </center>
    </Form>
  );
};

export default Register;
