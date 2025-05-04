import { getImagesForCollage } from "./deployImages";

export const changePage = (dataQuery) => {
  document.querySelector('nav').scrollIntoView({behavior: "smooth"});
  const cardPictures = document.querySelectorAll('.collage-images > div');
  for (const cardPicture of cardPictures) {
    cardPicture.style.opacity = 0;
    cardPicture.style.transform = 'translateY(2rem)';
  }
  setTimeout(async () => {
    await getImagesForCollage(dataQuery);
  }, 500);
};