const loginValidator = ({ email, password }) => {
  const errors = {};

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
    errors.email = "Please provide a valid email address";

  if (email.includes("<script>") || email.includes("alert()"))
    errors.email = "Please provide a valid email address";
  if (password.includes("<script>") || password.includes("alert()"))
    errors.password = "Please provide a valid password";

  if (!email) errors.email = "Email field is required";
  if (!password) errors.password = "Password field is required";

  return {
    isValid: Object.keys(errors).length > 0 ? false : true,
    errors
  };
};

export default loginValidator;
