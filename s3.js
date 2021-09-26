// 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
// 15 % , можете использовать метод forEach https: //mzl.la/1AOMMWX :

'use strict';
const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

percent = 0.15; // если код будет больше, и проценты будут применяться часто в коде, в дальнейшем проще будет изменить только переменную. 
products.forEach(item => {
    item.price = item.price + (item.price * percent); // price (200) + (200 * 0.15) и так для каждого элемента
});

console.log(products);