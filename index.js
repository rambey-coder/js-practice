// event bubbling: incase we add another list to the ul

const listContainer = document.querySelector('ul')

// delete book
listContainer.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const list = e.target.parentElement
        listContainer.removeChild(list)
    }
})

// add book
const addForm = document.querySelector('#add-book')

addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = addForm.querySelector('input').value

    const li = document.createElement('li')
    const bookName = document.createElement('span')
    const deleteBtn = document.createElement('span')

    deleteBtn.textContent = 'delete'
    bookName.textContent = value

    deleteBtn.classList.add('delete')
    bookName.classList.add('name')

     li.appendChild(bookName)
     li.appendChild(deleteBtn)
     listContainer.appendChild(li)
})

// check box
const hideBox = document.querySelector('#hide')

hideBox.addEventListener('change', () => {
    if(hideBox.checked) {
        listContainer.style.display = 'none'
    } else {
        listContainer.style.display = 'block'
    }
})

// search book
const searchBox = document.querySelector('#search-books')

searchBox.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase()
    const books = document.getElementsByTagName('li')
    Array.from(books).forEach(book => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) !== -1) {
            book.style.display = 'flex'
        } else {
            book.style.display = 'none'
        }
    })
})
// searchBox.addEventListener('keyup', (e) => {
//     const term = e.target.value.toLowerCase()
//     const books = listContainer.getElementsByTagName('li')
//     Array.from(books).forEach(book => {
//         const title = book.firstElementChild.textContent;
//         if(title.toLowerCase().indexOf(term) !== -1) {
//             book.style.display = 'flex'
//         } else {
//             book.style.display = 'none'
//         }
//     })
// })
