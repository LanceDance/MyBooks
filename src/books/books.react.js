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
        
    const showBooks = query  === ''
        ? books
        : books.filter((c) => (    
            c.title.toLowerCase().includes(query.toLowerCase() 
            )
        
        ))

    const booksRead = books.filter(book => book.shelf=== 'read')
    const booksCurrentlyReading = books.filter(book => book.shelf=== 'currentlyReading')
    const wantToRead = books.filter(book => book.shelf=== 'wantToRead')        
        return (
            <div className="bookshelf"> 
            <h2 className="bookshelf-title">Books want to Read</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
        <div className="book">
    {wantToRead.map((book) =>  (
        
    <li key={book.title}>

            {console.log(booksRead)}
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
        <select defaultValue={book.shelf} onChange={(e) => handleChange(book, e)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>

        </select>

      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{this.authorsArray(book)}</div>


        </li>
    )

    )}
    </div>
    </ol>
    </div>
    </div>

);



    }

}

export default Books;