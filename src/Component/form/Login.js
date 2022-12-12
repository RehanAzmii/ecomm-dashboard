import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <Form
      style={{
        width: "30%",
        // height: "150%",
        height: "350px",
        marginTop: "15%",
        marginLeft: "35%",
        border: "1px solid black",
      }}
    >
      <Form.Group className="m-3 mt-5" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 m-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 m-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <center>
        <Button variant="primary " className="" type="submit">
          Submit
        </Button>
      </center>
    </Form>
  );
}

export default Login;
