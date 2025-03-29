const LoginForm = (props) => {
  const handleSubmit = () => {
    props.redirect("gallery");
  };
  return (
    <div class="formContainer">
      <div class="formContent" id="login">
        <p>Login</p>
      </div>
      <div class="userName formContent">
        <input class="dataField" type="text" placeholder="Username" />
      </div>
      <div class="passCode formContent">
        <input
          class="dataField"
          type="password"
          placeholder="Password: •••••••"
        />
      </div>
      <div class="submitButton formContent">
        <button onClick={handleSubmit} id="submit">
          Login
        </button>
        <button id="submit">Register</button>
      </div>
    </div>
  );
};

export default LoginForm;
