import icon from './images/animal-shelter.png';

export default function homePage() {
    const header = document.createElement('header');
    const headerIcon = new Image();
    headerIcon.src = icon;
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Random Cat GIPHY Generator';
    header.append(headerIcon, headerTitle);
    
    const main = document.createElement('main');
    const div = document.createElement('div');
    const catGIPHYImage = document.createElement('img');
    catGIPHYImage.classList.add('cat-giphy-img');
    const btn = document.createElement('button');
    btn.classList.add('random-cat-giphy-btn');
    btn.textContent = 'Random Cat GIPHY Button!';
    div.append(catGIPHYImage);
    main.append(div,btn);
    
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.textContent = 'Copycat © 2022 Rose';
    footer.append(p);
    
    const homePageContainer = document.createElement('div');
    homePageContainer.classList.add('home-page-container');
    homePageContainer.append(header, main, footer);
    
    return homePageContainer;
}