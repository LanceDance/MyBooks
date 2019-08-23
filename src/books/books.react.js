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
    authors = (book) => {
        if (typeof book.authors === 'undefined') {
            return 'No author'
        }
        else {
        for (const value of book.authors.values())  {
            const author = value
            return author
        }
    }

    
    }
    render () {
        const {books, handleChange} = this.props
        
    const booksRead = books.filter(book => book.shelf=== 'read')
    const booksCurrentlyReading = books.filter(book => book.shelf=== 'currentlyReading')
    const wantToRead = books.filter(book => book.shelf=== 'wantToRead')        
        return (
            <div className="bookshelf"> 
            <h2 className="bookshelf-title">Books want to Read</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
    {wantToRead.map((book) =>  (
        
    <li key={book.title}>
    <div className="book">

            {console.log(booksRead)}
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${typeof book.imageLinks=== 'undefined' ? ''  : book.imageLinks.smallThumbnail})` }}></div>
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
    <div className="book-authors">{this.authors(book)}</div>

    </div>

        </li>
    )

    )}
    </ol>
    </div>
    <h2 className="bookshelf-title">Books currently Reading</h2>
    <div className="bookshelf-books">
            <ol className="books-grid">
    {booksCurrentlyReading.map((book) =>  (
        
    <li key={book.title}>
    <div className="book">

            {console.log(booksRead)}
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${typeof book.imageLinks=== 'undefined' ? ''  : book.imageLinks.smallThumbnail})` }}></div>
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
    <div className="book-authors">{this.authors(book)}</div>

    </div>

        </li>
    )

    )}
    </ol>
    </div>
    <h2 className="bookshelf-title">Books Read</h2>
    <div className="bookshelf-books">
            <ol className="books-grid">
    {booksRead.map((book) =>  (
        
    <li key={book.title}>
    <div className="book">

            {console.log(booksRead)}
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${typeof book.imageLinks=== 'undefined' ? ''  : book.imageLinks.smallThumbnail})` }}></div>
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
    <div className="book-authors">{this.authors(book)}</div>

    </div>

        </li>
    )

    )}
    </ol>
    </div>
    </div>

);



    }

}

export default Books;