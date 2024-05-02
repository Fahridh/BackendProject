const backBtn = document.getElementById("back-btn");
backBtn.addEventListener("click", function() {
    window.location.href = "/web/Dashboard/dashboarduser.html";
});

document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const type = document.getElementById("type").value;

    fetch ("http://localhost:3000/quiz/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, description: description, type: type }),
    })

    .then((res) => res.json())
    .then((data) => {
        if (data.status === "success") {
            alert("Quiz berhasil dibuat");
            window.location.href = "/web/Quiz/soalquiz.html";
        } else {
            alert(data.message);
        }
    });
});