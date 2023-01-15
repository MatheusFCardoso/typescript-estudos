//Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.backgroundColor = 'red';

//Non null assertion (!) pouco aconselhável
const body2 = document.querySelector('body')!;
if (body2) body2.style.backgroundColor = 'red';

//Type assertion AS
const body3 = document.querySelector('body') as HTMLBodyElement;
if (body3) body3.style.backgroundColor = 'red';

//HTML element
const input = document.querySelector('.input-name') as HTMLInputElement;
input.value = 'Matheus';
input.focus();
