const apiTools = require('./apiTools');

const token = document.createElement("input");
token.setAttribute('type', 'password');
token.setAttribute('label', 'for=Auth Token');
document.body.appendChild(token);

const btn = document.createElement('button');
btn.innerText = 'Get Users';
document.body.appendChild(btn);
btn.onclick = async () => {
    await apiTools.getData('users', token.value);
}