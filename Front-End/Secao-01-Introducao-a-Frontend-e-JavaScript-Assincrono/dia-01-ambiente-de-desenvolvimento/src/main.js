import { nanoid } from 'nanoid';
import './style.css';

const button = document.querySelector('button');
const outputPasswordText = document.querySelector('h2');

button.addEventListener('click', () => {
    outputPasswordText.innerHTML = nanoid();
});