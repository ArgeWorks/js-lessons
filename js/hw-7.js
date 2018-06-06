// События: задачи №1 и №2
const button = document.querySelector('.btn-msg');

button.addEventListener('click', e => {
    e.preventDefault();
    alert(e.target.textContent + ', ya!');
});

button.addEventListener('mouseover', e => e.target.setAttribute('style', 'background-color: red'));
button.addEventListener('mouseout', e => e.target.removeAttribute('style'));

// События: задача №3
document.body.addEventListener('click', e => document.querySelector('#tag').innerText = e.target.tagName);

// Формы: задача №2
let seasonsArray = [
    { 'Лето': 'Одень футболку и шорты' },
    { 'Осень': 'Одень куртку и штаны' },
    { 'Зима': 'Одень шубу и теплые штаны' },
    { 'Весна': 'Одень ветровку и джинсы' },
];

const select = document.forms.formTaskForms.seasons;
const input = document.forms['formTaskForms'].elements['seasonsValue'];

for (let item of seasonsArray) {
    select.insertAdjacentHTML('afterBegin', `<option value="${Object.values(item)}">${Object.keys(item)}</option>`);
};

select.addEventListener('change', e => input.value = e.target.selectedOptions[0].value);

