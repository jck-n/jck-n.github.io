var coachModal = document.getElementById("coach-modal");
var serviceModal = document.getElementById("service-modal");
var coachBtn = document.getElementById("coach-btn");
var serviceBtn = document.getElementById("service-btn");
var closeModal = document.getElementsByClassName("close-modal");

coachBtn.onclick = function () {
    coachModal.style.display = "flex";
}

serviceBtn.onclick = () => {
    serviceModal.style.display = "flex";
}

closeModal.onclick = function () {
    coachModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == coachModal || serviceModal) {
        coachModal.style.display = "none";
        serviceModal.style.display = "none";
    }
}