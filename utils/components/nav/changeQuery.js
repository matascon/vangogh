import { collage } from "../../../pages/Collage";

export const changeQuery = () => {
  const cardPictures = document.querySelectorAll('.collage-images > div');
  for (const cardPicture of cardPictures) {
    cardPicture.style.opacity = 0;
    cardPicture.style.transform = 'translateY(2rem)';
  }
  setTimeout(() => {
    collage();
  }, 500);
};