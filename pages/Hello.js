import './Hello.css';
import { writeH1 } from '../utils/pages/hello/writeH1.js';
import { writeText } from '../utils/pages/hello/writeText.js';
import { footage } from '../utils/pages/hello/footage.js';

export const hello = () => {
  const main = document.querySelector('main');
  main.className = 'hello';
  main.innerHTML = `
    <h1></h1>
    <p>${writeText()}</p>
  `;

  writeH1();
  footage();
};