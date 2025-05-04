import { collage } from '../../../pages/Collage.js';
import { changeQuery } from './changeQuery.js';

export const search = () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      console.log("El reconocimiento de voz ha comenzado...");
      const voiceButton = document.querySelector('.search-voice');
      voiceButton.className = 'search-voice-listening';
    };

    recognition.onend = () => {
      console.log("El reconocimiento de voz ha terminado.");
      const voiceButton = document.querySelector('.search-voice-listening');
      voiceButton.className = 'search-voice';
    };

    recognition.onerror = (event) => {
      console.error('Error:', event.error);
    };

    recognition.onresult = (event) => {
      const inputText = document.querySelector('.div-search > input');
      inputText.value = event.results[0][0].transcript;
      if (document.querySelector('main').className === 'collage') {
        changeQuery();
      } else {
        collage();
      }
    };

    document.querySelector('.search-voice').addEventListener('click', () => {
      recognition.start();
    });
  } else {
    console.log("Lo siento, tu navegador no soporta la API de reconocimiento de voz.");
  }

  document.querySelector('.search-text').addEventListener("click", () => {
    if (document.querySelector('.div-search > input').value) {
      if (document.querySelector('main').className === 'collage') {
        changeQuery();
      } else {
        collage();
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    if (document.querySelector('.div-search > input').value && event.key === 'Enter') {if (document.querySelector('main').className === 'collage') {
      changeQuery();
    } else {
      collage();
    }
    }
  });
};