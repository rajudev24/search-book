
document.getElementById('search-button').addEventListener('click', function(){
    let seachText = document.getElementById('search-field');
    let searchValue = seachText.value
    // if(searchValue = )
    //Clear the search text
    seachText.value = '';
    // loadBook(searchValue );
    let url = `https://openlibrary.org/search.json?q=${searchValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => displyBook(data.docs))
})

let displyBook = books =>{
    let bookDiv = document.getElementById('book-div');
    let resultItem = document.getElementById('result');
    //Clear search result
    bookDiv.innerHTML = '';
    resultItem.innerHTML = '';
    // Display total number of iteam
    let itemFound = books.length;
    let h3 = document.createElement('h3')
        h3.innerHTML = `
        <h3> Total Iteam Found ${itemFound} </h3>
        `;
    resultItem.appendChild(h3);
    // let itemCount = [];
    // console.log(itemCount)
    books.forEach(book => {
        console.log(book)
        
        //Display  Books
        let newDiv = document.createElement('div');
        newDiv.classList.add('col')
        newDiv.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"><strong>Book Name:</strong> ${book?.title}</h5>
                <p class="card-text"><strong>Book Author:</strong> ${book?.author_name}</p>
                <p class="card-text"><strong>Book Publisher:</strong> ${book?.publisher?.[0]}</p>
                <p class="card-text"><strong>Publish date:</strong> ${book?.publish_date?.[0]}</p>
            </div>
        </div>  
        `;
        bookDiv.appendChild(newDiv);

    });
    
}

