const modal = document.getElementById('modal');
const openModal = document.getElementById('show-details');
const closeModal = document.getElementById('modal-close');


openModal.addEventListener("click", () => {
  modal.showModal();
  modal.scrollTop = 0
});

modal.addEventListener('click', (e) => {
  if (e.target.nodeName === "DIALOG") {
    modal.close();
    openModal.blur()
  }
})

closeModal.addEventListener("click", () => {
  modal.setAttribute("modal-closing", "");

  modal.addEventListener(
    "animationend",
    () => {
      modal.removeAttribute("modal-closing");
      modal.close();
      openModal.blur()
    },
    { once: true }
  );
});