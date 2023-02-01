
const buttons = document.querySelectorAll('.hidetext_btn');
const textElement = document.querySelectorAll('.hideText');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElement[index];
    textElement.classlist.toggle('showText');
  });
});
