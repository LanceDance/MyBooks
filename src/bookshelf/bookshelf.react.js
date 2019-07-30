import React from 'react';
import Books from '../books/books.react'

class Bookshelf extends React.Component {

    render() {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">

              </ol>
              </div>
              </div>
        );
    }
}

export default Bookshelf;