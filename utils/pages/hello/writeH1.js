export const writeH1 = () => {
  const textH1 = 'Bienvenido a VanGogh';
  const h1 = document.querySelector('.hello > h1');
  let index = 0;

  const writeText = () => {
    if (index < textH1.length) {
      h1.textContent += textH1.charAt(index);
      index++;
      setTimeout(writeText, 120);
    }
  };

  writeText();
};