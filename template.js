import {html} from '../node_modules/lit-html/lit-html.js';

let liTowns = (data) => html`
    <li class=${data.class}>${data.name}</li>
`;

export let ulTowns = (data) => html`
<ul>
    ${data.map(d => liTowns(d))}
</ul>
`;