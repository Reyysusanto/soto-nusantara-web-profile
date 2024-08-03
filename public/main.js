const accItems = document.querySelectorAll('.accordion-item');

accItems.forEach(item => {
  const question = item.querySelector('.accordion-header');
  const answer = item.querySelector('.accordion-content');
  const icon = item.querySelector('.accordion-icon');

  question.addEventListener('click', () => {
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    icon.classList.toggle("transform");
  });
});
