function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('active');
}

function openForm() {
  document.getElementById('formModal').style.display = 'block';
}
function closeForm() {
  document.getElementById('formModal').style.display = 'none';
}
window.onclick = function (event) {
  const modal = document.getElementById('formModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
