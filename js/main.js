const products = [
  { id: 1, title: 'Audi Q8', price: 15000 },
  { id: 2, price: 8000 },
  { id: 3, title: 'Mercedes AMG63', price: 11000 },
  { id: 4, title: 'Lamborghini Urus' },
  { id: 5, title: 'Ferrari Enzo', price: 33000 },
  { id: 6, title: 'BMW F90', price: 18000 }
];


const renderProduct = (id, title = 'specified', price = 'on sale soon') => {
  return `<div class="product-item">
                <h3>${title}</h3>
                <button id="car__${id}">${price}</button>
            </div>`
};

const render = productsList => {
  const productsElements = productsList.map(item => renderProduct(item.id, item.title, item.price));
  document.querySelector('.products').innerHTML = productsElements.join('');
};

render(products);