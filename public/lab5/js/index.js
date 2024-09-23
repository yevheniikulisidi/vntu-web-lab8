const button = document.getElementById('change-style-btn');

button.addEventListener('click', function () {
  const header = document.querySelector('h1');
  const paragraph = document.querySelector('p');

  header.style.color = 'blue';
  header.style.fontSize = '3rem';

  paragraph.style.backgroundColor = 'yellow';
  paragraph.style.padding = '10px';
  paragraph.style.borderRadius = '5px';
});
