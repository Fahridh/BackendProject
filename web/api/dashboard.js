const logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", function() {
    localStorage.removeItem("token");
    window.location.href = "/web/loginregister/login.html";
});

document.addEventListener("DOMContentLoaded", function() {
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "/web/login.html";
    }

    fetch(`http://localhost:3000/user/profile`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`, 
        },
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error("Failed to fetch user profile.");
        }
        return res.json();
    })
    .then((data) => {
        console.log(data); 
        if (data.status === "Success") {
            const usernamePlaceholder = document.getElementById("username-placeholder");
            usernamePlaceholder.innerText = data.data.name; 
        } else {
            console.log(data.message); 
        }
    })
    .catch((error) => {
        alert("Error fetching user profile:", error);
    });
});
