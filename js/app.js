document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript has loaded');

    const form = document.querySelector('#form');
    form.addEventListener('submit', handleFormSubmit);
  });

const handleFormSubmit = function (event){

    event.preventDefault();
    const heroList = document.getElementById('hero_list');
    let publisher = document.querySelector('input[name="publisher"]:checked')

    if (publisher) {
        publisher = publisher.value;
    } else {
        publisher = 'Other';
    };

    if (event['submitter']['id'] === 'submit_hero'){
        const heroInfo = document.createTextNode(`Name: ${this['hero_name']['value']}, Secret Identity: ${this['secret_identity']['value']}, Species: ${this['species']['value']}, Publisher: ${publisher}`);
        const newItem = document.createElement('LI');

        newItem.appendChild(heroInfo);
        heroList.appendChild(newItem);
    } else {
        heroList.innerHTML = '';
    };

    this.reset();
};