function handleLoginClick() {
    window.location.href = "/web/LoginRegister/login.html"; 
  }
  const loginLink = document.getElementById("login-link");
  loginLink.onclick = handleLoginClick;

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var role = 'user';

    console.log(name);              
    console.log(email);
    console.log(password);
    // console.log(data.status)

    fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, password: password, role: role }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === "success") { 
                window.location.href = "/web/LoginRegister/login.html";
            } else {
                alert(data.message);
            }
    })
        .catch((error) => {
            console.error("Error:", error);
            alert("Failed to register. Please try again.");
    });
});
