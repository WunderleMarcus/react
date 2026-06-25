function Login() {
  const login = () => {
    localStorage.setItem("loggedIn", "true");
    alert("Login erfolgreich ausgeführt! Du kannst jetzt auf die geschützten Routen zugreifen.");
  };

  return (
    <>
      <h2>Login</h2>
      <button onClick={login}>
        Login
      </button>
    </>
  );
}

export default Login;