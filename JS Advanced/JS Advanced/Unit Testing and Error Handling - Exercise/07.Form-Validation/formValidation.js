function validate() {
  const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
  const passwordRegex = /^[\w]{5,15}$/;
  const emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;
  const companyNumberCheck = (num) => num >= 1000 && num <= 9999;
  const companyCheckbox = document.getElementById("company");
  const companyInfo = document.getElementById("companyInfo");
  const form = document.getElementById("registerForm");
  let validUsername = false;
  let validPasses = false;
  let validCompanyInfo = false;
  let validEmail = false;
  companyCheckbox.addEventListener("change", () => {
    if (companyInfo.style.display === "none") {
      companyInfo.style.display = "block";
    } else {
      companyInfo.style.display = "none";
    }
  });
  form.addEventListener("submit", register);

  function register(e) {
    e.preventDefault();
    const usernameField = document.getElementById("username");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const confirmPassField = document.getElementById("confirm-password");
    const companyNumberField = document.getElementById("companyNumber");
    if (!usernameRegex.test(usernameField.value)) {
      usernameField.style.borderColor = "red";
    } else {
      usernameField.style.border = "none";
      validUsername = true;
    }
    if (!emailRegex.test(emailField.value)) {
      emailField.style.borderColor = "red";
    } else {
      emailField.style.border = "none";
      validEmail = true;
    }
    if (
      !passwordRegex.test(passwordField.value) ||
      !passwordRegex.test(confirmPassField.value) ||
      passwordField.value !== confirmPassField.value
    ) {
      passwordField.style.borderColor = "red";
      confirmPassField.style.borderColor = "red";
    } else {
      passwordField.style.border = "none";
      confirmPassField.style.border = "none";
      validPasses = true;
    }
    if (companyCheckbox.checked) {
      if (!companyNumberCheck(Number(companyNumberField.value))) {
        companyNumberField.style.borderColor = "red";
      } else {
        companyNumberField.style.border = "none";
        validCompanyInfo = true;
      }
    }
    if (validEmail && validPasses && validUsername) {
      if (companyCheckbox.checked) {
        if (companyNumberCheck(Number(companyNumberField.value))) {
          document.getElementById("valid").style.display = "block";
        }else{
            document.getElementById("valid").style.display = "none";
        }
      } else {
        document.getElementById("valid").style.display = "block";
      }
    } else {
      document.getElementById("valid").style.display = "none";
    }
  }
}
