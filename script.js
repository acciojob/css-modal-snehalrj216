//your JS code here. If required.
let openBtn = document.getElementById("openModal");
let modal = document.getElementById("modal");
let closeBtn = document.querySelector(".close-modal");

openBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
