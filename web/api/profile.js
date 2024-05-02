document.addEventListener("DOMContentLoaded", function() {
    var token = localStorage.getItem("token");
    var id =   1;

   
    
    if (!token) {
        window.location.href = "/web/login.html";
    }
    fetch(`http://localhost:3000/user/profile/${id}`, {
        method: "GET",
        headers: {
           Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.status === "success") {
                document.getElementById("name").innerText = data.data.name;
                document.getElementById("email").innerText = data.data.email;
           
            } else {
                alert(data.message);
            }
        });
})