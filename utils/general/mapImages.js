export const mapImages = (images, size) => {
  const mapping = images.map(image => {
    const newImage = {};
    newImage['src'] = image.urls[size];
    newImage['alt'] = image.alt_description;
    newImage['id'] = image.id;
    return newImage;
  });
  return mapping; 
};