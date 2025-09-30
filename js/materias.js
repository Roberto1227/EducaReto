document.querySelectorAll('.info-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const info = button.parentElement.nextElementSibling;
    info.classList.toggle('hidden');
    info.classList.toggle('fade-in');
  });
});