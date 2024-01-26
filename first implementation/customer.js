var restriction = document.getElementById('q1').value;
var product_type = document.getElementById('q2').value;

const button = document.getElementById('submit');

button.onclick = restrictListProducts(prods, restriction);