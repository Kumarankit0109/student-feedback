document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const feedback = document.getElementById("feedback").value;

    const div = document.createElement("div");
    div.className = "feedback";

    div.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Course:</strong> ${course}<br>
        <strong>Feedback:</strong> ${feedback}
    `;

    document.getElementById("feedbackList").appendChild(div);

    document.getElementById("feedbackForm").reset();
});