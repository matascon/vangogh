import { ACCESS_KEY } from "../../../key/key";


export const downloadImage = async (image) => {
  try {
    const urlDownload = `https://api.unsplash.com/photos/${image.id}/download?client_id=${ACCESS_KEY}`;
    const response = await fetch(urlDownload);
    const data = await response.json();
    const url = data.url;
    const imageResponse = await fetch(url);
    const blob = await imageResponse.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = image.alt;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.log('Hubo un error al descargar la imagen: ', error);
  }
};