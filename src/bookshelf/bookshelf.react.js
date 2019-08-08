import React from 'react';
import Books from '../books/books.react'

class Bookshelf extends React.Component {

    render() {
        const {books, handleChange} = this.state
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              <Books books={this.state.books}
              handleChange= {this.handleChange}/>
              </ol>
              </div>
              </div>
        );
    }
}

export default Bookshelf;