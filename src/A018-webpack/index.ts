import mod from './mod';
console.log('Olá , mundo');
const body = document.querySelector('body') as HTMLBodyElement;

const title = document.querySelector('title') as HTMLTitleElement;

title.innerText = 'Olá, mundo';
body.style.backgroundColor = 'green';
mod();
