const contactValidator = ({ name, email, subject, message }) => {
  const errors = {};

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
    errors.email = "Please provide a valid email address";

  if (name.includes("<script>") || name.includes("alert()"))
    errors.name = "Please provide a valid name";
  if (email.includes("<script>") || email.includes("alert()"))
    errors.email = "Please provide a valid email address";
  if (subject.includes("<script>") || subject.includes("alert()"))
    errors.subject = "Please provide a valid subject";
  if (message.includes("<script>") || message.includes("alert()"))
    errors.message = "Please provide a valid message";

  if (!name) errors.name = "Name field is required";
  if (!email) errors.email = "Email field is required";
  if (!subject) errors.subject = "Subject field is required";
  if (!message) errors.message = "Message field is required";

  return {
    isValid: Object.keys(errors).length > 0 ? false : true,
    errors
  };
};

export default contactValidator;
