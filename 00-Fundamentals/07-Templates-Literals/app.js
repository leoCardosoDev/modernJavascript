const name = 'Leo Cardoso';
const idade = 36;
const job = 'Web Developer';
const city = 'Miami';



// Without template strings  (ES5)
let htmlEs5;
htmlEs5 = '<ul>';
htmlEs5 += '<li>Nome: ' + name + '</li>';
htmlEs5 += '<li>Idade: ' + idade + '</li>';
htmlEs5 += '<li>Profissão: ' + job + '</li>';
htmlEs5 += '<li>Cidade: ' + city + '</li>';
htmlEs5 += '</ul>';

htmlEs5 =
    '<ul>' +
    '<li>Nome: ' + name + '</li>' +
    '<li>Idade: ' + idade + '</li>' +
    '<li>Profissão: ' + job + '</li>' +
    '<li>Cidade: ' + city + '</li>' +
    '</ul>';

document.body.innerHTML = htmlEs5;


// Without template strings  (ES6)
let htmlEs6;

function hello() {
    return 'Hello World!';
}

htmlEs6 = `
<ul>
    <li>Nome: ${name} </li>
    <li>Idade: ${idade} </li> 
    <li>Profissão:  ${job} </li>
    <li>Cidade: ${city}  </li>
    <li>${ 2 + 2}</li>
    <li>${hello()}</li>
    <li>${ idade > 30 ? 'Velho' : 'Novinho' }</li>
</ul>
`;

document.body.innerHTML = htmlEs6;