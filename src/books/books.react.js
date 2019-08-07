import React, { Component } from 'react';
class Books extends Component {
    
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() =>({
        query: query.trim()
        }))
    }
    authorsArray = (book) => {
        for (const value of book.authors.values())  {
            const author = value
            return author
        }

    
    }
    render () {
        
        const { query} = this.state
        const {books, handleChange} = this.props
        const {booksWanToRead} = books.shelf === 'wantToRead'
    const showBooks = query  === ''
        ? books
        : books.filter((c) => (    
            c.title.toLowerCase().includes(query.toLowerCase() 
            )
        
        ))
    function checkShelf(books) {
        
        for (let i = 0; i < books.length; i++) {
            if (i.shelf === 'wantToRead') {
                books.push(i)
            }
        }
        console.log(books)
        return books
    }
        return (
         
        <div className="book">
    {showBooks.map((book) =>  (
    <li key={book.title}>
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
        <select defaultValue={book.shelf} onChange={(e) => handleChange(book, e)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>

        </select>

      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{this.authorsArray(book)}</div>


        </li>
    )

    )}
    </div>
);



    }

}

export default Books;