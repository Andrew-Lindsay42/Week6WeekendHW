document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript has loaded');

    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);
  });

const handleFormSubmit = function (event){
    
    if (event['submitter']['id'] === 'submit_hero'){
        event.preventDefault();

        const heroInfo = document.createTextNode(`Name: ${this['hero_name']['value']}, Secret Identity: ${this['secret_identity']['value']}, Species: ${this['species']['value']}`);
        const newItem = document.createElement('LI');

        newItem.appendChild(heroInfo);
        document.getElementById('hero_list').appendChild(newItem);
        this.reset();
    } else {
        event.preventDefault();
        this.reset();

        document.getElementById('hero_list').innerHTML = '';
    };
};