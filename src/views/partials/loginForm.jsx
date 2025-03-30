const LoginForm = (props) => {
  const handleSubmit = () => {
    props.redirect("gallery");
  };
  return (
    <div className="formContainer">
      <div className="formContent" id="login">
        <p>Login</p>
      </div>
      <div className="userName formContent">
        <input className="dataField" type="text" placeholder="Username" />
      </div>
      <div className="passCode formContent">
        <input
          className="dataField"
          type="password"
          placeholder="Password: •••••••"
        />
      </div>
      <div className="submitButton formContent">
        <button onClick={handleSubmit} id="submit">
          Login
        </button>
        <button id="submit">Register</button>
      </div>
    </div>
  );
};

export default LoginForm;
