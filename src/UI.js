import defaultCatGIPHY from './images/default-cat-giphy.gif';
import {GIPHYLoader} from './GIPHYLoader';

const UI = (function() {
    function handleOnLoad() {
        renderCatGIPHY();
        setUpEventListener();
    }

    function renderCatGIPHY() {
        const catGIPHYImage = document.querySelector('img.cat-giphy-img');
        GIPHYLoader.getCatGIPHYURL().then((url) => {
            catGIPHYImage.src = url;
        })
        .catch(() => {
            catGIPHYImage.src = defaultCatGIPHY;
        });
    }

    function setUpEventListener() {
        document.querySelector('.random-cat-giphy-btn').addEventListener('click', renderCatGIPHY);
    }

    return {handleOnLoad};
})();

export {UI};