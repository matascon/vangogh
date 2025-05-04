import { collage } from "../../../pages/Collage";

const setEventInWords = () => {
  const words = document.querySelectorAll('.words-suggested > li');
  for (const word of words) {
    word.addEventListener("click", () => {
      document.querySelector('.div-search > input').value = word.textContent;
      collage();
    })
  }
};

const giveSuggestions = (words) => {
  document.querySelector('.collage').className = 'collage-issue';
  const ul = document.createElement('ul');
  const p = document.createElement('p');
  p.innerText = `No se ha encontrado la palabra: "${document.querySelector('.div-search > input').value}". Pero aquí tienes algunas sugerencias de lo que podrías estar buscando.`
  ul.className = 'words-suggested';
  let li = document.createElement('li');
  li.innerText = words[0];
  ul.appendChild(li);
  li = document.createElement('li');
  li.innerText = words[1];
  ul.appendChild(li);
  li = document.createElement('li');
  li.innerText = words[2];
  ul.appendChild(li);
  ul.appendChild(li);
  document.querySelector('.collage-issue').appendChild(p);
  document.querySelector('.collage-issue').appendChild(ul);
  setTimeout(() => {
    document.querySelector('.collage-issue > p').style.opacity = "1";
    document.querySelector('.words-suggested').style.opacity = "1";
    document.querySelector('.collage-issue > p').style.transform = "translateY(0)";
    document.querySelector('.words-suggested').style.transform = "translateY(0)";
    setEventInWords();
  }, 500);
};

export const findOutWordsSuggested = (responseGemini) => {
  const words = [];
  let i;

  for (i = 0; i < responseGemini.length; i++) {
    if (responseGemini[i] === '"') {
      let word = '';
      i++;

      while ((responseGemini[i] >= 'A' && responseGemini[i] <= 'Z') || (responseGemini[i] >= 'a' && responseGemini[i] <= 'z')) {
        word += responseGemini[i];
        i++;
      }
      words.push(word);
    }
  }
  giveSuggestions(words);
};

export const getSuggestionsFromGemini = async (word) => {
  const prompt = `Dame tres palabras en formato array que tengan sentido EN ESPAÑOL O EN INGLÉS, que NO SEAN PALABRAS ABSTRACTAS, ES DECIR, QUE SEAN TANGIBLES EN LA VIDA REAL y se asemejen en cuanto a las letras que se están usando en la siguiente palabra: "${word}. Solo dame el array, no me digas más, y las palabras dentro del array pónlas sin acentos, aunque estén en español"`;
  const url = '/api/gemini';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({prompt: prompt})
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error en el backend: ${response.status} - ${errorData.error || response.statusText}`);
    }

    const data = await response.json();
    const generatedText = data.text;

    return generatedText;
  } catch (error) {
    console.error('Error al llamar a la función backend:', error);
    throw error;
  }
};