const projectValidate = ({ name, category, website, github }) => {
  const errors = {};

  if (name.includes("<script>") || name.includes("alert()"))
    errors.name = "Please provide a valid name";
  if (category.includes("<script>") || category.includes("alert()"))
    errors.category = "Please provide a valid category";
  if (website.includes("<script>") || website.includes("alert()"))
    errors.website = "Please provide a valid website link";
  if (github.includes("<script>") || github.includes("alert()"))
    errors.github = "Please provide a valid github link";

  if (!name) errors.name = "Name field is required";
  if (!category) errors.category = "Category field is required";
  if (!website) errors.website = "Website link is required";
  if (!github) errors.github = "Github link is required";

  return {
    isValid: Object.keys(errors).length > 0 ? false : true,
    errors
  };
};

export default projectValidate;
