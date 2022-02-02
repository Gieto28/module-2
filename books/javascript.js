
// modelo de dados a ser representado na pagina
document.addEventListener('DOMContentLoaded', inIt, false);

function inIt() {

    // declaring variables

    let grid = document.querySelector('section.grid');
    let filters = document.querySelector('section#filters');

    // checkboxes
    let readYes = document.querySelector('#filterYes');
    let readNo = document.querySelector('#filterNo');

    //div popup with bigImg
    let popup = document.querySelector('#popup');
    let bigImg = document.querySelector('#bigImg');

    // alert popup
    let alert = document.querySelector('.alert');

    // form

    let formCreateBook = document.querySelector('section.submitDiv form');

    let formTitle = document.querySelector('#title');
    let formAuthor = document.querySelector('#author');
    let formIfRead = document.querySelector('#ifRead');
    let formImage = document.querySelector('#image');
    let formBigImage = document.querySelector('#bigImage');

    // buttons

    let submitBtn = document.querySelector('#submitButton')
    let editBtn = document.querySelector('#editButton')

    // event listeners
    // filter event to filter by read or by not read
    filters.addEventListener('change', filterEvent, false);

    // filter event to filter by title name 
    filters.addEventListener('input', filterEvent, false);
    
    // events in the grid 
    grid.addEventListener('click', gridEvents, false);

    // event to close the image when it's big 
    popup.addEventListener('click', closeImage, false);

    // form area to create a new book
    formCreateBook.addEventListener('submit', createBook, false)
    editBtn.addEventListener('click', updateBook, false)

    let bookToEdit;
    let book;



    // showing books
    showBooks(livros);
    

    // functions
    // checking which target we're changing to show the correct filter
    function filterEvent(e) {
        // console.log(e.target);
        if (e.target.id === "filterYes") {
            filterReadBooks(e.target.checked);
            readNo.checked = false;
        }
        if (e.target.id === "filterNo") {
            filterNotReadBooks(e.target.checked);
            readYes.checked = false;
        }

        if (e.target.id === 'searchInput') {
            let searchText = e.target;

            console.log(searchText.value);

            filterByTitle(searchText.value)
        }

    }
    // grid events
    function gridEvents(e) {
        if (e.target.className === "deleteBtn"){
            // assign the dataset to a variable to delete it
            let id = e.target.dataset.id;
            deleteBook(id);
            // console.log(id);
        }

        if (e.target.classList.contains("img")) {
            let bigImgSrc = e.target.dataset.bigimg;
            // add the big image src to the function to reuse the function
            showBigImg(bigImgSrc);
        }

        if (e.target.classList.contains('editBtn')) {
            
            title.focus();
            // adding the dataset to the variable id
            let id = e.target.dataset.id
            book = e.target.parentElement.parentElement;
            
            
            book.classList.add('update')

            updateForm(id);

        }
    }

    // filterting books by read 
    function filterReadBooks(checked) {
        if (checked) {
            let readBooks = livros.filter(livro => livro.alreadyRead === true);
            showBooks(readBooks)
        } else {
            showBooks(livros);
        }
        
    }
    
    // filtering books by not read
    function filterNotReadBooks(checked) {
        if (checked) {
            let notReadBooks = livros.filter (livro => livro.alreadyRead === false );
            showBooks(notReadBooks);
        } else {
            showBooks(livros);
        }
    }
    
    // function to delete the book and update the array without the deleted book
    function deleteBook(id) {
        // making a new array and filtering the books without the id we removed
        let updatedBooks = livros.filter ( livro => livro.id != id);

        livros = updatedBooks
        // update the array with the deleted books 
        showBooks(livros)
    }

    // function to add the class show to the popup and add the src
    function showBigImg(src) {
        popup.classList.add("show");
        bigImg.src = src;
    }

    // function to close the image once it's open
    function closeImage(e) {
        // an if to close the image if clicked outside the image
        if (e.target.classList.contains("show")) {
            popup.classList.remove('show');
        }
    }

    function filterByTitle(text) {
        let bookSearchByTitle = livros.filter( livro => livro.title.search(text) > -1)

        showBooks(bookSearchByTitle);
        console.log(text);
    }

    function createBook(e) {

        if (formTitle.value === '' && formAuthor.value === '') {
            alert.classList.remove('hideAlert');
            e.preventDefault();
            title.focus();

        } else {
        

        alert.classList.add('hideAlert');
        let id = new Date().getTime();

        let livro = new Livro(
            id,
            formTitle.value,
            formAuthor.value,
            formIfRead.checked,
            formImage.value,
            formBigImage.value
        );

        livros.push(livro);
        showBooks(livros);

        // cleanForm();

        formCreateBook.reset(); 
        formTitle.focus();

        e.preventDefault();
        }
        
        // console.log(new date().getTime());

        
    }

    function updateForm(id) {
        bookToEdit = livros.find( l => l.id == id);

        title.value = bookToEdit.title;
        author.value = bookToEdit.author;
        formIfRead.value = bookToEdit.formIfRead;
        formImage.value = bookToEdit.imageUrl;
        formBigImage.value = bookToEdit.imageUrlGr;
        
        submitBtn.classList.add('hide');
        editBtn.classList.add('show');

    }


    function updateBook(e) {

        let updatedBooksObject = livros.map ( livro => {
            if (livro.id === bookToEdit.id) {
                return {
                    ...livro,
                    title: formTitle.value,
                    author: formAuthor.value,
                    alreadyRead: formIfRead.checked,
                    imageUrl: formImage.value,
                    imageUrlGr: formBigImage.value
                }
            } else {
                return livro;
            }
        })

        livros = updatedBooksObject;

        showBooks(livros);

        formCreateBook.reset()

        formTitle.focus()

        editBtn.classList.remove('show')
        submitBtn.classList.remove('hide')

        e.preventDefault()

        book.classList.remove('update')
    }


    // iterar pela array para criar visualmente uma lista coms os objetos
    function showBooks(arrayBooks) {

        grid.innerHTML = "";

        arrayBooks.map( livro => {
            grid.innerHTML += `
            <article>
                <h4>${livro.title}</h4>
                <h4>${livro.author}</h4>
                <img class="img" data-bigimg='${livro.imageUrlGr}' src="images/${livro.imageUrl}">
                <p>already read: ${livro.alreadyRead ? '✓' : 'x'}</p>
                <div>
                    <button class='deleteBtn' data-id=${livro.id}> Delete </button>
                    <button class='editBtn' data-id=${livro.id}> Edit </button>
                </div>
            </article>
            `;
        })
    }




    // Pegar no exercicio anterior da bilioteca e:
    // 1- filtrar livros por lidos e nao lidos                                  - DONE
    // 2 - acrescentar botao Delete para eliminar livros                        - DONE
    // 3 - filtrar por titulo do livro                                          - DONE
    // 4 - Criar formulario para acrescentar novo livro                         - DONE
    // 5 - Editar Livro
    // 6 - clicar na capa e mostrar imagem grande                               - DONE









}
