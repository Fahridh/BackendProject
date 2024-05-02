function handleRegisterClick() {
    window.location.href = "/web/loginregister/register.html"; 
  }
  const registerLink = document.getElementById("register-link");
  registerLink.onclick = handleRegisterClick;
    

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === "success") {
                localStorage.setItem("token", data.data.token);
                if (data.data.role === "admin") {
                    window.location.href = "/web/Dashboard/dashboarda.html";
                    return;
                }
                else if (data.data.role === "superadmin") {
                    window.location.href = "/web/Dashboard/dashboardsa.html";
                    return;
                }
                else
                {
                    window.location.href = "/web/Dashboard/dashboarduser.html";
                    console.log(data.data.role)
                }

            } else {
                alert(data.message);
            }
        });
})