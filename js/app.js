document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript has loaded');

    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);
  });

const handleFormSubmit = function (event){
    event.preventDefault();

    const heroInfo = document.createTextNode(`${this['hero_name']['value']}, ${this['secret_identity']['value']}, ${this['species']['value']}`);
    const newItem = document.createElement('LI');

    newItem.appendChild(heroInfo);
    document.getElementById('hero_list').appendChild(newItem);
};