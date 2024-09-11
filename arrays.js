// let name = 'John Doe';
// let name2 = name;
// name='Mike Smith'
// console.log(name2);  //John Doe
// console.log(name)    //Mike Smith


// const products = ['TV', 'XBOX', 'Radio', 'Keyboard'];
// const products2 = products;
// products.push('Iphone');

// console.log(products2);


// console.log(products === products2)

// for(let i = 0; i<products.length; i++ ){
//     console.log(products[i]);
// }

// for(let product of products){
//     console.log(product)
// }

// let last2Products = products.slice(0,2);
// for(let index in last2Products){
//     console.log(last2Products[index])
// }


// const products = [
//     {name:'TV', price:450, onSale: false},
//     {name:'XBOX', price:250, onSale: true},
//     {name:'Radio', price:25, onSale: false},
//     {name:'Keyboard', price:45, onSale: true},
// ]

// const productNames = products.map((p)=> ({
//         name:p.name, 
//         onSale: p.onSale
//     }) 
// ) 
// console.log(productNames)

const products = ['TV', 'XBOX', 'Radio', 'Keyboard'];


const productsCopy = ['AnotherItem', ...products, 'End Item']
console.log(productsCopy)
