let servModal = document.getElementById("service-modal");
let coachModal = document.getElementById("coach-modal");
let coachBtn = document.getElementById("coach-btn");
let serviceBtn = document.getElementById("service-btn");
let closeCoach = document.getElementById("close-coach");
let closeServ = document.getElementById("close-service");

coachBtn.onclick = function () {
    coachModal.style.display = "flex";
}

serviceBtn.onclick = function () {
    servModal.style.display = "flex";
}

closeCoach.onclick = function () {
    coachModal.style.display = "none";
}

closeServ.onclick = function () {
    servModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == coachModal) {
        coachModal.style.display = "none";
    } else if (event.target == servModal) {
        servModal.style.display = "none";
    }
}