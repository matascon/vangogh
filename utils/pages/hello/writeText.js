import { aleatoryNumber } from '../../general/aleatoryNumber.js'

export const writeText = () => {
  const phrases = [
    'Inspiración visual al alcance de un clic.',
    'Descubre imágenes que cuentan tu historia.',
    'Explora, busca y encuentra la imagen perfecta.',
    'Todo lo que imaginas, hecho imagen.',
    'Tu creatividad empieza con una buena búsqueda.',
    'Bienvenido al rincón donde las ideas cobran vida.',
    'El mundo visual, libre y sin límites.',
    'Explora y encuentra imagenes sin copyright',
    'Busca imágenes, encuentra inspiración.',
    'VanGogh te da el lienzo, tú pones la creatividad.',
    'Imágenes libres para mentes inquietas.'
  ];

  return phrases[aleatoryNumber(phrases.length)];
};