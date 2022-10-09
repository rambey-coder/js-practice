let books = document.querySelectorAll('.name') //this returns a node list
// let titles = document.getElementsByClassName('title') //this returns an HTML collection forEach loop cant work on it 
// console.log(books);

// console.log(Array.isArray(titles)); // checking if it is an array 

// let arrTitle = Array.from(titles) //tuning an HTML collection to an array

// console.log(Array.isArray(arrTitle));

// arrTitle.forEach(element => {
//     console.log(element);
// });

// for(i = 0; i < books.length; i++){
//     let element = books[i]
//     console.log(element);
// }

books.forEach(book => {
// to append text to html content
    // book.textContent += ' hey bruv'
    book.textContent = ' hey bruv'
})

// let title = document.querySelectorAll('.title')

// title.forEach(tit => {
//     tit.addEventListener('click', (e) => {
//         e.target.remove()
//     })
// })


//NODES
const banner = document.querySelector('#page-banner')

// console.log('#page banner node type is:', banner.nodeType)
// console.log('#page banner node Name is:', banner.nodeName)
// console.log('#page banner has child node:', banner.hasChildNodes())

// const clone = banner.cloneNode()
// console.log(clone);
// const cloneAll = banner.cloneNode(true)
// console.log(cloneAll);

// PARENT & CHILD ELEMENT 
// console.log('the parent node is:', banner.parentNode);
// console.log('the parent node is:', banner.parentElement);
// console.log('the parent node is:', banner.parentNode.parentNode);
// console.log('the parent node is:', banner.parentElement.parentNode);

// console.log(banner.children);
// console.log(banner.childNodes);
