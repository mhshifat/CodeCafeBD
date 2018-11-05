const registerValidator = ({ username, email, password }) => {
  const errors = {};

  if (username.includes(password))
    errors.username = "Username and password can't be the same";

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
    errors.email = "Please provide a valid email address";

  if (username.includes("<script>") || username.includes("alert()"))
    errors.username = "Please provide a valid username";
  if (email.includes("<script>") || email.includes("alert()"))
    errors.email = "Please provide a valid email address";
  if (password.includes("<script>") || password.includes("alert()"))
    errors.password = "Please provide a valid password";

  if (username.length < 8 || username.length > 15)
    errors.username = "Username must be between 8 to 15 characters long";
  if (password.length < 10)
    errors.password = "Password must be at least 10 characters long";

  if (!username) errors.username = "Username field is required";
  if (!email) errors.email = "Email field is required";
  if (!password) errors.password = "Password field is required";

  return {
    isValid: Object.keys(errors).length > 0 ? false : true,
    errors
  };
};

export default registerValidator;
