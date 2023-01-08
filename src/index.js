import generateJokes from './generateJokes';
import './styles/main.scss';
import lol from './assets/lol.jpg';

const laughImg = document.querySelector('#laughImg');
laughImg.src = lol;
const jokeBtn = document.querySelector('#jokeBtn');
jokeBtn.addEventListener('click', generateJokes);
