document.addEventListener("DOMContentLoaded", () => {
  // class calling
  let nameField = document.querySelector(".name");
  let emailField = document.querySelector(".email");
  let passwordField = document.querySelector(".password");
  let btnSignUp = document.querySelector(".btn");
  let loginButton = document.querySelector(".login");

  console.log(nameField);

  btnSignUp.addEventListener("click", () => {
    const name = nameField.value;
    const email = emailField.value;
    const password = passwordField.value;

    const user = {
      name: name,
      email: email,
      password: password,
    };

    console.log("This is the user: ", user);

    // add the user to the local storage
    try{
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    }catch(e){
      console.error("Error saving user to local storage:", e);
      alert("Failed to register user. Please try again later.");
      return;
    }

    // display success message
    alert("User registered successfully!");

    // clear the form fields
    nameField.value = "";
    emailField.value = "";
    passwordField.value = "";
  });

  // login auth

  loginButton.addEventListener("click", () => {
    
  })


});
