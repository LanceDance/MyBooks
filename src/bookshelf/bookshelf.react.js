import React from 'react';
import Books from '../books/books.react'

class Bookshelf extends React.Component {
  
    render() {
        const {books} = this.props
        const booksRead = books.filter(book => book.shelf=== 'read')
        const booksCurrentlyReading = books.filter(book => book.shelf=== 'currentlyReading')
        const wantToRead = books.filter(book => book.shelf=== 'wantToRead') 

        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            {console.log(books)}
            <div className="bookshelf-books">
              <ol className="books-grid">
              <Books books={this.books}
              handleChange= {this.handleChange} bookShelf={booksRead}/>
              </ol>
              </div>
              </div>
        );
    }
}

export default Bookshelf;