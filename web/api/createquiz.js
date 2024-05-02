const backBtn = document.getElementById("back-btn");
backBtn.addEventListener("click", function() {
    window.location.href = "/web/Dashboard/dashboarduser.html";
});

document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const type = document.getElementById("type").value;
});