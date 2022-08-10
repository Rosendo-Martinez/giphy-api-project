import homePage from './homePage';
import {UI} from './UI';

window.addEventListener('load', () => {
    document.querySelector('#root').append(homePage());
    UI.handleOnLoad();
})