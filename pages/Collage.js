import './Collage.css'
import { getImagesForCollage } from '../utils/pages/collage/deployImages.js';
import { changePage } from '../utils/pages/collage/changePage.js';

export const collage = async () => {
  document.querySelector('main').innerHTML = `
    <div class="collage-images"></div>
    <div class="pages-images">
      <button class="left"><</button>
      <p></p>
      <button class="right">></button>
    </div>
  `;
  document.querySelector('main').className = 'collage';

  const dataQuery = {
    page: 1,
    text: document.querySelector('.div-search > input').value
  };
  await getImagesForCollage(dataQuery);
  document.querySelector('.right').addEventListener("click", async () => {
    dataQuery.page++;
    changePage(dataQuery);
  });
  document.querySelector('.left').addEventListener("click", async () => {
    dataQuery.page--;
    changePage(dataQuery);
  });
};