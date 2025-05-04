import './Nav.css';
import { search } from '../utils/components/nav/search.js'
import { hello} from '../pages/Hello.js';

const nav = document.querySelector('nav');

nav.innerHTML = `
  <div class="div-title">
    <img src="/icons/van_gogh_favicon.png" alt="Retrato comico de Vicent Van Gogh">
    <p>VanGogh</p>
  </div>
  <div class="div-search">
    <input type="text" placeholder="Search">
    <button class="search-text">
      <img src="/icons/search_text_icon.png" alt="Lupa de busqueda">
    </button>
    <button class="search-voice">
      <img src="/icons/search_voice_icon.png" alt="Microfono de busqueda por voz">
    </button>
  <div/>
`;

search();

document.querySelector('.div-title').addEventListener("click", () => {
  hello();
  document.querySelector('.div-search > input').value = '';
});