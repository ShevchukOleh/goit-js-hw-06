const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

const createListItemsEl = ingredients.map(el => {
  const createListItems = document.createElement('li');
  createListItems.textContent = el;
  createListItems.classList.add('item');

  return createListItems;
});

list.append(...createListItemsEl); 
