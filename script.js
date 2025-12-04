window.onscroll = function () {
    const btn = document.getElementById("topBtn");
    btn.style.display = window.scrollY > 400 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function submitRecommendation() {
    const name = document.getElementById("name").value.trim();
    const msg = document.getElementById("message").value.trim();

    if (!msg) {
        alert("Please enter a message.");
        return;
    }

    const box = document.createElement("div");
    box.className = "recommend-box";
    box.innerHTML = `“ ${msg} ”`;

    document.querySelector(".recommend-container").appendChild(box);

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";

    alert("Recommendation added!");
}