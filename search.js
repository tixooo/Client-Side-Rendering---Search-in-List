import {render} from '../node_modules/lit-html/lit-html.js';
import {towns} from './towns.js';
import {ulTowns} from './template.js';

let location = document.querySelector(`#towns`);
let baseTowns = towns.map(t => ({name: t}));
render(ulTowns(baseTowns), location);

let searchButton = document.getElementById(`search-btn`);
searchButton.addEventListener('click', search);


function search() { 
    let searchWord = document.getElementById(`searchText`);
    let currentSearch = searchWord.value.toLowerCase();
    
    if (searchWord.value !== "") {
    let allTowns = towns.map(t => ({name: t}));
    let matchedTowns = allTowns.filter(t => t.name.toLowerCase().includes(currentSearch));
    matchedTowns.forEach(t => t.class = "active");
    render(ulTowns(allTowns), location);
    let resultNumber = document.getElementById('result');
    if (searchWord.value === "") {
        resultNumber.textContent = "";
    } else {
        resultNumber.textContent = `${matchedTowns.length} matches found`;
    }
    }
}