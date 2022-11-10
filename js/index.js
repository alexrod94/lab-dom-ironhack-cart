window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const buttons = document.querySelectorAll('.btn-remove');
  buttons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  document.querySelector('#create').addEventListener('click', createProduct);

  //... your code goes here
});

// ITERATION 1

function updateSubtotal(product) {
  // Coger el precio del producto
  const price = Number(product.querySelector('.price span').innerText);
  // Coger el input de cantidad
  const quantity = product.querySelector('.quantity input').value;
  // Multiplicarlos
  const result = price * quantity;
  // Cambiar el subtotal
  product.querySelector('.subtotal span').innerText = result;
  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const productArray = document.querySelectorAll('.product');
  const newArr = [...productArray];
  // Conseguir subtotal
  let total = newArr.reduce((acc, product) => {
    return acc + updateSubtotal(product);
  }, 0);
  // Sumarlo
  console.log(total);
  // Cambiar el HTML
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  event.currentTarget.parentNode.parentNode.remove();
  // const myRow = target.parentNode.parentNode;
  // myRow.parentNode.removeChild(myRow);
}

// ITERATION 5

function createProduct() {
  // Coger el nombre del input
  const name = document.querySelector('#text-input').value;
  // Coger el precio del input
  const price = document.querySelector('#number-input').value;
  // Crear el HTML
  const row = document.createElement('tr');
  row.innerHTML = `
  <tr class="product">
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${price}.00</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
  `;
  document.querySelector('tbody').appendChild(row);
}
